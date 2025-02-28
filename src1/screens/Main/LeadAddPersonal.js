import React, { useState ,useEffect } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from "../../components/Dropdown";
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
            value={firstName}
            placeholder="First Name"
            onChangeText={setFirstName}
          />
          <CustomTextInput
            value={lastName}
            placeholder="Last Name"
            onChangeText={setLastName}
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
            value={mobileNo}
            placeholder="Mobile No"
            onChangeText={setMobileNo}
          />
          <CustomTextInput
            value={emailId}
            placeholder="Email id"
            onChangeText={setEmailId}
          />
          <CustomTextInput
            value={whatsappNo}
            placeholder="Whatsapp No"
            onChangeText={setWhatsappNo}
          />
          <CustomTextInput
            value={addressLine1}
            placeholder="Address Line 1"
            onChangeText={setAddressLine1}
          />
          <CustomTextInput
            value={addressLine2}
            placeholder="Address Line 2"
            onChangeText={setAddressLine2}
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
            value={pincode}
            placeholder="Pincode"
            onChangeText={setPincode}
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
    paddingHorizontal: 24,
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