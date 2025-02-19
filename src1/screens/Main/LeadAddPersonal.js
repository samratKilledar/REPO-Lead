// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import TextStyle from '../../styles/TextStyle';

// const LeadAddPersonal = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [whatsappNo, setWhatsappNo] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [city, setCity] = useState(null);
//   const [state, setState] = useState(null);
//   const [country, setCountry] = useState(null);
//   const [pincode, setPincode] = useState('');

//   const cities = [
//     { label: 'Mumbai', value: 'mumbai' },
//     { label: 'Delhi', value: 'delhi' },
//     { label: 'Bangalore', value: 'bangalore' },
//   ];

//   const states = [
//     { label: 'Maharashtra', value: 'maharashtra' },
//     { label: 'Karnataka', value: 'karnataka' },
//     { label: 'Tamil Nadu', value: 'tamilnadu' },
//   ];

//   const countries = [
//     { label: 'India', value: 'india' },
//     { label: 'USA', value: 'usa' },
//     { label: 'UK', value: 'uk' },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.headerBack}> &lt; </Text>
//         </TouchableOpacity>
//         <Text style={TextStyle.subTitle}>Add Lead</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.content}>
//         <CustomTextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.input} />
//         <CustomTextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.input} />
//         <CustomTextInput placeholder="Mobile No" value={mobileNo} onChangeText={setMobileNo} keyboardType="numeric" style={styles.input} />
//         <CustomTextInput placeholder="Email Id" value={emailId} onChangeText={setEmailId} keyboardType="email-address" style={styles.input} />
//         <CustomTextInput placeholder="Whatsapp No" value={whatsappNo} onChangeText={setWhatsappNo} keyboardType="numeric" style={styles.input} />
//         <CustomTextInput placeholder="Address Line 1" value={addressLine1} onChangeText={setAddressLine1} style={styles.input} />
//         <CustomTextInput placeholder="Address Line 2" value={addressLine2} onChangeText={setAddressLine2} style={styles.input} />

//         {/* Dropdowns for City, State, Country with reduced size */}
//         <View style={styles.columnContainer}>
//           <View style={styles.dropdownContainer}>
//             <RNPickerSelect
//               placeholder={{ label: 'Select City', value: null }}
//               items={cities}
//               onValueChange={setCity}
//               value={city}
//               style={pickerSelectStyles}
//             />
//           </View>
//           <View style={styles.dropdownContainer}>
//             <RNPickerSelect
//               placeholder={{ label: 'Select State', value: null }}
//               items={states}
//               onValueChange={setState}
//               value={state}
//               style={pickerSelectStyles}
//             />
//           </View>
//           <View style={styles.dropdownContainer}>
//             <RNPickerSelect
//               placeholder={{ label: 'Select Country', value: null }}
//               items={countries}
//               onValueChange={setCountry}
//               value={country}
//               style={pickerSelectStyles}
//             />
//           </View>
//         </View>

//         <CustomTextInput placeholder="Pincode" value={pincode} onChangeText={setPincode} keyboardType="numeric" style={styles.input} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerBack: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   content: {
//     paddingVertical: 20,
//   },
//   input: {
//     height: 48,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     paddingHorizontal: 16,
//     marginBottom: 16,
//     fontSize: 16,
//     backgroundColor: '#F5F5F5',
//     color: '#000',
//   },
//   columnContainer: {
//     flexDirection: 'column',
//     gap: 12,
//     marginBottom: 16,
//   },
//   dropdownContainer: {
//     height: 60,  // Consistent height with other input fields
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     backgroundColor: '#F5F5F5',
//     justifyContent: 'center',
//     paddingHorizontal: 12,  // Reduced padding
//     marginBottom: 8,
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     fontSize: 16,
//     height: 44,  // Reduced height for better alignment
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     backgroundColor: '#F5F5F5',
//     color: '#000',
//   },
//   inputAndroid: {
//     fontSize: 16,
//     height: 44,  // Reduced height for better alignment
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     backgroundColor: '#F5F5F5',
//     color: '#000',
//   },
// };

// export default LeadAddPersonal;


// NEW according to stepper and dropdown 

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import TextStyle from '../../styles/TextStyle';
// import Stepper from '../../components/StepperComp'; // Import the Stepper component

// const LeadAddPersonal = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [whatsappNo, setWhatsappNo] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Dropdown states for Lead Source
//   const [leadSourceOpen, setLeadSourceOpen] = useState(false);
//   const [leadSource, setLeadSource] = useState(null);
//   const [leadSourceItems, setLeadSourceItems] = useState([
//     { label: 'Website', value: 'website' },
//     { label: 'Referral', value: 'referral' },
//     { label: 'Social Media', value: 'social_media' },
//   ]);

//   // Dropdown states for City
//   const [cityOpen, setCityOpen] = useState(false);
//   const [city, setCity] = useState(null);
//   const [cityItems, setCityItems] = useState([
//     { label: 'Mumbai', value: 'mumbai' },
//     { label: 'Delhi', value: 'delhi' },
//     { label: 'Bangalore', value: 'bangalore' },
//   ]);

//   // Dropdown states for State
//   const [stateOpen, setStateOpen] = useState(false);
//   const [state, setState] = useState(null);
//   const [stateItems, setStateItems] = useState([
//     { label: 'Maharashtra', value: 'maharashtra' },
//     { label: 'Karnataka', value: 'karnataka' },
//     { label: 'Tamil Nadu', value: 'tamilnadu' },
//   ]);

//   // Dropdown states for Country
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [country, setCountry] = useState(null);
//   const [countryItems, setCountryItems] = useState([
//     { label: 'India', value: 'india' },
//     { label: 'USA', value: 'usa' },
//     { label: 'UK', value: 'uk' },
//   ]);

//   const steps = ["Personal", "Occupation", "Services"]; // Steps for the Stepper
//   const currentStep = 1; // Current step is Personal

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.headerBack}> &lt; </Text>
//         </TouchableOpacity>
//         <Text style={TextStyle.subTitle}>Add Lead</Text>
//       </View>

//       {/* Space between Header and Stepper */}
//       <View style={{ height: 20 }} />

//       {/* Stepper Component */}
//       <Stepper steps={steps} currentStep={currentStep} />

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* First Name */}
//         <CustomTextInput
//           placeholder="First Name"
//           value={firstName}
//           onChangeText={setFirstName}
//           style={TextStyle.Task_descp}
//         />

//         {/* Last Name */}
//         <CustomTextInput
//           placeholder="Last Name"
//           value={lastName}
//           onChangeText={setLastName}
//           style={TextStyle.Task_descp}        
//         />

//         {/* Mobile No */}
//         <CustomTextInput
//           placeholder="Mobile No"
//           value={mobileNo}
//           onChangeText={setMobileNo}
//           keyboardType="numeric"
//           style={TextStyle.Task_descp}        
//         />

//         {/* Email Id */}
//         <CustomTextInput
//           placeholder="Email Id"
//           value={emailId}
//           onChangeText={setEmailId}
//           keyboardType="email-address"
//           style={TextStyle.Task_descp}        
//         />

//         {/* Whatsapp No */}
//         <CustomTextInput
//           placeholder="Whatsapp No"
//           value={whatsappNo}
//           onChangeText={setWhatsappNo}
//           keyboardType="numeric"
//           style={TextStyle.Task_descp}        
//         />

//         {/* Address Line 1 */}
//         <CustomTextInput
//           placeholder="Address Line 1"
//           value={addressLine1}
//           onChangeText={setAddressLine1}
//           style={TextStyle.Task_descp}        
//         />

//         {/* Address Line 2 */}
//         <CustomTextInput
//           placeholder="Address Line 2"
//           value={addressLine2}
//           onChangeText={setAddressLine2}
//           style={styles.input}
//         />

//         {/* Dropdown for Lead Source */}
//         <View style={styles.dropdownWrapper}>
//           <DropDownPicker
//             open={leadSourceOpen}
//             value={leadSource}
//             items={leadSourceItems}
//             setOpen={setLeadSourceOpen}
//             setValue={setLeadSource}
//             setItems={setLeadSourceItems}
//             placeholder="Select Lead Source"
//             style={styles.dropdown}
//             dropDownContainerStyle={styles.dropdownContainer}
//             textStyle={styles.dropdownText}
//             placeholderStyle={styles.dropdownPlaceholder}
//             zIndex={3000} // Ensure dropdown appears above other elements
//           />
//         </View>

//         {/* Dropdown for City */}
//         <View style={styles.dropdownWrapper}>
//           <DropDownPicker
//             open={cityOpen}
//             value={city}
//             items={cityItems}
//             setOpen={setCityOpen}
//             setValue={setCity}
//             setItems={setCityItems}
//             placeholder="Select City"
//             style={styles.dropdown}
//             dropDownContainerStyle={styles.dropdownContainer}
//             textStyle={styles.dropdownText}
//             placeholderStyle={styles.dropdownPlaceholder}
//             zIndex={2000} // Lower zIndex to avoid overlapping with other dropdowns
//           />
//         </View>

//         {/* Dropdown for State */}
//         <View style={styles.dropdownWrapper}>
//           <DropDownPicker
//             open={stateOpen}
//             value={state}
//             items={stateItems}
//             setOpen={setStateOpen}
//             setValue={setState}
//             setItems={setStateItems}
//             placeholder="Select State"
//             style={styles.dropdown}
//             dropDownContainerStyle={styles.dropdownContainer}
//             textStyle={styles.dropdownText}
//             placeholderStyle={styles.dropdownPlaceholder}
//             zIndex={1000} // Lower zIndex to avoid overlapping with other dropdowns
//           />
//         </View>

//         {/* Dropdown for Country */}
//         <View style={styles.dropdownWrapper}>
//           <DropDownPicker
//             open={countryOpen}
//             value={country}
//             items={countryItems}
//             setOpen={setCountryOpen}
//             setValue={setCountry}
//             setItems={setCountryItems}
//             placeholder="Select Country"
//             style={styles.dropdown}
//             dropDownContainerStyle={styles.dropdownContainer}
//             textStyle={styles.dropdownText}
//             placeholderStyle={styles.dropdownPlaceholder}
//             zIndex={500} // Lower zIndex to avoid overlapping with other dropdowns
//           />
//         </View>

//         {/* Pincode */}
//         <CustomTextInput
//           placeholder="Pincode"
//           value={pincode}
//           onChangeText={setPincode}
//           keyboardType="numeric"
//           style={styles.input}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Background color changed to white
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerBack: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   content: {
//     paddingVertical: 20,
//   },
//   input: {
//     height: 48,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     paddingHorizontal: 16,
//     marginBottom: 16, // Space between input fields
//     fontSize: 16,
//     backgroundColor: '#FAFAFA', // Input background color changed to #FAFAFA
//     color: '#000',
//   },
//   dropdownWrapper: {
//     marginBottom: 16, // Space between dropdowns
//   },
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     backgroundColor: '#FAFAFA', // Dropdown background color changed to #FAFAFA
//     paddingHorizontal: 12,
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     backgroundColor: '#FAFAFA', // Dropdown container background color changed to #FAFAFA
//     marginTop: 4,
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   dropdownPlaceholder: {
//     color: '#616161',
//   },
// });

// export default LeadAddPersonal;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import TextStyle from '../../styles/TextStyle';
// import Stepper from '../../components/StepperComp';
// import Dropdown from '../../components/DropDown';

// const LeadAddPersonal = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [whatsappNo, setWhatsappNo] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Dropdown states for Lead Source
//   const [leadSource, setLeadSource] = useState('');
//   const leadSourceOptions = [
//     { label: 'Website', value: 'website' },
//     { label: 'Referral', value: 'referral' },
//     { label: 'Social Media', value: 'social_media' },
//   ];

//   // Dropdown states for City
//   const [city, setCity] = useState('');
//   const cityOptions = [
//     { label: 'Mumbai', value: 'mumbai' },
//     { label: 'Delhi', value: 'delhi' },
//     { label: 'Bangalore', value: 'bangalore' },
//   ];

//   // Dropdown states for State
//   const [state, setState] = useState('');
//   const stateOptions = [
//     { label: 'Maharashtra', value: 'maharashtra' },
//     { label: 'Karnataka', value: 'karnataka' },
//     { label: 'Tamil Nadu', value: 'tamilnadu' },
//   ];

//   // Dropdown states for Country
//   const [country, setCountry] = useState('');
//   const countryOptions = [
//     { label: 'India', value: 'india' },
//     { label: 'USA', value: 'usa' },
//     { label: 'UK', value: 'uk' },
//   ];

//   const steps = ["Personal", "Occupation", "Services"]; // Steps for the Stepper
//   const currentStep = 1; // Current step is Personal

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Image
//             source={require("../../assets/icons/Cross/cross.png")}
//             style={styles.arrowIcon}
//           />
//         </TouchableOpacity>
//         <Text style={TextStyle.subTitle}>Add Lead</Text>
//       </View>

//       {/* Space between Header and Stepper */}
//       <View style={{ height: 20 }} />

//       {/* Stepper Component */}
//       <Stepper steps={steps} currentStep={currentStep} />

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* First Name */}
//         <CustomTextInput
//           placeholder="First Name"
//           value={firstName}
//           onChangeText={setFirstName}
//           style={TextStyle.Task_descp}
//         />

//         {/* Last Name */}
//         <CustomTextInput
//           placeholder="Last Name"
//           value={lastName}
//           onChangeText={setLastName}
//           style={TextStyle.Task_descp}        
//         />

//         {/* Mobile No */}
//         <CustomTextInput
//           placeholder="Mobile No"
//           value={mobileNo}
//           onChangeText={setMobileNo}
//           keyboardType="numeric"
//           style={TextStyle.Task_descp}        
//         />

//         {/* Email Id */}
//         <CustomTextInput
//           placeholder="Email Id"
//           value={emailId}
//           onChangeText={setEmailId}
//           keyboardType="email-address"
//           style={TextStyle.Task_descp}        
//         />

//         {/* Whatsapp No */}
//         <CustomTextInput
//           placeholder="Whatsapp No"
//           value={whatsappNo}
//           onChangeText={setWhatsappNo}
//           keyboardType="numeric"
//           style={TextStyle.Task_descp}        
//         />

//         {/* Address Line 1 */}
//         <CustomTextInput
//           placeholder="Address Line 1"
//           value={addressLine1}
//           onChangeText={setAddressLine1}
//           style={TextStyle.Task_descp}        
//         />

//         {/* Address Line 2 */}
//         <CustomTextInput
//           placeholder="Address Line 2"
//           value={addressLine2}
//           onChangeText={setAddressLine2}
//           style={TextStyle.Task_descp}
//         />

//         {/* Dropdown for Lead Source */}
//         <Dropdown
//           options={leadSourceOptions}
//           selectedValue={leadSource}
//           onValueChange={setLeadSource}
//           placeholder="Select Lead Source"
//         />

//         {/* Dropdown for City */}
//         <Dropdown
//           options={cityOptions}
//           selectedValue={city}
//           onValueChange={setCity}
//           placeholder="Select City"
//         />

//         {/* Dropdown for State */}
//         <Dropdown
//           options={stateOptions}
//           selectedValue={state}
//           onValueChange={setState}
//           placeholder="Select State"
//         />

//         {/* Dropdown for Country */}
//         <Dropdown
//           options={countryOptions}
//           selectedValue={country}
//           onValueChange={setCountry}
//           placeholder="Select Country"
//         />

//         {/* Pincode */}
//         <CustomTextInput
//           placeholder="Pincode"
//           value={pincode}
//           onChangeText={setPincode}
//           keyboardType="numeric"
//           style={styles.input}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Background color changed to white
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerBack: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   content: {
//     paddingVertical: 20,
//   },
  
//   input: {
//     height: 50,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     paddingHorizontal: 16,
//     marginBottom: 24, // Increased space between fields
//     fontSize: 16,
//     backgroundColor: '#FAFAFA',
//     color: '#000',
//   },
// });

// export default LeadAddPersonal;


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
