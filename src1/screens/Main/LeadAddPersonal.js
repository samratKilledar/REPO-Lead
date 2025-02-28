import React, { useState ,useEffect } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from "../../components/StepperComp";
import StatusDropdown from '../../components/StatusDropdown';

const LeadAddPersonal = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [whatsappNo, setWhatsappNo] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [pincode, setPincode] = useState('');
  const [leadService, setLeadService] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
 
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 1;

  const goBackCall = () => {
    props.navigation.goBack();
  };
  const handleOccupation = () => {
    props.navigation.navigate("LeadAddOccupation")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavigationHeaderBack text="Add Lead" onPress={goBackCall}/>
      </View>

      <View style={styles.stepperContainer}>
        <Stepper steps={steps} currentStep={currentStep} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.centerContainer}>
          <CustomTextInput
            value={state.firstName}
            placeholder="First Name"
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
          <CustomTextInput
            value={state.lastName}
            placeholder="Last Name"
            onChangeText={(value) => handleInputChange('lastName', value)}
          />

           <StatusDropdown
        label= "Lead Source" 
        selectedValue={leadService} 
        onValueChange={setLeadService}
         apiType="leadSource" 
          zIndex={4000} // Higher than Dropdown 2
          elevation={8}
       />
          <CustomTextInput
            value={state.mobileNo}
            placeholder="Mobile No"
            onChangeText={(value) => handleInputChange('mobileNo', value)}
          />
          <CustomTextInput
            value={state.emailId}
            placeholder="Email id"
            onChangeText={(value) => handleInputChange('emailId', value)}
          />
          <CustomTextInput
            value={state.whatsappNo}
            placeholder="Whatsapp No"
            onChangeText={(value) => handleInputChange('whatsappNo', value)}
          />
          <CustomTextInput
            value={state.addressLine1}
            placeholder="Address Line 1"
            onChangeText={(value) => handleInputChange('addressLine1', value)}
          />
          <CustomTextInput
            value={state.addressLine2}
            placeholder="Address Line 2"
            onChangeText={(value) => handleInputChange('addressLine2', value)}
          />
          <StatusDropdown 
          label="City"
          selectedValue={city}
          onValueChange={setCity}
          apiType="city"
          zIndex={3000}
          elevation={7}
          />
          <StatusDropdown 
          label="State"
          selectedValue={state}
          onValueChange={setState}
          apiType="state"
          zIndex={2000}
          elevation={6}
          />
        
          <StatusDropdown 
          label="Country"
          selectedValue={country}
          onValueChange={setCountry}
          apiType="country"
          zIndex={1000}
          elevation={5}
          />
          <CustomTextInput
            value={state.pincode}
            placeholder="Pincode"
            onChangeText={(value) => handleInputChange('pincode', value)}
          />

        <CustomButton title="Next" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} onPress={handleOccupation}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    //paddingHorizontal: 24,
    paddingTop: 15,
    backgroundColor: "#FFFFFF",
    gap: 18,
    marginBottom: 50,
    },
    header: {
    height: 50,
    },
    stepperContainer: {
    height: 50,
    marginTop: 10,
   },
    centerContainer: {
    paddingBottom: 20,
    gap: 10,
    position:'relative',
  },
  scrollViewContent: {
    flexGrow: 1,
    },
});

export default LeadAddPersonal;