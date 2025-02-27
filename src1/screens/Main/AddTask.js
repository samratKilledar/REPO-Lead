// import React, { useState } from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import Dropdown from "../../components/Dropdown";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import NavigationHeaderBack from "../../components/NavigationHeaderBack";
// import CustomTextInput from "../../components/CustomTextInput";
// import CustomButton from "../../components/CustomButton";
// import ButtonStyles from "../../styles/ButtonStyles";
// import StatusDropdown from "../../components/StatusDropdown";

// const AddTask = (props) => {
//   const [title, setTitle] = useState('');
//   const [type, setType] = useState(null);
//   const [assign, setAssign] = useState(null);
//   const [client, setClient] = useState(null);
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('nulll');
//   const [service, setService] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [reminderDate, setReminderDate] = useState('');
//   const [attachment, setAttachment] = useState('');
//   const [remark, setRemark] = useState('');
//   const goBackCall = () => {
//     props.navigation.goBack();
//   };

//   return (

//     <View style={styles.container}>
//       <View style={{ flex: 0.1 }}>
//         <NavigationHeaderBack text="Add Task" onPress={goBackCall} />
//       </View>
//       <ScrollView
//         style={{ flex: 1, marginBottom: 60 }}
//         contentContainerStyle={{ paddingBottom: 20 }}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.centerContainer}>
//           <CustomTextInput
//             type={title}
//             value={title}
//             placeholder="Title"
//             onChangeText={setTitle}
//           />
//           <Dropdown
//             label="Type"
//             selectedValue={type}
//             onValueChange={setType}
//             options={[
//               { label: "Lead", value: "Lead" },
//               { label: "Client", value: "client" },
//             ]}
//             zIndex={4000} // Highest
//             elevation={8}
//           />
//           <Dropdown
//             label="Task Assign To"
//             selectedValue={assign}
//             onValueChange={setAssign}
//             options={[
//               { label: "Mr.Akshat", value: "akshat" },
//               { label: "Mr.Paresh", value: "paresh" },
//               { label: "Mr.Rajesh", value: "paresh" },
//               { label: "Mr.Subhash", value: "subhash" },
//             ]}
//             zIndex={3000} // Above Client Dropdown
//             elevation={7}
//           />
//           <Dropdown
//             label="Client"
//             selectedValue={client}
//             onValueChange={setClient}
//             options={[
//               { label: "Mahesh Pawar", value: "mahesh pawar" },
//               { label: "Sonali Thakur", value: "sonali takur" },
//               { label: "Raj Sharma", value: "raj sharma" },
//               { label: "Virendra Kambli", value: "virendra kambli" },
//             ]}
//             zIndex={2000} // Above text input, but below Task Assign To
//             elevation={6}
//           />
//           <CustomTextInput
//             followupicon={require('../../assets/icons/Calendar/calendar.png')}
//             type={dueDate}
//             value={dueDate}
//             placeholder="Due Date"
//             onChangeText={setDueDate}
//           />
      
//           <StatusDropdown
//             label="Priority"
//             selectedValue={priority}
//             onValueChange={setPriority}
//             apiType="taskpriority"
//             zIndex={1000} // Lowest dropdown, below text input
//             elevation={5} // Lower zIndex
//           />
//           <CustomTextInput
//             type={service}
//             value={service}
//             placeholder="Service Request"
//             onChangeText={setService}
//           />
//           <CustomTextInput
//             followupicon={require('../../assets/icons/Calendar/calendar.png')}
//             type={startDate}
//             value={setStartDate}
//             placeholder="Start Date"
//             onChangeText={setStartDate}
//           />
//           <CustomTextInput
//             followupicon={require('../../assets/icons/Calendar/calendar.png')}
//             type={reminderDate}
//             value={reminderDate}
//             placeholder="Reminder Date"
//             onChangeText={setReminderDate}
//           />
//           <CustomTextInput
//             followupicon={require('../../assets/icons/Scan/scan.png')}
//             type={attachment}
//             value={attachment}
//             placeholder="Attachment"
//             onChangeText={setAttachment}
//           />
//           <CustomTextInput
//             type={remark}
//             value={remark}
//             placeholder="Remark"
//             onChangeText={setRemark}
//           />
//           <CustomButton title="Submit" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
//         </View>
//       </ScrollView>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingRight: 10,
//     paddingLeft: 8,
//     paddingTop: 15,
//     backgroundColor: "#FFFFFF",
//     gap: 20,
//   },
//   centerContainer: {
//     flex: 0.7,
//     gap: 12,
//     zIndex: 1,
//     paddingRight: 10,
//     paddingLeft: 5,
//     position: "relative",
//   },
// });

// export default AddTask;


import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import Dropdown from "../../components/Dropdown";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import StatusDropdown from "../../components/StatusDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTask = (props) => {
  const dispatch = useDispatch();
  const { priorityList } = useSelector((state) => state.priority); // Get priority list from Redux

  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [assign, setAssign] = useState(null);
  const [client, setClient] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('null');
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [attachment, setAttachment] = useState('');
  const [remark, setRemark] = useState('');
  
  const goBackCall = () => {
    props.navigation.goBack();
  };

  // Date Picker States
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDateField, setActiveDateField] = useState(null); // Track which field is active
 
  // Handle Date Selection
  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      setSelectedDate(date);
      const formattedDate = date.toISOString().split("T")[0]; // Format YYYY-MM-DD
      // Set the selected date to the active field
      if (activeDateField === "dueDate") setDueDate(formattedDate);
      if (activeDateField === "startDate") setStartDate(formattedDate);
      if (activeDateField === "reminderDate") setReminderDate(formattedDate);
    }
    setShowDatePicker(false);
  };

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
            zIndex={4000} // Highest
            elevation={8}
          />
          <Dropdown
            label="Task Assign To"
            selectedValue={assign}
            onValueChange={setAssign}
            options={[
              { label: "Mr.Akshat", value: "akshat" },
              { label: "Mr.Paresh", value: "paresh" },
              { label: "Mr.Rajesh", value: "rajesh" },
              { label: "Mr.Subhash", value: "subhash" },
            ]}
            zIndex={3000} // Above Client Dropdown
            elevation={7}
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
            zIndex={2000} // Above text input, but below Task Assign To
            elevation={6}
          />

          {/* 📅 Due Date */}
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={dueDate}
            value={dueDate}
            placeholder="Due Date"
            onChangeText={setDueDate}
            onIconPress={() => {
              setActiveDateField("dueDate");
              setShowDatePicker(true);
            }}
          />

          {/* Priority Dropdown */}
          <StatusDropdown
            label="Priority"
            selectedValue={priority}
            onValueChange={setPriority}
            apiType="taskpriority"
            zIndex={1000}
            elevation={5}
          />

          {/* Service Request */}
          <CustomTextInput
            type={service}
            value={service}
            placeholder="Service Request"
            onChangeText={setService}
          />

          {/* 📅 Start Date */}
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={startDate}
            value={startDate}
            placeholder="Start Date"
            onChangeText={setStartDate}
            onIconPress={() => {
              setActiveDateField("startDate");
              setShowDatePicker(true);
            }}
          />

          {/* 📅 Reminder Date */}
          <CustomTextInput
            followupicon={require('../../assets/icons/Calendar/calendar.png')}
            type={reminderDate}
            value={reminderDate}
            placeholder="Reminder Date"
            onChangeText={setReminderDate}
            onIconPress={() => {
              setActiveDateField("reminderDate");
              setShowDatePicker(true);
            }}
          />

          {/* Attachment */}
          <CustomTextInput
            followupicon={require('../../assets/icons/Scan/scan.png')}
            type={attachment}
            value={attachment}
            placeholder="Attachment"
            onChangeText={setAttachment}
          />

          {/* Remark */}
          <CustomTextInput
            type={remark}
            value={remark}
            placeholder="Remark"
            onChangeText={setRemark}
          />

          {/* Submit Button */}
          <CustomButton
            title="Submit"
            customStyle={ButtonStyles.blueButton}
            textStyles={ButtonStyles.blueButtonText}
          />
        </View>
      </ScrollView>

      {/* 🗓️ Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}
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
