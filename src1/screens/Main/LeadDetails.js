import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import InsuranceCard from "../../components/InsuranceCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LeadDetailFetch } from "../../redux/actions/leadListAction";
import {EditLeadFetch} from '../../redux/actions/editLeadAction';
import {deleteLead} from '../../redux/actions/leadDeleteAction';


const LeadDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {editLeadDataAgainstId} = useSelector((state)=> state.editLeadReducer)
  const { leadId } = route.params;

  const leadDetails = useSelector((state) => state.leadDetailReducer);
  const insuranceList = useSelector((state) => state.leadDetailReducer.InsuranceList);

  const [menuVisible, setMenuVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (leadId) {
      dispatch(LeadDetailFetch(leadId))
        .catch((error) => console.error("Error fetching lead details:", error));
    }
  }, [dispatch, leadId]);

  const addfollow = () => {
    navigation.navigate("AddFollowUp")
  }
  const addService = () => {
    navigation.navigate("LeadAddServices")
  }

    useEffect(()=>{
      if(editLeadDataAgainstId.id != "" && editLeadDataAgainstId.id != undefined){
        if (leadId != "" && leadId != undefined){
          navigation.navigate('LeadAddPersonal', { leadId: leadId, leadData: editLeadDataAgainstId });
        }
      }
    },[editLeadDataAgainstId])

    const editLeadPage = async () => {
      try {
        if (!leadId) {
          console.log('Error', "This lead isn't ready for editing yet");
          return;
        }
  
        setIsEditing(true);
        console.log('Editing lead ID:', leadId);
        dispatch(EditLeadFetch(leadId));
      } catch (error) {
        console.error('Edit failed:', error);
        const message =
          error.response?.data?.message ||
          'Lead data not available. Please try again in a few seconds.';
        console.log('Error', message);
      } finally {
        setIsEditing(false);
        setMenuVisible(false);
        setModalVisible(false);
      }
    };

    const handledelete = async () => {
      try {
        if (!leadId) {
          console.warn('Lead ID missing');
          return;
        }
    
        // Execute delete action
        await dispatch(deleteLead(leadId));
        
        // If we get here, deletion was successful
        navigation.navigate("Lead");
        
      } catch (error) {
        console.error('Delete failed:', error);
      } finally {
        setMenuVisible(false);
      }
    };


  const fullName = `${leadDetails?.firstName || ''} ${leadDetails?.lastName || ''}`.trim();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingRight: 28, marginLeft: 8 }}>
        <NavigationHeaderBack text={fullName || "Lead Details"} onPress={() => navigation.goBack()} />
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Image source={require('../../assets/icons/MoreCircle.png')} style={{ width: 28, height: 28 }} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.centralcontainer}>
        <View style={styles.detailsContainer}>
          <DetailItem
            icon={require('../../assets/icons/ProfileGrey/profileGrey.png')}
            label="Name"
            detail={fullName || "N/A"}
          />
          <DetailItem
            icon={require('../../assets/icons/Call/call.png')}
            label="Mobile No"
            detail={leadDetails?.mobileNo || "N/A"}
          />
          <DetailItem
            icon={require('../../assets/icons/Address/Address.png')}
            label="Address"
            detail={`${leadDetails?.addressLine1 || ''}, ${leadDetails?.addressLine2 || ''},${leadDetails?.cityName || ''}` || "N/A"}
            multiline={true}
            detailStyle={styles.addressDetail}
          />
          <DetailItem
            icon={require('../../assets/icons/Bag/bag.png')}
            label="Occupation"
            detail={leadDetails?.occupationName || "N/A"}
          />
          <DetailItem
            icon={require('../../assets/icons/Work/work.png')}
            label="Type of Work"
            detail={leadDetails?.workType || "N/A"}
          />
          <DetailItem
            icon={require('../../assets/icons/Wallet/wallett.png')}
            label="Monthly Income"
            detail={leadDetails?.monthlyIncome ? `₹${leadDetails.monthlyIncome}` : "N/A"}
          />
          <DetailItem
            icon={require('../../assets/icons/Chart/chart.png')}
            label="Company Name"
            detail={leadDetails?.organisationName || "N/A"}
          />
          <View style={styles.leadStatusContainer}>
            <DetailItem
              icon={require('../../assets/icons/LSTIckSquare/lsTickSquare.png')}
              label="Lead Status"
              detail={<Text style={styles.leadStatusText}>{leadDetails?.leadStatusName || "N/A"}</Text>}
            />
          </View>
          <DetailItem
            icon={require('../../assets/icons/Calendar/calendar.png')}
            label="Lead Date"
            detail={leadDetails?.leadDate || "N/A"}
          />
        </View>

        <View style={styles.followup}>
          <View style={{ flex: 1, margin: 10 }}>
            <CustomButton title="Add Follow Up" customStyle={ButtonStyles.addButton} textStyles={ButtonStyles.addButtonText} onPress={addfollow} />
          </View>
          <View style={{ flex: 1, margin: 10 }}>/           
            <CustomButton title="Add Services" customStyle={ButtonStyles.addButton} textStyles={ButtonStyles.addButtonText} onPress={addService} />
          </View>
        </View>

        <View style={styles.insuranceCard}>
          <Text style={styles.insuranceText}>Interested Services</Text>
          {insuranceList && insuranceList.length > 0 ? (
            insuranceList.map((item, index) => (
              <InsuranceCard
                key={index}
                title={item.serviceName || "Service"} 
                description={item.remark || "No remarks"}
              />
            ))
          ) : (
            <Text style={styles.noServicesText}>No services added yet</Text>
          )}
        </View>
      </ScrollView>

      {menuVisible && (
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuItem} onPress={editLeadPage}>
            <Image source={require("../../assets/icons/Edit/edit.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handledelete}>
            <Image source={require("../../assets/icons/Delete/delete.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 45,
    justifyContent: 'space-between',
  },
  centralcontainer: {
    paddingLeft: 20,
    paddingRight: 5,
  },
  detailsContainer: {
    flex: 5,
    gap: 12,
    paddingTop: 30,
  },
  followup: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
    paddingRight: 5,
  },
  leadStatusContainer: {
    height: 32,
    marginRight: 10,
    justifyContent: 'center',
  },
  leadStatusText: {
    color: '#2B2162',
    fontSize: 14,
    lineHeight: 16,
  },
  insuranceCard: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 1,
    marginBottom: 30,
    gap: 24,
  },
  insuranceText: {
    fontFamily: "Urbanist",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21.6,
    color: "#212121",
  },
  noServicesText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
  menuBox: {
    position: "absolute",
    flex: 1,
    top: 30,
    right: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    resizeMode: "contain",
  },
  menuText: {
    fontSize: 14,
  },
    addressDetail: {
    flexShrink: 1,
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
});

export default LeadDetails;


