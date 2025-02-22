import React, { useState } from "react";
import { 
  View, Image, Text, TouchableOpacity, StyleSheet, Modal 
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./CustomText";
import TextStyle from "../styles/TextStyle";
import CustomButton from "./CustomButton";
import ButtonStyles from "../styles/ButtonStyles";

const LeadCard = (props) => {
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

  const addFollow = () => {
    if (props.screenType === "lead") {
      props.navigation.navigate("AddFollowUp");  // ✅ Ensure this exists inside LeadStackScreen
    } else if (props.screenType === "client") {
      props.navigation.navigate("ClientAddFollowUp");  // ✅ Ensure this exists inside ClientStackScreen
    }
    setMenuVisible(false);
    setModalVisible(false);
  };
  const editProfile=()=>{
    props.navigation.navigate("EditProfileScreen")
    setMenuVisible(false);
    setModalVisible(false)
  }
  const details = () => {   
    if (props.screenType === "lead") {
      props.navigation.navigate("LeadDetails", { name: props.name });
    } else if (props.screenType === "client") {
      props.navigation.navigate("ClientDetails", { name: props.name });
    } else if (props.screenType === "task") {
      props.navigation.navigate("CloseAccountScreen", { name: props.name }); // ✅ Fix
    }
  };
  

  
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.HorLayout}>
        <TouchableOpacity onPress={details}>
               <CustomText text={props.name} customstyle={TextStyle.nameText} />
        </TouchableOpacity>
          
          <CustomText text={props.phone} customstyle={TextStyle.namePhone} />

          {/* Three Dots Icon */}
          <View style={styles.moreCircleDot}>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <Image source={require("../assets/icons/MoreCircle.png")} style={styles.moreCircleIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.VerLayout}>
          {props.status && (
            <LinearGradient
              colors={props.statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.statusBadge}
            >
              <CustomText text={props.status} customstyle={{}} />
            </LinearGradient>
          )}
          {props.leadstatus && (
            <LinearGradient
              colors={props.statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.leadstatusBadge}
            >
              <CustomText text={props.leadstatus} customstyle={TextStyle.statusText} />
            </LinearGradient>
          )}
          <CustomText text={props.dateTime} customstyle={TextStyle.dateTime} />
        </View>
      </View>

      {/* Popup Menu */}
      {menuVisible && (
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuItem} onPress={ editProfile}>
            <Image source={require("../assets/icons/Edit/edit.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Edit</Text>
          </TouchableOpacity>

         {props.menuType === "follow" ? (
            <TouchableOpacity style={styles.menuItem} onPress={addFollow}>
              <Image source={require("../assets/icons/PlusBlack/Plus.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Add Follow</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.menuItem} onPress={() => setModalVisible(true)}>
              <Image source={require("../assets/icons/LSTIckSquare/lsTickSquare.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Status</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Delete clicked")}>
            <Image source={require("../assets/icons/Delete/delete.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bottom Pop-up Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Status</Text>
            
            {statusOptions.map((option, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.radioButton}
                onPress={() => setSelectedStatus(option)}
              >
                <Text style={styles.radioText}>{option}</Text>
                <View style={selectedStatus === option ? styles.radioSelected : styles.radioUnselected} />
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
              <Text style={styles.submitText}>Submit</Text>
            </CustomButton>
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
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#EEEEEE",
    shadowColor: "#04060F14",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 60,
    padding: 24, 
    gap: 24, 
    overflow: "hidden",
  },
  HorLayout: {
    gap: 10, 
  },
  VerLayout: { 
    gap: 10,
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "flex-end", 
  },
  statusBadge: {
    borderRadius: 100,
    //paddingVertical: 6,
    paddingTop:6,
    //paddingHorizontal: 16,
    paddingRight:16,
    paddingBottom:6,
    paddingLeft:16,
    gap: 4,
  },
  moreCircleDot: {
    position: "absolute",
    top: 1,
    right: 1,
    width: 24,  
    height: 24,
  },
  moreCircleIcon: {
    width: 24,   
    height: 24,
    resizeMode: "contain", 
  },
  leadstatusBadge: {
    width: 159,
    height: 32,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 16,
    gap: 4,
  },

  /* Menu Styles */
  menuBox: {
    position: "absolute",
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

  /* Modal Styles */
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
  modalTitle: {
    fontFamily:'Urbanist',
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    lineHeight:28.8,
    borderBottomWidth:1,
    borderBottomColor:'#EEEEEE'
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    },
  radioText: {
    fontFamily:'Urbanist',
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    //marginBottom: 10,
    lineHeight:21.6,
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
    backgroundColor: "#2B2162",
  },

});

export default LeadCard;
