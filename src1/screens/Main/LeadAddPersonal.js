// import React, { useState ,useEffect } from 'react';
// import { View, StyleSheet, ScrollView, } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Dropdown from '../../components/Dropdown';
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import Stepper from "../../components/StepperComp";
// import StatusDropdown from '../../components/StatusDropdown';
// import { updateAddressLine1, updateAddressLine2, updateCity, updateCountry, updateemailId, updatelastName, updateMobileno, updatePincode, updateState, updatewhatsappNo } from '../../redux/actions/personalAction';

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

//   const goBackCall = () => {
//     props.navigation.goBack();
//   };
//   const handleOccupation = () => {
//     props.navigation.navigate("LeadAddOccupation")
//   }

//   const dispatch = useDispatch();
//   const {
//     firstName,
//     lastName,
//     mobileNo,
//     email,
//     whatsapp,
//     addressLine1,
//     addressLine2,
//     pincode
//   } = useSelector(state => state.personal);


//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <NavigationHeaderBack text="Add Lead" onPress={goBackCall}/>
//       </View>

//       <View style={styles.stepperContainer}>
//         <Stepper steps={steps} currentStep={currentStep} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.centerContainer}>
//           <CustomTextInput
//             value={state.firstName}
//             placeholder="First Name"
//             // onChangeText={(value) => handleInputChange('firstName', value)}
//             onChangeText={(value) => dispatch(updatefirstName(value))}

//           />
//           <CustomTextInput
//             value={state.lastName}
//             placeholder="Last Name"
//             // onChangeText={(value) => handleInputChange('lastName', value)}
//             onChangeText={(value) => dispatch(updatelastName(value))}

//           />

//            <StatusDropdown
//         label= "Lead Source" 
//         selectedValue={leadService} 
//         onValueChange={setLeadService}
//          apiType="leadSource" 
//           zIndex={4000} // Higher than Dropdown 2
//           elevation={8}
//        />
//           <CustomTextInput
//             value={state.mobileNo}
//             placeholder="Mobile No"
//             // onChangeText={(value) => handleInputChange('mobileNo', value)}
//             onChangeText={(value) => dispatch(updateMobileno(value))}

//           />
//           <CustomTextInput
//             value={state.emailId}
//             placeholder="Email id"
//             // onChangeText={(value) => handleInputChange('emailId', value)}
//             onChangeText={(value) => dispatch(updateemailId(value))}
//           />
//           <CustomTextInput
//             value={state.whatsappNo}
//             placeholder="Whatsapp No"
//             // onChangeText={(value) => handleInputChange('whatsappNo', value)}
//             onChangeText={(value) => dispatch(updatewhatsappNo(value))}
//           />
//           <CustomTextInput
//             value={state.addressLine1}
//             placeholder="Address Line 1"
//             // onChangeText={(value) => handleInputChange('addressLine1', value)}
//             onChangeText={(value) => dispatch(updateAddressLine1(value))}
//           />
//           <CustomTextInput
//             value={state.addressLine2}
//             placeholder="Address Line 2"
//             // onChangeText={(value) => handleInputChange('addressLine2', value)}
//             onChangeText={(value) => dispatch(updateAddressLine2(value))}
//           />
//           <StatusDropdown 
//           label="City"
//           selectedValue={city}
//           // onValueChange={setCity}
//           onChangeValue={(value) => dispatch(updateCity(value))}
//           apiType="city"
//           zIndex={3000}
//           elevation={7}
//           />
//           <StatusDropdown 
//           label="State"
//           selectedValue={state}
//           // onValueChange={setState}
//           onChangeValue={(value) => dispatch(updateState(value))}
//           apiType="state"
//           zIndex={2000}
//           elevation={6}
//           />
        
//           <StatusDropdown 
//           label="Country"
//           selectedValue={country}
//           // onValueChange={setCountry}
//           onChangeValue={(value) => dispatch(updateCountry(value))}
//           apiType="country"
//           zIndex={1000}
//           elevation={5}
//           />
//           <CustomTextInput
//             value={state.pincode}
//             placeholder="Pincode"
//             // onChangeText={(value) => handleInputChange('pincode', value)}
//             onChangeValue={(value) => dispatch(updatePincode(value))}

//           />

//         <CustomButton title="Next" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} onPress={handleOccupation}/>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({

//   container: {

//     flex: 1,
//     //paddingHorizontal: 24,
//     paddingTop: 15,
//     backgroundColor: "#FFFFFF",
//     gap: 18,
//     marginBottom: 50,
//     },
//     header: {
//     height: 50,
//     },
//     stepperContainer: {
//     height: 50,
//     marginTop: 10,
//    },
//     centerContainer: {
//     paddingBottom: 20,
//     gap: 10,
//     position:'relative',
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     },
// });

// export default LeadAddPersonal;


import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
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
      <View style={{flex:0.1 , marginLeft:10}}>
      <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
      </View>
      
      <View style={styles.stepperContainer}>
         <Stepper steps={steps} currentStep={currentStep} />
       </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent} >
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
            zIndex={4000} // Higher than Dropdown 2
           elevation={8}
            listData={dropDown.leadSource}
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
          {/* <StatusDropdown
            label="City"
            selectedValue={city}
            onValueChange={(value) => dispatch(updateCity(value))}
            apiType="city"
            listData={dropDown.city}
          /> */}
         <StatusDropdown
          label="City"
          selectedValue={city}
          onValueChange={(value) => dispatch(updateAddressLine2(value))}
          apiType="city"
          zIndex={3000}
          elevation={7}
          listData={dropDown.city}
        />

      <StatusDropdown
           label="State"
           selectedValue={state}
           onValueChange={(value) => dispatch(updateState(value))}
           apiType="State"
           listData={dropDown.state}
           zIndex={2000} // Higher than Dropdown 2
           elevation={6}// Explicitly setting zIndex
        />

          <StatusDropdown
            label="Country"
            selectedValue={country}
            onValueChange={(value) => dispatch(updateCountry(value))}
            apiType="Country"
            listData={dropDown.country}
            zIndex={1000} // Higher than Dropdown 2
           elevation={5}// Explicitly setting zIndex
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
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
    paddingLeft: 15,
    paddingRight: 15,
    position: "relative",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default LeadAddPersonal;