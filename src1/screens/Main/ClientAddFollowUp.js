import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "../../components/Dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import StatusDropdown from "../../components/StatusDropdown";
import { useNavigation } from "@react-navigation/native";
const ClientAddFollowUP = (props) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [assign, setAssign] = useState(null);
  const [attachment, setAttachment] = useState('');
  const [meetSchedule, setMeetSchedule] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [remark, setRemark] = useState('');

const navigation = useNavigation();
  const goBackCall = () => {
    navigation.popToTop();
  };

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Store date
  const [selectedTime, setSelectedTime] = useState(new Date());
  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      setSelectedDate(date);
      setMeetSchedule(date.toISOString().split("T")[0]); // Format YYYY-MM-DD
    }
    setShowDatePicker(false);
  };

  // ⏰ Handle Time Selection
  const handleTimeChange = (event, time) => {
    if (event.type === "set" && time) {
      setSelectedTime(time);
      const hours = time.getHours();
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
      setScheduleTime(`${formattedHours}:${minutes} ${ampm}`); // Format HH:MM AM/PM
    }
    setShowTimePicker(false);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginLeft: 5, }}>
        <NavigationHeaderBack text="Add Follow-Up" onPress={goBackCall} />
      </View>

      <View style={styles.centerContainer}>
        <CustomTextInput
          type={title}
          value={title}
          placeholder="Title"
          onChangeText={setTitle}
        />
       <StatusDropdown
        label= "Status" 
        selectedValue={type} 
        onValueChange={setType}
         apiType="clientFollowUp" 
          zIndex={2000} // Higher than Dropdown 2
          elevation={6}
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
          zIndex={1000} // Lower than Dropdown 1
          elevation={4}
        />
        <CustomTextInput
          followupicon={require('../../assets/icons/Scan/scan.png')}
          type={attachment}
          value={attachment}
          placeholder="Attachment"
          onChangeText={setTitle}
        />
        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          type={meetSchedule}
          value={meetSchedule}
          placeholder="Next Meeting schedule on"
          onChangeText={setMeetSchedule}
          onIconPress={() => setShowDatePicker(true)} // Open Date Picker on icon click
        />
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
          />
        )}

        {/* ⏰ TIME PICKER INPUT */}
        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")} // Clock Icon
          type={scheduleTime}
          value={scheduleTime}
          placeholder="Schedule Time"
          onChangeText={setScheduleTime}
          onIconPress={() => setShowTimePicker(true)} // Open Time Picker on icon click
        />
        {showTimePicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false} // Use 12-hour format
            onChange={handleTimeChange}
          />
        )}
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

export default ClientAddFollowUP;
