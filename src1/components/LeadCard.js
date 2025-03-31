import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from './CustomText';
import TextStyle from '../styles/TextStyle';
import CustomButton from './CustomButton';
import ButtonStyles from '../styles/ButtonStyles';
import {EditLeadFetch} from '../redux/actions/editLeadAction';
import {deleteLead} from '../redux/actions/leadDeleteAction';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const LeadCard = props => {
  const dispatch = useDispatch();
  const {editLeadDataAgainstId} = useSelector((state)=> state.editLeadReducer)

  const navigationtolead = useNavigation;
  const {
    id,
    name,
    phone,
    dateTime,
    status,
    statusGradient,
    menuType,
    navigation,
    screenType,
  } = props;

  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Task Complete');

  const statusOptions = [
    'Task Complete',
    'Waiting for Documents',
    'Under Process',
    'Reject',
    'Mandate Pending',
    'Informed Client',
  ];

  const addFollow = () => {
    if (props.screenType === 'lead') {
      props.navigation.navigate('AddFollowUp');
    } else if (props.screenType === 'client') {
      props.navigation.navigate('ClientAddFollowUp');
    }
    setMenuVisible(false);
    setModalVisible(false);
  };

  const editProfile = async () => {
    try {
      if (!props.id) {
        Alert.alert('Error', "This lead isn't ready for editing yet");
        return;
      }

      setIsEditing(true);
      console.log('Editing lead ID:', props.id);

      dispatch(EditLeadFetch(props.id));
      navigation.navigate('LeadAddPersonal', { leadId: props.id, leadData: editLeadDataAgainstId });
      // if (result) {
      //   // Only navigate if successful
      //   alert(JSON.stringify(result)+"===="+props.id)
      //  // navigation.navigate('Editlead1');
      // }
    } catch (error) {
      console.error('Edit failed:', error);
      const message =
        error.response?.data?.message ||
        'Lead data not available. Please try again in a few seconds.';
      Alert.alert('Error', message);
    } finally {
      setIsEditing(false);
      setMenuVisible(false);
      setModalVisible(false);
    }
  };

  const handledelete = async () => {
    try {
      if (!id) {
        console.warn('Lead ID missing:', {props});
        throw new Error('No lead ID available');
      }

      console.log('Deleting  lead ID:', id);
      // await dispatch(deleteLead(id));
      const result = await dispatch(deleteLead(id));
      if (result) {
        // Only navigate if successful
        navigationtolead.navigate('Lead');
      }
    } catch (error) {
      console.error('Delete failed:', error);
      const message =
        error.response?.data?.message ||
        'Lead data not available. Please try again in a few seconds.';
      Alert.alert('Error', message);
    } finally {
      setMenuVisible(false);
      setModalVisible(false);
    }
  };

  const details = () => {
    if (props.screenType === 'lead') {
     // alert( props.id+"== "+props.name)
      props.navigation.navigate('LeadDetails', {
        leadId: props.id,
        name: props.name,
      });
    } else if (props.screenType === 'client') {
      props.navigation.navigate('ClientDetails', {name: props.name});
    } else if (props.screenType === 'task') {
      props.navigation.navigate('CloseAccountScreen', {name: props.name});
    }
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={details}>
        <View style={styles.HorLayout}>
          <CustomText text={name} customstyle={TextStyle.nameText} />
          <CustomText text={phone} customstyle={TextStyle.namePhone} />

          {/* Three Dots Icon */}
          <View style={styles.moreCircleDot}>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <Image
                source={require('../assets/icons/MoreCircle.png')}
                style={styles.moreCircleIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.VerLayout}>
          {props.status && (
            <LinearGradient
              colors={statusGradient}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.statusBadge}>
              <CustomText text={props.status} customstyle={{}} />
            </LinearGradient>
          )}
          {props.leadstatus && (
            <LinearGradient
              colors={statusGradient}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.leadstatusBadge}>
              <CustomText
                text={props.leadstatus}
                customstyle={TextStyle.statusText}
              />
            </LinearGradient>
          )}
          <CustomText text={dateTime} customstyle={TextStyle.dateTime} />
        </View>
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuItem} onPress={editProfile}>
            <Image
              source={require('../assets/icons/Edit/edit.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Edit</Text>
          </TouchableOpacity>

          {menuType === 'follow' ? (
            <TouchableOpacity style={styles.menuItem} onPress={addFollow}>
              <Image
                source={require('../assets/icons/PlusBlack/Plus.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Add Follow</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => setModalVisible(true)}>
              <Image
                source={require('../assets/icons/LSTIckSquare/lsTickSquare.png')}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Status</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.menuItem} onPress={handledelete}>
            <Image
              source={require('../assets/icons/Delete/delete.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalCloseLine}
              onPress={() => setModalVisible(false)}>
              <View style={styles.closeLine} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Status</Text>

            {statusOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioButton}
                onPress={() => setSelectedStatus(option)}>
                <Text style={styles.radioText}>{option}</Text>
                <View
                  style={
                    selectedStatus === option
                      ? styles.radioSelected
                      : styles.radioUnselected
                  }>
                  {selectedStatus === option && (
                    <View style={styles.radioInnerCircle} />
                  )}
                </View>
              </TouchableOpacity>
            ))}

            <CustomButton
              title="Submit"
              customstyle={ButtonStyles.blueButton}
              textStyles={ButtonStyles.blueButtonText}
              onPress={() => {
                console.log('Selected Status:', selectedStatus);
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    gap: 24,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    shadowColor: '#04060F14',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 60,
    padding: 24,
    gap: 24,
    overflow: 'hidden',
  },
  HorLayout: {
    gap: 10,
  },
  VerLayout: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  statusBadge: {
    borderRadius: 100,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    gap: 4,
  },
  moreCircleDot: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 24,
    height: 24,
  },
  moreCircleIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  leadstatusBadge: {
    width: 159,
    height: 32,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 16,
    gap: 4,
  },
  menuBox: {
    position: 'absolute',
    top: 30,
    right: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeLine: {
    width: 90,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginLeft: 130,
    justifyContent: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontFamily: 'Urbanist',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 28.8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  radioText: {
    fontFamily: 'Urbanist',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 21.6,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#2B2162',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#2B2162',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2B2162',
  },
});

export default LeadCard;
