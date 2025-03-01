import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform,Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTaskName,
  changeTaskType,
  changeAssignedTo,
  changeClientName,
  changeDueDate,
  changePriority,
  changeServiceRequest,
  changeStartDate,
  changeReminderDate,
  changeAttachmentName,
  changeRemarks,
} from "../../redux/actions/addTaskAction";
import Dropdown from "../../components/Dropdown";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import StatusDropdown from "../../components/StatusDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTask = (props) => {
  const dispatch = useDispatch();
  const {
    taskName,
    taskType,
    assignedTo,
    clientName,
    dueDate,
    priority,
    serviceRequest,
    startDate,
    reminderDate,
    attachmentName,
    remarks,
  } = useSelector((state) => state.addTask);

 const { 
  taskNamePlaceholder,
  taskTypePlaceholder,
  assignedToPlaceholder,
  clientNamePlaceholder,
  dueDatePlaceholder,
  priorityPlaceholder,
  serviceRequestPlaceholder,
  startDatePlaceholder,
  reminderDatePlaceholder,
  attachmentNamePlaceholder,
  remarksPlaceholder,
  } = useSelector((state) => state.addTask);
  
  
  const goBackCall = () => {
    props.navigation.goBack();
  };

  // Date Picker States
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDateField, setActiveDateField] = useState(null);

  // Handle Date Selection
  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      const formattedDate = date.toISOString().split("T")[0];
      if (activeDateField === "dueDate") dispatch(changeDueDate(formattedDate));
      if (activeDateField === "startDate") dispatch(changeStartDate(formattedDate));
      if (activeDateField === "reminderDate") dispatch(changeReminderDate(formattedDate));
    }
    setShowDatePicker(false);
  };
  const handleAddTask = () => {
    const fields = [
      { value: taskName, placeholder: taskNamePlaceholder },
      { value:  taskType, placeholder: taskTypePlaceholder },
      { value: assignedTo, placeholder: assignedToPlaceholder },
      { value: clientName, placeholder: clientNamePlaceholder },
      { value: dueDate, placeholder: dueDatePlaceholder },
      { value: priority, placeholder: priorityPlaceholder },
      { value: serviceRequest, placeholder: serviceRequestPlaceholder },
      { value:  startDate, placeholder: startDatePlaceholder },
      { value: reminderDate, placeholder: reminderDatePlaceholder },
      { value: attachmentName, placeholder: attachmentNamePlaceholder },
      { value:  remarks, placeholder: remarksPlaceholder }
    ];
    
    for (const [key, value] of Object.entries(fields)) {
      if (!value || value.trim() === "") {
        Alert.alert("Validation Error", `${key.replace(/([A-Z])/g, " $1")} is required.`); 
        return;
      }
    }

    // If all validations pass, proceed with submission
    Alert.alert("Success", "Follow-up added successfully.");
        } ;
  

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
        <NavigationHeaderBack text="Add Task" onPress={goBackCall} />
      </View>
      <ScrollView
        style={{ flex: 1, marginBottom: 60 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.centerContainer}>
          <CustomTextInput
            value={taskName}
            placeholder={taskNamePlaceholder}
            onChangeText={(text) => dispatch(changeTaskName(text))}
          />
          <Dropdown
            label={taskTypePlaceholder}
            selectedValue={taskType}
            onValueChange={(value) => dispatch(changeTaskType(value))}
            options={[{ label: "Lead", value: "Lead" }, { label: "Client", value: "client" }]}
            zIndex={4000} // Highest
            elevation={8}
          />
          <Dropdown
            label={assignedToPlaceholder}
            selectedValue={assignedTo}
            onValueChange={(value) => dispatch(changeAssignedTo(value))}
            options={[
              { label: "Mr.Akshat", value: "akshat" },
              { label: "Mr.Paresh", value: "paresh" },
              { label: "Mr.Rajesh", value: "rajesh" },
              { label: "Mr.Subhash", value: "subhash" },
            ]}
            zIndex={3000} // Highest
            elevation={7}
          />
          <Dropdown
            label={clientNamePlaceholder}
            selectedValue={clientName}
            onValueChange={(value) => dispatch(changeClientName(value))}
            options={[
              { label: "Mahesh Pawar", value: "mahesh pawar" },
              { label: "Sonali Thakur", value: "sonali thakur" },
              { label: "Raj Sharma", value: "raj sharma" },
              { label: "Virendra Kambli", value: "virendra kambli" },
            ]}
            zIndex={2000} // Highest
            elevation={6}
          />
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            value={dueDate}
            placeholder={dueDatePlaceholder}
            onChangeText={(text)=>dispatch(changeDueDate(text))}
            onIconPress={() => {
              setActiveDateField("dueDate");
              setShowDatePicker(true);
            }}
          />
           <StatusDropdown
          label={ priorityPlaceholder}
          selectedValue={priority}
          onValueChange={(value) => dispatch(changePriority(value))}
          apiType="taskPriority"
          zIndex={1000}
          elevation={5}
        />
          <CustomTextInput
            value={serviceRequest}
            placeholder={serviceRequestPlaceholder}
            onChangeText={(text) => dispatch(changeServiceRequest(text))}
          />
          <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          value={startDate}
          placeholder={startDatePlaceholder}
          onChangeText={(text)=>dispatch(changeStartDate(text))}
          onIconPress={() =>{
            setActiveDateField("startDate");
             setShowDatePicker(true)}}
        />
        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          value={reminderDate}
          placeholder={reminderDatePlaceholder}
          onChangeText={(text)=>dispatch(changeReminderDate(text))}
          onIconPress={() =>{
            setActiveDateField("reminderDate");
             setShowDatePicker(true)}}
        />
          <CustomTextInput
            followupicon={require('../../assets/icons/Scan/scan.png')}
            value={attachmentName}
            placeholder={attachmentNamePlaceholder}
            onChangeText={(text) => dispatch(changeAttachmentName(text))}
          />
          <CustomTextInput
            value={remarks}
            placeholder={remarksPlaceholder}
            onChangeText={(text) => dispatch(changeRemarks(text))}
          />
          <CustomButton
            title="Submit"
            customStyle={ButtonStyles.blueButton}
            textStyles={ButtonStyles.blueButtonText} onPress={handleAddTask}
          />
        </View>
        {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}
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
        position: "relative",
      },
});

export default AddTask;
