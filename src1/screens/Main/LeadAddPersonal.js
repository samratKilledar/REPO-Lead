// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Dropdown from '../../components/DropDown';
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import Stepper from "../../components/StepperComp";

// const LeadAddPersonal = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [whatsappNo, setWhatsappNo] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [leadService, setLeadService] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');

//   const steps = ["Personal", "Occupation", "Services"];
//   const currentStep = 1; // Set the current step dynamically based on your logic

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <NavigationHeaderBack text="Add Lead" />
//       </View>

//       {/* Stepper Section */}
//       <View style={styles.stepperContainer}>
//         <Stepper steps={steps} currentStep={currentStep} />
//       </View>

//       {/* Scrollable Content Section */}
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.centerContainer}>
//           <CustomTextInput
//             value={firstName}
//             placeholder="First Name"
//             onChangeText={setFirstName}
//           />

//           <CustomTextInput
//             value={lastName}
//             placeholder="Last Name"
//             onChangeText={setLastName}
//           />

//           <Dropdown
//             label="Lead Service"
//             selectedValue={leadService}
//             onValueChange={setLeadService}
//             options={[
//               { label: "John Doe", value: "John Doe" },
//               { label: "Jane Smith", value: "Jane Smith" },
//             ]}
//             zIndex={3000}
//           />

//           <CustomTextInput
//             value={mobileNo}
//             placeholder="Mobile No"
//             onChangeText={setMobileNo}
//           />

//           <CustomTextInput
//             value={emailId}
//             placeholder="Email id"
//             onChangeText={setEmailId}
//           />

//           <CustomTextInput
//             value={whatsappNo}
//             placeholder="Whatsapp No"
//             onChangeText={setWhatsappNo}
//           />

//           <CustomTextInput
//             value={addressLine1}
//             placeholder="Address Line 1"
//             onChangeText={setAddressLine1}
//           />

//           <CustomTextInput
//             value={addressLine2}
//             placeholder="Address Line 2"
//             onChangeText={setAddressLine2}
//           />

//           <Dropdown
//             label="City"
//             selectedValue={city}
//             onValueChange={setCity}
//             options={[
//               { label: "Mumbai", value: "Mumbai" },
//               { label: "Pune", value: "Pune" },
//               { label: "Kolhapur", value: "Kolhapur" },
//               { label: "Hyderabad", value: "Telangana" },
//             ]}
//             zIndex={5000}
//           />

//           <Dropdown
//             label="State"
//             selectedValue={state}
//             onValueChange={setState}
//             options={[
//               { label: "Mumbai", value: "Maharashtra" },
//               { label: "Pune", value: "Maharashtra" },
//               { label: "Kolhapur", value: "Maharashtra" },
//               { label: "Hyderabad", value: "Maharashtra" },
//             ]}
//             zIndex={4000}
//           />

//           <Dropdown
//             label="Country"
//             selectedValue={country}
//             onValueChange={setCountry}
//             options={[
//               { label: "India", value: "India" },
//               { label: "USA", value: "USA" },
//               { label: "Australia", value: "Australia" },
//             ]}
//             zIndex={3000}
//           />

//           <CustomTextInput
//             value={pincode}
//             placeholder="Pincode"
//             onChangeText={setPincode}
//           />

//         <CustomButton title="ADD" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 15,
//     backgroundColor: "#FFFFFF",
//     gap: 18,
//   },
//   header: {
//     height: 50, // Fixed height for the header
//   },
//   stepperContainer: {
//     height: 50, // Fixed height for the stepper
//     marginTop: 10,
//   },
//   centerContainer: {
//     paddingBottom: 20, // Add padding at the bottom for better spacing
//     gap:10,
//   },
//   scrollViewContent: {
//     flexGrow: 1, // Ensures the content grows within the ScrollView
//   },
// });

// export default LeadAddPersonal;

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from "../../components/Dropdown";
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from "../../components/StepperComp";

const LeadAddPersonal = () => {
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
  const currentStep = 1; // Set the current step dynamically based on your logic

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <NavigationHeaderBack text="Add Lead" />
      </View>

      {/* Stepper Section */}
      <View style={styles.stepperContainer}>
        <Stepper steps={steps} currentStep={currentStep} />
      </View>

      {/* Scrollable Content Section */}
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
            label="Lead Service"
            selectedValue={leadService}
            onValueChange={setLeadService}
            options={[
              { label: "John Doe", value: "John Doe" },
              { label: "Jane Smith", value: "Jane Smith" },
            ]}
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

        <CustomButton title="ADD" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
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
    height: 50, // Fixed height for the header
  },
  stepperContainer: {
    height: 50, // Fixed height for the stepper
    marginTop: 5,
  },
  centerContainer: {
    paddingBottom: 20, // Add padding at the bottom for better spacing
    gap:10,
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures the content grows within the ScrollView
  },
});

export default LeadAddPersonal;