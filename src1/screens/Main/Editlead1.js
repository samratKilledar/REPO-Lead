import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, ToastAndroid, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
import { 
  EditLeadFetch,
  updateAddressLine1,
  updateAddressLine2,
  updateCity,
  updateCountry,
  updatePincode,
  updateState,
  updateWhatsAppNo,
  updateFirstName,
  updateLastName,
  updateMobileNo,
  updateEmailId,
  updateLeadSources
} from '../../redux/actions/editLeadAction';

const Editlead1 = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    mobileNo,
    emailId,
    leadSources,leadName,
    whatsAppNo,
    addressLine1,
    addressLine2,
    pincode,
    city,cityName,
    state,stateName,
    country,countryName
  } = useSelector(state => state.editLeadReducer);

  const cityList = useSelector(state => state.homeReducer);
  const countryList = useSelector(state => state.homeReducer);
  const leadSourceList = useSelector(state => state.homeReducer);
  const stateList = useSelector(state => state.homeReducer);

  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 1;

  // useEffect(() => {
  //   dispatch(EditLeadFetch());
  // }, [dispatch]);

  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

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
    if (!addressLine1.trim()) {
      showToast('Please enter Address Line 1.');
      return false;
    }
    if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
      showToast('Please enter a valid 6-digit Pincode.');
      return false;
    }
    if (emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId.trim())) {
      showToast('Please enter a valid Email Address.');
      return false;
    }
    return true;
  };

  const goBackCall = () => navigation.goBack();

  const handleOccupation = () => {
    if (validateFields()) {
      navigation.navigate('editLead2');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <NavigationHeaderBack text="Add Lead 1" onPress={goBackCall} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null} 
        style={{ flex: 1 }} 
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <View style={styles.contentContainer}>
          <Stepper steps={steps} currentStep={currentStep} style={styles.stepper} />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.centerContainer}>
              <CustomTextInput
                value={firstName}
                placeholder="First Name"
                onChangeText={(value) => dispatch(updateFirstName(value))}
              />
              
              <CustomTextInput
                value={lastName}
                placeholder="Last Name"
                onChangeText={(value) => dispatch(updateLastName(value))}
              />
              
              <StatusDropdown
                label={leadName}
                selectedValue={leadSources}
                onValueChange={(value) => dispatch(updateLeadSources(value))}
                apiType="leadSource"
                listData={leadSourceList.leadSource}
              />
          
              <CustomTextInput
                value={mobileNo}
                placeholder="Mobile No"
                keyboardType="phone-pad"
                onChangeText={(value) => dispatch(updateMobileNo(value))}
              />
            
              <CustomTextInput
                value={emailId}
                placeholder="Email Id"
                keyboardType="email-address"
                onChangeText={(value) => dispatch(updateEmailId(value))}
              />
          
              <CustomTextInput
                value={whatsAppNo}
                placeholder="WhatsApp No"
                keyboardType="phone-pad"
                onChangeText={(value) => dispatch(updateWhatsAppNo(value))}
              />
            
              <CustomTextInput
                value={addressLine1}
                placeholder="Address Line 1"
                onChangeText={(value) => dispatch(updateAddressLine1(value))}
              />
              
              <CustomTextInput
                value={addressLine2}
                placeholder="Address Line 2"
                onChangeText={(value) => dispatch(updateAddressLine2(value))}
              />
            
              <StatusDropdown
                label={cityName}
                selectedValue={city}
                onValueChange={(value) => dispatch(updateCity(value))}
                apiType="city"
                listData={cityList.city}
                zIndex={3000}
              />
            
              <StatusDropdown
                label={stateName}
                selectedValue={state}
                onValueChange={(value) => dispatch(updateState(value))}
                apiType="state"
                listData={stateList.state}
                zIndex={2000}
              />
            
              <StatusDropdown
                label={countryName}
                selectedValue={country}
                onValueChange={(value) => dispatch(updateCountry(value))}
                apiType="country"
                listData={countryList.country}
                zIndex={1000}
              />
              
              <CustomTextInput
                value={pincode}
                placeholder="Pincode"
                keyboardType="numeric"
                onChangeText={(value) => dispatch(updatePincode(value))}
              />
            
              <CustomButton
                title="Next"
                customStyle={styles.nextButton}
                onPress={handleOccupation}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <Toast
        position="bottom"
        config={{
          error: (props) => (
            <View style={styles.toastError}>
              <Text style={styles.toastText}>{props.text1}</Text>
              <Text style={styles.toastSubText}>{props.text2}</Text>
            </View>
          ),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    gap: 18,
  },
  headerContainer: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 70,
  },
  stepper: {
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    gap: 18,
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
  toastError: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toastSubText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Editlead1;