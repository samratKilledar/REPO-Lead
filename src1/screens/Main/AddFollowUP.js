import React , {useEffect,useState} from "react";
import { View, StyleSheet, Alert , ScrollView , KeyboardAvoidingView , ToastAndroid } from "react-native";
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
// const CustomTextInput = lazy(() => import('../../components/CustomTextInput'));
// const CustomButton = lazy(() => import ('../../components/CustomButton'));
// const Dropdown = lazy(() => import ('../../components/Dropdown'));
// const StatusDropdown = lazy(() =>import ('../../components/StatusDropdown'));
// const NavigationHeaderBack = lazy(() =>import ('../../components/NavigationHeaderBack'));
import DocumentPicker from 'react-native-document-picker';


const AddFollowUP = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    title, followupStatus, assignedTo, attachmentUrl, followupDate, followupTime, remark,
    isLoading, error, isAuthenticated
  } = useSelector(state => state.addFollowUp);
  //alert(followupStatus)
  const {
    titlePlaceholder, followupStatusName, assignedToName, attachmentUrlPlaceholder, followupDatePlaceholder,
    followupTimePlaceholder, remarkPlaceholder
  } = useSelector(state => state.addFollowUp);

  const followUpList = useSelector(state => state.homeReducer);
  const assignToList= useSelector(state => state.homeReducer);

  const goBackCall = () => {
    navigation.popToTop();
  };

  useEffect(() => {
    if (isAuthenticated) {
      Alert.alert("Success", "Follow-up added successfully!", [
        {
          text: "OK",
          onPress: () => dispatch(submitFollowUp({ isAuthenticated: false }))
        }
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

   const showToast = (message) => {
      ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };

  const validateAndSubmit = () => {

    if (!title) {
      showToast( "Title is required.");
      return;
    }
    if (!followupStatus) {
      showToast(" Status is required.");
      return;
    }
    if (!assignedTo) {
      showToast("Assigned To is required.");
      return;
    }
    if (!attachmentUrl) {
      showToast("Attachment is required.");
      return;
    } else {
      const fileExtension = attachmentUrl.split('.').pop().toLowerCase();
      if (fileExtension !== "pdf" && fileExtension !== "doc") {
        showToast( "Only PDF or DOC files are allowed.");
        return;
      }
    }
    if (!followupDate) {
      showToast("Date is required.");
      return;
    }
    if (!followupTime) {
      showToast(" Time is required.");
      return;
    }
  
    if (!remark) {
      showToast( "Remark is required.");
      return;
    }
    const followUpData = {
      title,
      followupStatus,
      followupDate,
      followupTime,
      remark,
      isActive: true,
    };
    dispatch(submitFollowUp(followUpData));
  };


  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginLeft: 5 }}>
      
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
          label={followupStatusName}
          selectedValue={followupStatus}
        //  onValueChange={(value) => dispatch(changeFollowupStatus(value))}
          onValueChange={(value) => dispatch(changeFollowupStatus(value))}
          apiType="followUp"
          zIndex={2000}
          elevation={6}
          listData={followUpList.followUp}
        />
       
        <StatusDropdown
          label={assignedToName}
          selectedValue={assignedTo}
          onValueChange={(value) => dispatch(changeAssignedTo(value))}
          //listData={followUpList.followUp}
          // options={[
          //   { label: "Mr.Akshat", value: "akshat" },
          //   { label: "Mr.Paresh", value: "paresh" },
          //   { label: "Mr.Rajesh", value: "rajesh" },
          //   { label: "Mr.Subhash", value: "subhash" },
          // ]}
          apiType="assignTo"
          listData={assignToList.assignTo[3]}
          zIndex={1000}
          elevation={4}
        />
       
        <CustomTextInput
          followupicon={require('../../assets/icons/Scan/scan.png')}
          value={attachmentUrl}
          placeholder={attachmentUrlPlaceholder}
          onChangeText={(text) => dispatch(changeAttachment(text))}
          onIconPress={async () => {
            try {
              const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles], // Allows all file types
              });
              dispatch(changeAttachment(result.name)); // Update state with file name
            } catch (err) {
              if (DocumentPicker.isCancel(err)) {
                console.log("User canceled the file picker");
              } else {
                console.error("Unknown error: ", err);
              }
            }
          }}
      
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

export default AddFollowUP;