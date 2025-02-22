import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Dropdown from "../../components/DropDown";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";

const AddFollowUP = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [assign, setAssign] = useState(null);
  const [client, setClient] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('nulll');
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [attachment, setAttachment] = useState('');
  const [remark, setRemark] = useState('');

  return (
     
      <View style={styles.container}>
      <View style={{flex:0.1}}>
      <NavigationHeaderBack text="Add Task"/>
      </View>
      <ScrollView
        style={{ flex:1, marginBottom: 60 }}
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
              { label: "Lead", value: "Lead" },
              { label: "Client", value: "client" },
            ]}
            zIndex={4000}
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
            zIndex={3000}
          />
          <Dropdown
            label="Client"
            selectedValue={client}
            onValueChange={setClient}
            options={[
              { label: "Mahesh Pawar", value: "mahesh pawar" },
              { label: "Sonali Thakur", value: "sonali takur" },
              { label: "Raj Sharma", value: "raj sharma" },
              { label: "Virendra Kambli", value: "virendra kambli" },
            ]}
            zIndex={2000}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={dueDate}
            value={dueDate}
            placeholder="Due Date"
            onChangeText={setDueDate}
          />
          <Dropdown
            label="Priority"
            selectedValue={priority}
            onValueChange={setPriority}
            options={[
              { label: "High", value: "high" },
              { label: "Mid", value: "mid" },
              { label: "Low", value: "low" },

            ]}
            zIndex={1000}
          />
          <CustomTextInput
            type={service}
            value={service}
            placeholder="Service Request"
            onChangeText={setService}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={startDate}
            value={setStartDate}
            placeholder="Start Date"
            onChangeText={setStartDate}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={reminderDate}
            value={reminderDate}
            placeholder="Reminder Date"
            onChangeText={setReminderDate}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Scan/scan.png')}
            type={attachment}
            value={attachment}
            placeholder="Attachment"
            onChangeText={setAttachment}
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
    flex: 1,
    paddingRight: 10,
    paddingLeft: 8,
    paddingTop: 15,
    backgroundColor: "#FFFFFF",
    gap: 20, 
  },
  centerContainer: {
    flex: 0.7,
    gap: 12,
    zIndex: 1, 
    paddingRight: 10,
    paddingLeft: 5,
  },
});

export default AddFollowUP;
