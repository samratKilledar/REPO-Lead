import React, { useState ,useEffect } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from "../../components/Dropdown";
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from "../../components/StepperComp";
import { fetchPriority } from "../../redux/actions/dropDownAction";
import { useDispatch, useSelector } from "react-redux";

const LeadAddPersonal = () => {
  const dispatch = useDispatch();
  const { priorityList } = useSelector((state) => state.priority);

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
 
  const [formattedPriorityList, setFormattedPriorityList] = useState([]);

  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 1;
  useEffect(() => {
      dispatch(fetchPriority()); // Fetch priority data when component mounts
    }, [dispatch]);
  
    useEffect(() => {
      if (priorityList?.length) {
        const formattedData = priorityList.map((item) => ({
          label: item.value01, // Use value01 as the display label
          value: item.id.toString(), // Convert id to string for dropdown compatibility
        }));
        setFormattedPriorityList(formattedData);
      }
    }, [priorityList]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavigationHeaderBack text="Add Lead" />
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
          <Dropdown
            label="Lead Sources"
            selectedValue={leadService}
            onValueChange={setLeadService}
            options={formattedPriorityList}
            zIndex={3000}
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
          <Dropdown
            label="City"
            selectedValue={city}
            onValueChange={setCity}
            options={[
              { label: "Mumbai", value: "Mumbai" },
              { label: "Pune", value: "Pune" },
              { label: "Kolhapur", value: "Kolhapur" },
              { label: "Hyderabad", value: "Telangana" },
            ]}
            zIndex={5000}
          />
          <Dropdown
            label="State"
            selectedValue={state}
            onValueChange={setState}
            options={[
              { label: "Mumbai", value: "Maharashtra" },
              { label: "Pune", value: "Maharashtra" },
              { label: "Kolhapur", value: "Maharashtra" },
              { label: "Hyderabad", value: "Maharashtra" },
            ]}
            zIndex={4000}
          />
          <Dropdown
            label="Country"
            selectedValue={country}
            onValueChange={setCountry}
            options={[
              { label: "India", value: "India" },
              { label: "USA", value: "USA" },
              { label: "Australia", value: "Australia" },
            ]}
            zIndex={3000}
          />
          <CustomTextInput
            value={pincode}
            placeholder="Pincode"
            onChangeText={setPincode}
          />

        <CustomButton title="Next" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
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
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default LeadAddPersonal;