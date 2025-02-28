// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView, } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Dropdown from "../../components/Dropdown";
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import Stepper from "../../components/StepperComp";
// import TextStyle from '../../styles/TextStyle';

// const LeadAddPersonal = (props) => {
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
//   const currentStep = 1;


//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <NavigationHeaderBack text="Add Lead" />
//       </View>

//       <View style={styles.stepperContainer}>
//         <Stepper steps={steps} currentStep={currentStep} />
//       </View>

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
//               { label: "Online", value: "Online" },
//               { label: "Offline", value: "Offline" },
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
//               { label: "Thane", value: "Thane" },
//               { label: "Navi Mumbai", value: "Navi Mumbai" },
//               { label: "Panvel", value: "Panvel" },
//             ]}
//             zIndex={5000}
//           />
//           <Dropdown
//             label="State"
//             selectedValue={state}
//             onValueChange={setState}
//             options={[
//               { label: "Maharashtra", value: "Maharashtra" },
//               { label: "Gujrat", value: "Gujarat" },
//               { label: "Goa", value: "Goa" },
//               { label: "Karnataka", value: "Karnataka" },
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

//         <CustomButton title="Next" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   //  paddingHorizontal: 24,
//     paddingTop: 15,
//     backgroundColor: "#FFFFFF",
//     gap: 18,
//     marginBottom: 50,
//   },
//   header: {
//     height: 50,
//   },
//   stepperContainer: {
//     height: 50,
//     marginTop: 10,
//   },
//   centerContainer: {
//     paddingBottom: 20,
//     gap: 10,
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//   },
// });

// export default LeadAddPersonal;

// // According API CALL
// import React, { useState } from "react";
// import { View, StyleSheet, ScrollView, Alert } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import CustomButton from "../../components/CustomButton";
// import CustomTextInput from "../../components/CustomTextInput";
// import Dropdown from "../../components/Dropdown";
// import NavigationHeaderBack from "../../components/NavigationHeaderBack";
// import Stepper from "../../components/StepperComp";
// import { addLead } from "../../redux/actions/personalAction";

// const LeadAddPersonal = ({ navigation }) => {
//   const dispatch = useDispatch();
  
//   // ✅ Updated useSelector to prevent errors
//   const { loading = false, error = null } = useSelector((state) => state.lead || {});

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNo: "",
//     emailId: "",
//     whatsappNo: "",
//     addressLine1: "",
//     addressLine2: "",
//     pincode: "",
//     leadService: "",
//     city: "",
//     state: "",
//     country: "",
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     if (!formData.firstName || !formData.mobileNo) {
//       Alert.alert("Error", "First Name and Mobile Number are required");
//       return;
//     }

//     dispatch(addLead(formData))
//       .then(() => {
//         Alert.alert("Success", "Lead added successfully");
//         navigation.navigate("NextScreen");
//       })
//       .catch(() => {
//         Alert.alert("Error", error || "Failed to add lead");
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <NavigationHeaderBack text="Add Lead" />
//       </View>

//       <View style={styles.stepperContainer}>
//         <Stepper steps={["Personal", "Occupation", "Services"]} currentStep={1} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.centerContainer}>
//           <CustomTextInput 
//           value={formData.firstName} 
//           placeholder="First Name" 
//           onChangeText={(value) => handleInputChange("firstName", value)} 
//           />

//           <CustomTextInput 
//           value={formData.lastName} 
//           placeholder="Last Name" 
//           onChangeText={(value) => handleInputChange("lastName", value)} 
//           />

//           <Dropdown label="Lead Service" 
//           selectedValue={formData.leadService} 
//           onValueChange={(value) => handleInputChange("leadService", value)} 
//           options={[
//           { label: "Online", value: "Online" }, 
//           { label: "Offline", value: "Offline" }]} 
//           />

//           <CustomTextInput 
//           value={formData.mobileNo} 
//           placeholder="Mobile No" 
//           onChangeText={(value) => handleInputChange("mobileNo", value)} 
//           />

//           <CustomTextInput 
//           value={formData.emailId} 
//           placeholder="Email id" 
//           onChangeText={(value) => handleInputChange("emailId", value)} 
//           />

//           <CustomTextInput 
//           value={formData.whatsappNo} 
//           placeholder="Whatsapp No" 
//           onChangeText={(value) => handleInputChange("whatsappNo", value)} 
//           />

//           <CustomTextInput 
//           value={formData.addressLine1} 
//           placeholder="Address Line 1" 
//           onChangeText={(value) => handleInputChange("addressLine1", value)} 
//           />

//           <CustomTextInput 
//           value={formData.addressLine2} 
//           placeholder="Address Line 2" 
//           onChangeText={(value) => handleInputChange("addressLine2", value)} 
//           />

//           <Dropdown 
//           label="City" 
//           selectedValue={formData.city} 
//           onValueChange={(value) => handleInputChange("city", value)} 
//           options={[
//           { label: "Mumbai", value: "Mumbai" }, 
//           { label: "Thane", value: "Thane" }]}
//           zIndex={5000} 
//           />

//           <Dropdown 
//           label="State" 
//           selectedValue={formData.state} 
//           onValueChange={(value) => handleInputChange("state", value)} 
//           options={[
//           { label: "Maharashtra", value: "Maharashtra" }, 
//           { label: "Gujarat", value: "Gujarat" }]} 
//           zIndex={4000} 
//           />

//           <Dropdown 
//           label="Country" 
//           selectedValue={formData.country} 
//           onValueChange={(value) => handleInputChange("country", value)} 
//           options={[
//           { label: "India", value: "India" }, 
//           { label: "USA", value: "USA" }]} 
//           zIndex={3000} 
//           />

//           <CustomTextInput 
//           value={formData.pincode} 
//           placeholder="Pincode" onChangeText={(value) => handleInputChange("pincode", value)} 
//           />

//           <CustomButton title={loading ? "Submitting..." : "Next"} onPress={handleSubmit} disabled={loading} />

//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     //  paddingHorizontal: 24,
//       paddingTop: 15,
//       backgroundColor: "#FFFFFF",
//       gap: 18,
//       marginBottom: 50,
//     },
//     header: {
//       height: 50,
//     },
//     stepperContainer: {
//       height: 50,
//       marginTop: 10,
//     },
//     centerContainer: {
//       paddingBottom: 20,
//       gap: 10,
//     },
//     scrollViewContent: {
//       flexGrow: 1,
//     },
//   });
// export default LeadAddPersonal;

// Yesterday Eve --> 
import React, { useReducer } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from '../../components/StepperComp';
import TextStyle from '../../styles/TextStyle';
import personalReducer from '../../redux/reducers/personalReducer';
import { updateField, submitLead } from '../../redux/actions/personalAction';

const initialState = {
  firstName: '',
  lastName: '',
  mobileNo: '',
  emailId: '',
  whatsappNo: '',
  addressLine1: '',
  addressLine2: '',
  pincode: '',
  leadService: '',
  city: '',
  state: '',
  country: '',
};

const LeadAddPersonal = (props) => {
  const [state, dispatch] = useReducer(personalReducer, initialState);

  const handleInputChange = (field, value) => {
    dispatch(updateField(field, value));
  };

  const handleSubmit = () => {
    dispatch(submitLead(state));
  };

  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 1;

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
            value={state.firstName}
            placeholder="First Name"
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
          <CustomTextInput
            value={state.lastName}
            placeholder="Last Name"
            onChangeText={(value) => handleInputChange('lastName', value)}
          />
          <Dropdown
            label="Lead Service"
            selectedValue={state.leadService}
            onValueChange={(value) => handleInputChange('leadService', value)}
            options={[{ label: 'Online', value: 'Online' }, { label: 'Offline', value: 'Offline' }]}
            zIndex={3000}
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
          <Dropdown
            label="City"
            selectedValue={state.city}
            onValueChange={(value) => handleInputChange('city', value)}
            options={[
              { label: 'Mumbai', value: 'Mumbai' },
              { label: 'Thane', value: 'Thane' },
              { label: 'Navi Mumbai', value: 'Navi Mumbai' },
              { label: 'Panvel', value: 'Panvel' },
            ]}
            zIndex={5000}
          />
          <Dropdown
            label="State"
            selectedValue={state.state}
            onValueChange={(value) => handleInputChange('state', value)}
            options={[
              { label: 'Maharashtra', value: 'Maharashtra' },
              { label: 'Gujrat', value: 'Gujarat' },
              { label: 'Goa', value: 'Goa' },
              { label: 'Karnataka', value: 'Karnataka' },
            ]}
            zIndex={4000}
          />
          <Dropdown
            label="Country"
            selectedValue={state.country}
            onValueChange={(value) => handleInputChange('country', value)}
            options={[
              { label: 'India', value: 'India' },
              { label: 'USA', value: 'USA' },
              { label: 'Australia', value: 'Australia' },
            ]}
            zIndex={3000}
          />
          <CustomTextInput
            value={state.pincode}
            placeholder="Pincode"
            onChangeText={(value) => handleInputChange('pincode', value)}
          />

          <CustomButton title="Next" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} onPress={handleSubmit} />
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
    paddingLeft:15,
    paddingRight:15,
    },
    scrollViewContent: {
    flexGrow: 1,
    },
});

export default LeadAddPersonal;