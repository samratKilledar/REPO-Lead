import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
import Dropdown from '../../components/Dropdown';
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
  updateFirstName
} from '../../redux/actions/personalAction';

const LeadAddPersonal = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    mobileNo,
    emailId,
    whatsappNo,
    addressLine1,
    addressLine2,
    pincode,
    city,
    state,
    country
  } = useSelector(state => state.personalReducer);
  const { 
    titlePlaceholder, followupStatusPlaceholder, assignedToPlaceholder, attachmentUrlPlaceholder, followupDatePlaceholder, 
    followupTimePlaceholder, remarkPlaceholder
  } = useSelector(state => state.addFollowUp);
  const dropDown= useSelector(state => state.homeReducer);
  alert(JSON.stringify(dropDown.state ))

  const [leadService, setLeadService] = useState('');

  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 1;

  const goBackCall = () => navigation.goBack();

  const handleOccupation = () => navigation.navigate('LeadAddOccupation');

  return (
    <View style={styles.container}>
      {/* NavigationHeaderBack positioned absolutely at the top */}
      <View style={styles.headerContainer}>
        <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
      </View>

      {/* Rest of the content */}
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
              label="Lead Source"
              selectedValue={leadService}
              onValueChange={setLeadService}
              apiType="leadSource"
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
              value={whatsappNo}
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
              label="City"
              selectedValue={city}
              onValueChange={(value) => dispatch(updateCity(value))}
              apiType="city"
              zIndex={3000}
            />
            <StatusDropdown
              label="State"
              selectedValue={state}
              onValueChange={(value) => dispatch(updateState(value))}
              apiType="state"
              zIndex={2000}
            />
            <StatusDropdown
              label="Country"
              selectedValue={country}
              onValueChange={(value) => dispatch(updateCountry(value))}
              apiType="country"
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:15,
    gap:18,
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
    marginTop:10,
    paddingTop:15,
    gap:18
  },
  centerContainer: {
    paddingBottom: 20,
    gap: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: "relative",
    paddingHorizontal: 15, 
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: '50'
  },
});

export default LeadAddPersonal;