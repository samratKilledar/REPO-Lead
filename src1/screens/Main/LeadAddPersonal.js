
import React, { useState,useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
import {resetStateLeadID} from '../../redux/actions/editLeadAction'
import {
  updateAddressLine1,
  updateAddressLine2,
  updateCity,
  updateCountry,
  updateEmailId,
  updateLastName,
  updateMobileNo,
  updatePincode,
  updateState,
  updateWhatsAppNo,
  updateFirstName,
  updateLeadSources,
  updateOtherSource,
  setAllInputFileds,resetStateLead
} from '../../redux/actions/lastAction';

const LeadAddPersonal = ({ navigation,route }) => {
  const dispatch = useDispatch();
  const { leadId, leadData } = route.params || {};

  useEffect(() => {
    console.log('Lead ID:', leadId);
    alert('Lead Data:====>'+ JSON.stringify(leadId));
    if (leadId !== "" && leadData !== undefined) {
      alert(1)
      dispatch(setAllInputFileds(leadData, leadId));
  
      // ✅ Check if "Refer By" was selected before and show input
      if (parseInt(leadData.leadSource, 10) === 12) {
        setShowNewSourceInput(true);
      } else {
        setShowNewSourceInput(false);
      }
    }
  }, []);
  

  const {
    firstName,
    lastName,
    mobileNo,
    emailId,
    leadSource,
    leadSourceName,
    otherSource,
    whatsAppNo,
    addressLine1,
    addressLine2,
    pincode,
    cityId,
    cityName,
    stateId,
    stateName,
    countryId,
    countryName,
  } = useSelector(state => state.lastReducer);
  const cityList = useSelector(state => state.homeReducer);
  const countryList = useSelector(state => state.homeReducer);
  const leadSourceList = useSelector(state => state.homeReducer);
  const stateList = useSelector(state => state.homeReducer);

  const showToast = message => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  useEffect(()=>{
  //alert(pincode)
  })

  const validateFields = () => {
    if (!firstName.trim()) {
      showToast('Please enter First Name.');
      return false;
    }
    if (!lastName.trim()) {
      showToast('Please enter Last Name.');
      return false;
    }
    if (!mobileNo.trim() || !/^\d{10}$/.test(mobileNo)) {
      showToast('Please enter a valid 10-digit Mobile Number.');
      return false;
    }
    if (!emailId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId.trim())) {
      showToast('Please enter a valid Email Address.');
      return false;
    }
    if (!addressLine1.trim()) {
      showToast('Please enter Address.');
      return false;
    }
    // if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
    //   showToast('Please enter a valid 6-digit Pincode.');
    //   return false;
    // }
    if (!pincode.toString().trim() || !/^\d{6}$/.test(pincode)) {
      showToast('Please enter a valid 6-digit Pincode.');
      return false;
    }
    if (!cityId) {
      showToast('Please select City.');
      return false;
    }
    if (!stateId) {
      showToast('Please select State.');
      return false;
    }
    if (!countryId) {
      showToast('Please select Country.');
      return false;
    }
    if (!leadSource) {
      showToast('Please select Lead Source');
      return false;
    }
    return true;
  };

  const handleOccupation = () => {
    if (validateFields()) {
      navigation.navigate('LeadAddOccupation');
    }
  };
 const goBack=()=>{
  navigation.goBack();
  dispatch(resetStateLead())
  dispatch(resetStateLeadID())

 }

  const goback = () => {
    navigation.navigate('LeadScreen');
  }

  // ✅ State for new source input field
  
  const [showNewSourceInput, setShowNewSourceInput] = useState(false);

  // ✅ Handle Dropdown Selection
  const handleLeadSourceChange = (value) => {
    console.log('Selected Lead Source:', value);
  
    if (parseInt(value.id, 10) === 12) {
      setShowNewSourceInput(true);
      dispatch(updateLeadSources(value)); // Keep lead source selection
    } else {
      setShowNewSourceInput(false);
      dispatch(updateLeadSources(value)); // Normal selection
      dispatch(updateOtherSource('')); // Clear otherSource
    }
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <NavigationHeaderBack text="Add Lead" onPress={goback} />
            <NavigationHeaderBack text="Add Lead" onPress={ goBack} />
          </View>

          <View style={styles.stepperContainer}>
            <Stepper steps={['Personal', 'Occupation', 'Services']} currentStep={1} />
          </View>

          <View style={{ flex: 5 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
              <View style={styles.centerContainer}>
                <CustomTextInput
                  value={firstName}
                  placeholder="First Name"
                  onChangeText={value => dispatch(updateFirstName(value))}
                />

                <CustomTextInput
                  value={lastName}
                  placeholder="Last Name"
                  onChangeText={value => dispatch(updateLastName(value))}
                />

                {/* ✅ Lead Source Dropdown */}
                <StatusDropdown
                  label={leadSourceName}
                  selectedValue={leadSource}
                  onValueChange={handleLeadSourceChange}
                  apiType="leadSource"
                  listData={leadSourceList.leadSource}
                />

                {/* ✅ Show text input if "Refer by" is selected */}
                {showNewSourceInput && (
                  <CustomTextInput
                  placeholder="Enter Source Name"
                    value={otherSource} // Bind to Redux
                    onChangeText={(text) => {
                      dispatch(updateOtherSource(text)); // Store separately
                    }}
                    style={styles.textInput}
                  />
                )}
                

                <CustomTextInput
                  value={mobileNo}
                  placeholder="Mobile No"
                  keyboardType="numeric"
                  onChangeText={value => dispatch(updateMobileNo(value))}
                />

                <CustomTextInput
                  value={emailId}
                  placeholder="Email Id"
                  keyboardType="email-address"
                  onChangeText={value => dispatch(updateEmailId(value))}
                />

                <CustomTextInput
                  value={whatsAppNo}
                  placeholder="WhatsApp No"
                  keyboardType="numeric"
                  onChangeText={value => dispatch(updateWhatsAppNo(value))}
                />

                <CustomTextInput
                  value={addressLine1}
                  placeholder="Address Line 1"
                  onChangeText={value => dispatch(updateAddressLine1(value))}
                />

                <CustomTextInput
                  value={addressLine2}
                  placeholder="Address Line 2"
                  onChangeText={value => dispatch(updateAddressLine2(value))}
                />

                <StatusDropdown
                  label={cityName}
                  selectedValue={cityId}
                  onValueChange={value => dispatch(updateCity(value))}
                  apiType="city"
                  listData={cityList.city}
                />

                <StatusDropdown
                  label={stateName}
                  selectedValue={stateId}
                  onValueChange={value => dispatch(updateState(value))}
                  listData={stateList.state}
                  apiType="state"
                />

                <StatusDropdown
                  label={countryName}
                  selectedValue={countryId}
                  onValueChange={value => dispatch(updateCountry(value))}
                  listData={countryList.country}
                  apiType="country"
                />

                <CustomTextInput
                  value={pincode ? pincode.toString() : ""}
                  placeholder="Pincode"
                  keyboardType="numeric"
                  onChangeText={value => dispatch(updatePincode(value))}
                />
                

                <CustomButton title="Next" customStyle={styles.nextButton} onPress={handleOccupation} />
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flex: 0.4,
  },
  stepperContainer: {
    flex: 0.5,
    justifyContent: 'center', backgroundColor: '#EEF0FF',
    alignItems: 'center', // Ensure full width
  },
  centerContainer: {
    paddingBottom: 20,
    gap: 10,
    paddingHorizontal: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});

export default LeadAddPersonal;