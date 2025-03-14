import React , {lazy,Suspense,useEffect,useState} from "react";
import { View, StyleSheet, Alert , ScrollView , KeyboardAvoidingView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { 
  changeTitle, changeFollowupStatus, changeAssignedTo, changeAttachment, 
  changeFollowupDate, changeFollowupTime, changeRemark 
} from "../../redux/actions/addFollowUpActions";
import Dropdown from "../../components/Dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
//import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import { useNavigation } from "@react-navigation/native";
import StatusDropdown from "../../components/StatusDropdown";
import { submitFollowUp } from "../../redux/actions/addFollowUpActions";
const CustomTextInput = lazy(() => import('../../components/CustomTextInput'));

const ClientAddFollowUP = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { 
    title, followupStatus, assignedTo, attachmentUrl, followupDate, followupTime, remark,
    isLoading, error, isAuthenticated 
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

  useEffect(() => {
    if (isAuthenticated) {
      Alert.alert("Success", "Follow-up added successfully!", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
    }
  }, [error]);

  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      dispatch(changeFollowupDate(date.toISOString().split("T")[0]));
    }
    setShowDatePicker(false);
  };

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
      <View style={{ flex: 0.1, marginLeft: 5 }}>
        <NavigationHeaderBack text="Add Follow-Up" onPress={goBackCall} />
      </View>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <View style={styles.centerContainer}>
         <Suspense fallback={<CustomTextInput/>}>
        <CustomTextInput
          value={title}
          placeholder={titlePlaceholder}
          onChangeText={(text) => dispatch(changeTitle(text))}
        />
        </Suspense>
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
       <Suspense fallback={<CustomTextInput/>}>
        <CustomTextInput
          followupicon={require('../../assets/icons/Scan/scan.png')}
          value={attachmentUrl}
          placeholder={attachmentUrlPlaceholder}
          onChangeText={(text) => dispatch(changeAttachment(text))}
        />
        </Suspense>
        <Suspense fallback={<CustomTextInput/>}>
        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          value={followupDate}
          placeholder={followupDatePlaceholder}
          onChangeText={(text) => dispatch(changeFollowupDate(text))}
          onIconPress={() => setShowDatePicker(true)}
        />
          </Suspense>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
         <Suspense fallback={<CustomTextInput/>}>     
        <CustomTextInput
          followupicon={require("../../assets/icons/Calendar/calendar.png")}
          value={followupTime}
          placeholder={followupTimePlaceholder}
          onChangeText={(text) => dispatch(changeFollowupTime(text))}
          onIconPress={() => setShowTimePicker(true)}
        />
        </Suspense>  
        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            is24Hour={false}
            onChange={handleTimeChange}
          />
        )}
        <Suspense fallback={<CustomTextInput/>}>   
        <CustomTextInput
          value={remark}
          placeholder={remarkPlaceholder}
          onChangeText={(text) => dispatch(changeRemark(text))}
        />
        </Suspense>  
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
    paddingTop: 12,
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
