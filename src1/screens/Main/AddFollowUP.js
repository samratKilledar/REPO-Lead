
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "../../components/Dropdown";
// import Navigation from "../../components/Navigation";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import { useNavigation } from "@react-navigation/native";


const AddFollowUP = (props) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [assign, setAssign] = useState(null);
  const [attachment, setAttachment] = useState('');
  const [meetSchedule, setMeetSchedule] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [remark, setRemark] = useState('');
  const navigation = useNavigation(); 
  const goBackCall = () => {
    navigation.popToTop(); // Goes back to the first screen in the stack (LeadScreen)
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.1 , marginLeft: 5,}}>
        <NavigationHeaderBack text="Add Follow-Up" onPress={goBackCall}/>
        </View>

      <View style={styles.centerContainer}>
        <CustomTextInput
          type={title}
          value={title}
          placeholder="Title"
          onChangeText={setTitle}
        />
        <Dropdown
          label="Status"
          selectedValue={type}
          onValueChange={setType}
          options={[
            { label: "Insurance Under Process", value: "Insurance Under Process" },
            { label: "Mandate Approved", value: "Mandate Approved" },
            { label: "Demat Under Process", value: "Demat Under Process" },
            { label: "Mandate Pending", value: "Mandate Pending" },
            { label: "Case Declined", value: "Case Declined" },
            { label: "Reject", value: "client" },
            { label: "Payment Pending", value: "Payment Pending" },
            { label: "Task Completed", value: "Task Completed" },
            { label: "Document Recived & Under Process", value: "Document Recived & Under Process" },
            { label: "Policy Issues", value: "Policy Issues" },
            { label: "Insurance Pending", value: "Insurance Pending" },
            { label: "Waiting For Documents", value: "Waiting For Documents" },
            { label: "Conversation Pending", value: "Conversation Pending" },
          ]}
           zIndex={2000}
        />
        <Dropdown
          label="Assign"
          selectedValue={assign}
          onValueChange={setAssign}
          options={[
            { label: "Mr.Akshat", value: "akshat" },
            { label: "Mr.Paresh", value: "paresh" },
            { label: "Mr.Rajesh", value: "paresh" },
            { label: "Mr.Subhash", value: "subhash" },
          ]}
          zIndex={1000} // Lowest zIndex
        />
        <CustomTextInput
          followupicon={require('../../assets/icons/Scan/scan.png')}
          type={attachment}
          value={attachment}
          placeholder="Attachment"
          onChangeText={setTitle}
        />
        <CustomTextInput
          followupicon={require('../../assets/icons/Calendar/calendar.png')}
          type={meetSchedule}
          value={meetSchedule}
          placeholder="Next Meeting schedule on"
          onChangeText={setMeetSchedule}
        />
         <CustomTextInput
         followupicon={require('../../assets/icons/Calendar/calendar.png')}
          type={scheduleTime}
          value={scheduleTime}
          placeholder="Schedule Time"
          onChangeText={setScheduleTime}
        />
         <CustomTextInput
          type={remark}
          value={remark}
          placeholder="Remark"
          onChangeText={setRemark}
        />
        <CustomButton title="Submit" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 5,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    gap: 20, 
  },
  centerContainer: {
    flex: 0.7,
    gap: 12,
    zIndex: 1, 
    paddingRight: 5,
    paddingLeft: 12,
  },
});

export default AddFollowUP;



