import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from '../../redux/actions/closeAccountAction';
const CloseAccountScreen = () => {
  const navigation = useNavigation()
  const goBackCall = () => {
    navigation.goBack();
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Task Complete");
  const statusOptions = [
    "Task Complete",
    "Waiting for Documents",
    "Under Process",
    "Reject",
    "Mandate Pending",
    "Informed Client"
  ];

  const taskPlaceHolder = useSelector(state => state.closeAccountReducer.taskPlaceHolder);
  const taskValue = useSelector(state => state.closeAccountReducer.taskValue);
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.centralcontainer}>
          <View style={{ flex: 0.3, gap: 16, flexDirection: "row", }} >
            <NavigationHeaderBack text="Close Account" onPress={goBackCall} />
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <Image
                source={require('../../assets/icons/MoreCircle.png')}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContainer}>
            <DetailItem icon={require('../../assets/icons/Work/work.png')} label={taskPlaceHolder.taskName} detail={taskValue.taskName} />
            <DetailItem icon={require('../../assets/icons/ProfileGrey/profileGrey.png')} label={taskPlaceHolder.assignedTo} detail={taskValue.assignedTo} />
            <DetailItem icon={require('../../assets/icons/ShieldDone.png')} label={taskPlaceHolder.priority}detail={taskValue.priority} />
            <DetailItem icon={require('../../assets/icons/Bag/bag.png')} label="Progress" detail="50%" />
            <DetailItem icon={require('../../assets/icons/LSTIckSquare/lsTickSquare.png')} label={taskPlaceHolder.taskStatus} detail={taskValue.taskStatus} />
            <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label={taskPlaceHolder.dueDate} detail={taskValue.dueDate} />
            <DetailItem icon={require('../../assets/icons/Service.png')} label={taskPlaceHolder.serviceRequest} detail={taskValue.serviceRequest} />
            <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label={taskPlaceHolder.startDate} detail={taskValue.startDate}/>
            <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label={taskPlaceHolder.reminderDate} detail={taskValue.reminderDate} />
        <DetailItem icon={require('../../assets/icons/Remarks.png')} label={taskPlaceHolder.remarks} detail={taskValue.remarks} />
          </View>
        </View>
        {menuVisible && (
          <View style={styles.menuBox}>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Edit clicked")}>
              <Image source={require("../../assets/icons/Edit/edit.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setModalVisible(true)}>
              <Image source={require("../../assets/icons/LSTIckSquare/lsTickSquare.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Delete clicked")}>
              <Image source={require("../../assets/icons/Delete/delete.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalCloseLine}
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.closeLine} />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Status</Text>

              {statusOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.radioButton}
                  onPress={() => setSelectedStatus(option)}
                >
                  <Text style={styles.radioText}>{option}</Text>
                  <View style={selectedStatus === option ? styles.radioSelected : styles.radioUnselected} >
                    {selectedStatus === option && <View style={styles.radioInnerCircle} />}
                  </View>
                </TouchableOpacity>
              ))}

              <CustomButton
                title="Submit"
                customstyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText}
                onPress={() => {
                  console.log("Selected Status:", selectedStatus);
                  setModalVisible(false);
                }}
              >
              </CustomButton>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingLeft: 5,
    paddingBottom: 48,
    justifyContent: "space-between",
  },
  centralcontainer: {
    flex: 3,
    width: '100%',
    gap: 32,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 32,
    marginBottom: 150,
  },
  detailsContainer: {
    flex: 5,
    gap: 15,
    paddingLeft: 5,
    paddingRight: 20,

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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeLine: {
    width: 90,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginLeft: 130,
    justifyContent:"center",
    marginBottom: 10
  },
  modalTitle: {
    fontFamily: 'Urbanist',
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 28.8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  radioText: {
    fontFamily: 'Urbanist',
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 21.6,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#2B2162",
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#2B2162",
    justifyContent: "center",
    alignItems: "center",
  },

  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2B2162",
  },

});

export default CloseAccountScreen;