
// New Code with navigation 
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import TextStyle from '../../styles/TextStyle';
import Stepper from '../../components/StepperComp';

const LeadAddPersonal = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [whatsappNo, setWhatsappNo] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [pincode, setPincode] = useState('');

  // Dropdown states for Lead Source
  const [leadSourceOpen, setLeadSourceOpen] = useState(false);
  const [leadSource, setLeadSource] = useState(null);
  const [leadSourceItems, setLeadSourceItems] = useState([
    { label: 'Website', value: 'website' },
    { label: 'Referral', value: 'referral' },
    { label: 'Social Media', value: 'social_media' },
  ]);

  // Dropdown states for City
  const [cityOpen, setCityOpen] = useState(false);
  const [city, setCity] = useState(null);
  const [cityItems, setCityItems] = useState([
    { label: 'Mumbai', value: 'mumbai' },
    { label: 'Delhi', value: 'delhi' },
    { label: 'Bangalore', value: 'bangalore' },
  ]);

  // Dropdown states for State
  const [stateOpen, setStateOpen] = useState(false);
  const [state, setState] = useState(null);
  const [stateItems, setStateItems] = useState([
    { label: 'Maharashtra', value: 'maharashtra' },
    { label: 'Karnataka', value: 'karnataka' },
    { label: 'Tamil Nadu', value: 'tamilnadu' },
  ]);

  // Dropdown states for Country
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState(null);
  const [countryItems, setCountryItems] = useState([
    { label: 'India', value: 'india' },
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
  ]);

  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 1;

  const handleNext = () => {
    navigation.navigate('LeadAddOccupation'); // Navigate to the next screen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/Cross/cross.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={TextStyle.subTitle}>Add Lead</Text>
      </View>

      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Form Fields */}
        <CustomTextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={TextStyle.Task_descp}
        />

        <CustomTextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={TextStyle.Task_descp}
        />

        {/* Dropdown for Lead Source */}
        <View >
          <DropDownPicker
            open={leadSourceOpen}
            value={leadSource}
            items={leadSourceItems}
            setOpen={setLeadSourceOpen}
            setValue={setLeadSource}
            setItems={setLeadSourceItems}
            placeholder="    Lead Source"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            // placeholderStyle={styles.dropdownPlaceholder}
            // selectedItemLabelStyle={styles.selectedItemLabel}
            zIndex={3000}
          ArrowUpIconComponent={() => (
            <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
          )}
          ArrowDownIconComponent={() => (
            <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
          )}
          />
        </View>

        {/* Mobile No */}
        <CustomTextInput
          placeholder="Mobile No"
          value={mobileNo}
          onChangeText={setMobileNo}
          keyboardType="numeric"
          style={TextStyle.Task_descp}
        />

        {/* Email Id */}
        <CustomTextInput
          placeholder="Email Id"
          value={emailId}
          onChangeText={setEmailId}
          keyboardType="email-address"
          style={TextStyle.Task_descp}
        />

        {/* Whatsapp No */}
        <CustomTextInput
          placeholder="Whatsapp No"
          value={whatsappNo}
          onChangeText={setWhatsappNo}
          keyboardType="numeric"
          style={TextStyle.Task_descp}
        />

        {/* Address Line 1 */}
        <CustomTextInput
          placeholder="Address Line 1"
          value={addressLine1}
          onChangeText={setAddressLine1}
          style={TextStyle.Task_descp}
        />

        {/* Address Line 2 */}
        <CustomTextInput
          placeholder="Address Line 2"
          value={addressLine2}
          onChangeText={setAddressLine2}
          style={TextStyle.Task_descp}
        />

        {/* Dropdown for City */}
        <View>
          <DropDownPicker
            open={cityOpen}
            value={city}
            items={cityItems}
            setOpen={setCityOpen}
            setValue={setCity}
            setItems={setCityItems}
            placeholder="Select City"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            zIndex={2000}
            ArrowUpIconComponent={() => (
              <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
            )}
            ArrowDownIconComponent={() => (
              <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
            )}
          />
        </View>

        {/* Dropdown for State */}
        <View >
          <DropDownPicker
            open={stateOpen}
            value={state}
            items={stateItems}
            setOpen={setStateOpen}
            setValue={setState}
            setItems={setStateItems}
            placeholder="Select State"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            zIndex={1000}
            ArrowUpIconComponent={() => (
              <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
            )}
            ArrowDownIconComponent={() => (
              <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
            )}
          />
        </View>

        {/* Dropdown for Country */}
        <View >
          <DropDownPicker
            open={countryOpen}
            value={country}
            items={countryItems}
            setOpen={setCountryOpen}
            setValue={setCountry}
            setItems={setCountryItems}
            placeholder="Select Country"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            zIndex={500}
            ArrowUpIconComponent={() => (
              <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
            )}
            ArrowDownIconComponent={() => (
              <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
            )}
          />
        </View>

        {/* Pincode */}
        <CustomTextInput
          placeholder="Pincode"
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
          style={TextStyle.Task_descp}
        />

        {/* Next Button */}
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <CustomButton title="Submit" customStyle={styles.submitButton} textStyles={styles.nextButtonText} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  
  headerBack: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  
  content: {
    paddingVertical: 15,
  },

  input: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    marginBottom: 20, // Consistent spacing between inputs
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    color: '#000',
  },
  
  dropdownWrapper: {
    marginBottom: 20, // Consistent spacing between dropdowns
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#FAFAFA",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: 15,
  },

  dropdownContainer: {
    borderWidth: 1.2,
    borderColor: "#2B2162",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },

  arrowIcon: {
    width: 24, // Set the width of the arrow
    height: 24, // Set the height of the arrow
    resizeMode: "contain", // Ensure the image scales properly
    marginRight: 10, // Add some spacing between the arrow and the title
  },

});

export default LeadAddPersonal;
