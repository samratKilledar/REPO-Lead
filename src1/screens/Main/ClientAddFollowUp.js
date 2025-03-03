import React , {useEffect,useState} from "react";
import { View, StyleSheet, Alert , ScrollView , KeyboardAvoidingView} from "react-native";
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
import { submitFollowUp } from "../../redux/actions/addFollowUpActions";


const ClientAddFollowUP = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Get Redux state
  const { 
    title, followupStatus, assignedTo, attachmentUrl, followupDate, followupTime, remark,
    titlePlaceholder, followupStatusPlaceholder, assignedToPlaceholder, attachmentUrlPlaceholder, 
    followupDatePlaceholder, followupTimePlaceholder, remarkPlaceholder, 
    isLoading, error, isAuthenticated 
  } = useSelector(state => state.addFollowUp);


  const goBackCall = () => {
    navigation.popToTop();
  };

  // Auto-Navigate back on Success ✅
  useEffect(() => {
    if (isAuthenticated) {
      Alert.alert("Success", "Follow-up added successfully!", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
    }
  }, [isAuthenticated]);
  // Show API error if exists ❌
  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
    }
  }, [error]);

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
    console.log("🚀 validateAndSubmit called in validSubmit !");
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
        console.log(`⚠️ Validation failed for: ${field.placeholder}`);
        Alert.alert("Validation Error", `${field.placeholder} is required.`);
        return;
      }
    }
    dispatch(submitFollowUp());
  };
  

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginLeft: 8 }}>
        <NavigationHeaderBack text="Add Follow-Up" onPress={goBackCall} />
      </View>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
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
        />
       
        <Dropdown
          label={assignedToPlaceholder}
          selectedValue={assignedTo}
          onValueChange={(value) => dispatch(changeAssignedTo(value))}
          options={[
              { label: "Mr.Akshat", value: "akshat" },
              { label: "Mr.Paresh", value: "paresh" },
              { label: "Mr.Rajesh", value: "paresh" },
              { label: "Mr.Subhash", value: "subhash" },
          ]}
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
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 5,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    gap: 20,
  },
  centerContainer: {
    flex: 0.7,
    gap: 12,
    zIndex: 1,
    paddingLeft: 12,
    position: "relative",
  },
});

export default ClientAddFollowUP;