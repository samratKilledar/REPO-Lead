import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Dropdown from "../../components/Dropdown";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";

const AddFollowUP = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [assign, setAssign] = useState(null);
  const [attachment, setAttachment] = useState('');
  const [meetSchedule, setMeetSchedule] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [remark, setRemark] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.centerContainer}>
          <CustomTextInput
            type={title}
            value={title}
            placeholder="Title"
            onChangeText={setTitle}
          />
          <Dropdown
            label="Type"
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
            zIndex={3000}
          />
          <Dropdown
            label="Task Assign To"
            selectedValue={assign}
            onValueChange={setAssign}
            options={[
              { label: "Mr.Akshat", value: "akshat" },
              { label: "Mr.Paresh", value: "paresh" },
              { label: "Mr.Rajesh", value: "paresh" },
              { label: "Mr.Subhash", value: "subhash" },
            ]}
            zIndex={2000}
          />
          <Dropdown
            label="Client"
            selectedValue={assign}
            onValueChange={setAssign}
            options={[
              { label: "Mr.Akshat", value: "akshat" },
              { label: "Mr.Paresh", value: "paresh" },
              { label: "Mr.Rajesh", value: "paresh" },
              { label: "Mr.Subhash", value: "subhash" },
            ]}
            zIndex={1000}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={meetSchedule}
            value={meetSchedule}
            placeholder="Due Date"
            onChangeText={setMeetSchedule}
          />
          <Dropdown
            label="Priority"
            selectedValue={assign}
            onValueChange={setAssign}
            options={[
              { label: "Mr.Akshat", value: "akshat" },
              { label: "Mr.Paresh", value: "paresh" },
              { label: "Mr.Rajesh", value: "paresh" },
              { label: "Mr.Subhash", value: "subhash" },
            ]}
            zIndex={1000}
          />
          <CustomTextInput
            type={title}
            value={title}
            placeholder="Service Request"
            onChangeText={setTitle}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={meetSchedule}
            value={meetSchedule}
            placeholder="Start Date"
            onChangeText={setMeetSchedule}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={meetSchedule}
            value={meetSchedule}
            placeholder="Reminder Date"
            onChangeText={setMeetSchedule}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Scan/scan.png')}
            type={attachment}
            value={attachment}
            placeholder="Attachment"
            onChangeText={setTitle}
          />
          <CustomTextInput
            type={remark}
            value={remark}
            placeholder="Remark"
            onChangeText={setRemark}
          />
          <CustomButton title="Submit" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 15,
    backgroundColor: "#FFFFFF",
  },
  centerContainer: {
    flex: 1,
    gap: 12,
  },
});

export default AddFollowUP;
