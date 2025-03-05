// import React, { useState } from "react";
// import { View, StyleSheet , TouchableOpacity } from "react-native";
// import Dropdown from "../../components/Dropdown";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import CustomTextInput from "../../components/CustomTextInput";
// import CustomButton from "../../components/CustomButton";
// import ButtonStyles from "../../styles/ButtonStyles";
// import NavigationHeaderBack from "../../components/NavigationHeaderBack";
// import { useNavigation } from "@react-navigation/native";
// import StatusDropdown from "../../components/StatusDropdown";

// const AddFollowUP = (props) => {
//   const [title, setTitle] = useState('');
//   const [type, setType] = useState(null);
//   const [assign, setAssign] = useState(null);
//   const [attachment, setAttachment] = useState('');
//   const [meetSchedule, setMeetSchedule] = useState('');
//   const [scheduleTime, setScheduleTime] = useState('');
//   const [remark, setRemark] = useState('');
 
//   const navigation = useNavigation();
//   const goBackCall = () => {
//     navigation.popToTop();
//   };

//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date()); // Store date
//   const [selectedTime, setSelectedTime] = useState(new Date());
//   const handleDateChange = (event, date) => {
//     if (event.type === "set" && date) {
//       setSelectedDate(date);
//       setMeetSchedule(date.toISOString().split("T")[0]); // Format YYYY-MM-DD
//     }
//     setShowDatePicker(false);
//   };

//   // ⏰ Handle Time Selection
//   const handleTimeChange = (event, time) => {
//     if (event.type === "set" && time) {
//       setSelectedTime(time);
//       const hours = time.getHours();
//       const minutes = time.getMinutes().toString().padStart(2, "0");
//       const ampm = hours >= 12 ? "PM" : "AM";
//       const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
//       setScheduleTime(`${formattedHours}:${minutes} ${ampm}`); // Format HH:MM AM/PM
//     }
//     setShowTimePicker(false);
//   };
  
//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.1, marginLeft: 5, }}>
//         <NavigationHeaderBack text="Add Follow-Up" onPress={goBackCall} />
//       </View>

//       <View style={styles.centerContainer}>
//         <CustomTextInput
//           type={title}
//           value={title}
//           placeholder="Title"
//           onChangeText={setTitle}
//         />
      
//         <StatusDropdown 
//          label="Status" 
//          selectedValue={type} 
//          onValueChange={setType} 
//          apiType="followUp" 
//          zIndex={2000} // Higher than Dropdown 2
//        elevation={6}// Explicitly setting zIndex
//         />
//         <Dropdown
//           label="Assign"
//           selectedValue={assign}
//           onValueChange={setAssign}
//           options={[
//             { label: "Mr.Akshat", value: "akshat" },
//             { label: "Mr.Paresh", value: "paresh" },
//             { label: "Mr.Rajesh", value: "paresh" },
//             { label: "Mr.Subhash", value: "subhash" },
//           ]}
//           zIndex={1000} // Lower than Dropdown 1
//           elevation={4}
//         />
//         <CustomTextInput
//           followupicon={require('../../assets/icons/Scan/scan.png')}
//           type={attachment}
//           value={attachment}
//           placeholder="Attachment"
//           onChangeText={setTitle}
//         />
//         <CustomTextInput
//           followupicon={require("../../assets/icons/Calendar/calendar.png")}
//           type={meetSchedule}
//           value={meetSchedule}
//           placeholder="Next Meeting schedule on"
//           onChangeText={setMeetSchedule}
//           onIconPress={() => setShowDatePicker(true)} // Open Date Picker on icon click
//         />
//         {showDatePicker && (
//           <DateTimePicker
//             value={selectedDate}
//             mode="date"
//             display={Platform.OS === "ios" ? "spinner" : "default"}
//             onChange={handleDateChange}
//           />
//         )}

//         {/* ⏰ TIME PICKER INPUT */}
//         <CustomTextInput
//           followupicon={require("../../assets/icons/Calendar/calendar.png")} // Clock Icon
//           type={scheduleTime}
//           value={scheduleTime}
//           placeholder="Schedule Time"
//           onChangeText={setScheduleTime}
//           onIconPress={() => setShowTimePicker(true)} // Open Time Picker on icon click
//         />
//         {showTimePicker && (
//           <DateTimePicker
//             value={selectedTime}
//             mode="time"
//             display={Platform.OS === "ios" ? "spinner" : "default"}
//             is24Hour={false} // Use 12-hour format
//             onChange={handleTimeChange}
//           />
//         )}
//         <CustomTextInput
//           type={remark}
//           value={remark}
//           placeholder="Remark"
//           onChangeText={setRemark}
//         />
//         <CustomButton title="Submit" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingRight: 20,
//     paddingLeft: 5,
//     paddingTop: 10,
//     backgroundColor: "#FFFFFF",
//     gap: 20,
//   },
//   centerContainer: {
//     flex: 0.7,
//     gap: 12,
//     zIndex: 1,
//     paddingRight: 5,
//     paddingLeft: 12,
//     position: "relative",
//   },
// });

// export default AddFollowUP;


import React from "react";
import { View, StyleSheet, TouchableOpacity , Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { 
  changeTitle, changeFollowupStatus, changeAssignedTo, changeAttachment, 
  changeFollowupDate, changeFollowupTime, changeRemark 
} from "../../redux/actions/addFollowUpActions"; 
import Dropdown from "../../components/Dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import { useNavigation } from "@react-navigation/native";
import StatusDropdown from "../../components/StatusDropdown";

const AddFollowUP = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Get Redux state
  const { 
    title, followupStatus, assignedTo, attachmentUrl, followupDate, 
    followupTime, remark, statusOptions, assignOptions 
  } = useSelector(state => state.addFollowUp);
  //alert(followupStatus)
  const { 
    titlePlaceholder, followupStatusPlaceholder, assignedToPlaceholder, attachmentUrlPlaceholder, followupDatePlaceholder, 
    followupTimePlaceholder, remarkPlaceholder
  } = useSelector(state => state.addFollowUp);
  const followUpList= useSelector(state => state.homeReducer);
  alert(JSON.stringify(followUpList))
  const goBackCall = () => {
    navigation.popToTop();
  };

  // Date Picker Logic
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      dispatch(changeFollowupDate(date.toISOString().split("T")[0]));
    }
    setShowDatePicker(false);
  };

  // Time Picker Logic
  const handleTimeChange = (event, time) => {
    if (event.type === "set" && time) {
      const hours = time.getHours();
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
      dispatch(changeFollowupTime(`${formattedHours}:${minutes} ${ampm}`));
    }
    setShowTimePicker(false);
  };


const validateAndSubmit = () => {
  const fields = [
    { value: title, placeholder: titlePlaceholder },
    { value: followupStatus, placeholder: followupStatusPlaceholder },
    { value: assignedTo, placeholder: assignedToPlaceholder },
    { value: attachmentUrl, placeholder: attachmentUrlPlaceholder },
    { value: followupDate, placeholder: followupDatePlaceholder },
    { value: followupTime, placeholder: followupTimePlaceholder },
    { value: remark, placeholder: remarkPlaceholder }
  ];

  for (const field of fields) {
    const fieldValue = field.value ? String(field.value).trim() : "";

    if (!fieldValue) {
      Alert.alert("Validation Error", `${field.placeholder} is required.`);
      return;
    }
  }

  Alert.alert("Success", "Follow-up added successfully.");
};


  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginLeft: 5 }}>
        <NavigationHeaderBack text="Add Follow-Up" onPress={goBackCall} />
      </View>

      <View style={styles.centerContainer}>
        <CustomTextInput
          value={title}
          placeholder={titlePlaceholder}
          onChangeText={(text) => dispatch(changeTitle(text))}
        />

        <StatusDropdown
          label={followupStatusPlaceholder}
          selectedValue={followupStatus}
          onValueChange={(value) => dispatch(changeFollowupStatus(value))}
          apiType="followUp"
          zIndex={2000}
          elevation={6}
          listData={followUpList.followUp}
        />
       
        <Dropdown
          label={assignedToPlaceholder}
          selectedValue={assignedTo}
          onValueChange={(value) => dispatch(changeAssignedTo(value))}
          listData={followUpList.followUp}
          zIndex={1000}
          elevation={4}
        />

        <CustomTextInput
          followupicon={require('../../assets/icons/Scan/scan.png')}
          value={attachmentUrl}
          placeholder={attachmentUrlPlaceholder}
          onChangeText={(text) => dispatch(changeAttachment(text))}
        />

        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          value={followupDate}
          placeholder={followupDatePlaceholder}
          onChangeText={(text) => dispatch(changeFollowupDate(text))}
          onIconPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          value={followupTime}
          placeholder={followupTimePlaceholder}
          onChangeText={(text) => dispatch(changeFollowupTime(text))}
          onIconPress={() => setShowTimePicker(true)}
        />
        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            is24Hour={false}
            onChange={handleTimeChange}
          />
        )}

        <CustomTextInput
          value={remark}
          placeholder={remarkPlaceholder}
          onChangeText={(text) => dispatch(changeRemark(text))}
        />

        <CustomButton 
          title="Submit" 
          customStyle={ButtonStyles.blueButton} 
          textStyles={ButtonStyles.blueButtonText} 
          onPress={validateAndSubmit}
        />
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
    position: "relative",
  },
});

export default AddFollowUP;

