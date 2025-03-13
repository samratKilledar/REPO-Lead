// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import Stepper from '../../components/StepperComp';
// import StatusDropdown from '../../components/StatusDropdown';
// import Dropdown from '../../components/Dropdown';
// import {
//   updateAddressLine1,
//   updateAddressLine2,
//   updateCity,
//   updateCountry,
//   // updateEmailId,
//   // updateLastName,
//   updateMobileNo,
//   updatePincode,
//   updateState,
//   // updateWhatsAppNo,
//   // updateFirstName,
//   updatefirstName,
//   updatelastName,
//   updateemailId,
//   updatewhatsappNo
// } from '../../redux/actions/personalAction';

// const LeadAddPersonal = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const {
//     firstName,
//     lastName,
//     mobileNo,
//     emailId,
//     whatsappNo,
//     addressLine1,
//     addressLine2,
//     pincode,
//     city,
//     state,
//     country
//   } = useSelector(state => state.personalReducer);
//   const { 
//     titlePlaceholder, followupStatusPlaceholder, assignedToPlaceholder, attachmentUrlPlaceholder, followupDatePlaceholder, 
//     followupTimePlaceholder, remarkPlaceholder
//   } = useSelector(state => state.addFollowUp);
//   const dropDown= useSelector(state => state.homeReducer);
//   alert(JSON.stringify(dropDown.state ))

//   const [leadService, setLeadService] = useState('');

//   const steps = ['Personal', 'Occupation', 'Services'];
//   const currentStep = 1;

//   // Added the validation code 
//   const validateFields = () => {
//     if (!firstName.trim()) {
//       Alert.alert('Validation Error', 'Please enter First Name.');
//       return false;
//     }
//     if (!lastName.trim()) {
//       Alert.alert('Validation Error', 'Please enter Last Name.');
//       return false;
//     }
//     if (!mobileNo.trim() || !/^\d{10}$/.test(mobileNo)) {
//       Alert.alert('Validation Error', 'Please enter a valid 10-digit Mobile Number.');
//       return false;
//     }
//     if (!emailId.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
//       Alert.alert('Validation Error', 'Please enter a valid Email Address.');
//       return false;
//     }
//     if (whatsappNo.trim() && !/^\d{10}$/.test(whatsappNo)) {
//       Alert.alert('Validation Error', 'Please enter a valid 10-digit WhatsApp Number.');
//       return false;
//     }
//     if (!addressLine1.trim()) {
//       Alert.alert('Validation Error', 'Please enter Address Line 1.');
//       return false;
//     }
//     if (!city) {
//       Alert.alert('Validation Error', 'Please select City.');
//       return false;
//     }
//     if (!state) {
//       Alert.alert('Validation Error', 'Please select State.');
//       return false;
//     }
//     if (!country) {
//       Alert.alert('Validation Error', 'Please select Country.');
//       return false;
//     }
//     if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
//       Alert.alert('Validation Error', 'Please enter a valid 6-digit Pincode.');
//       return false;
//     }
//     return true;
//   };

//   const goBackCall = () => navigation.goBack();

//   const handleOccupation = () => {
//     if (validateFields()) {
//       navigation.navigate('LeadAddOccupation');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       {/* NavigationHeaderBack positioned absolutely at the top */}
//       <View style={styles.headerContainer}>
//         <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
//       </View>

//       {/* Rest of the content */}
//       <View style={styles.contentContainer}>
//         <Stepper steps={steps} currentStep={currentStep} style={styles.stepper} />

//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//           <View style={styles.centerContainer}>
//             <CustomTextInput
//               value={firstName}
//               placeholder="First Name"
//               onChangeText={(value) => dispatch(updatefirstName(value))}
//             />
//             <CustomTextInput
//               value={lastName}
//               placeholder="Last Name"
//               onChangeText={(value) => dispatch(updatelastName(value))}
//             />
//             <StatusDropdown
//               label="Lead Source"
//               selectedValue={leadService}
//               onValueChange={setLeadService}
//               apiType="leadSource"
//             />
//             <CustomTextInput
//               value={mobileNo}
//               placeholder="Mobile No"
//               keyboardType="phone-pad"
//               onChangeText={(value) => dispatch(updateMobileNo(value))}
//             />
//             <CustomTextInput
//               value={emailId}
//               placeholder="Email Id"
//               keyboardType="email-address"
//               onChangeText={(value) => dispatch(updateemailId(value))}
//             />
//             <CustomTextInput
//               value={whatsappNo}
//               placeholder="WhatsApp No"
//               keyboardType="phone-pad"
//               onChangeText={(value) => dispatch(updatewhatsappNo(value))}
//             />
//             <CustomTextInput
//               value={addressLine1}
//               placeholder="Address Line 1"
//               onChangeText={(value) => dispatch(updateAddressLine1(value))}
//             />
//             <CustomTextInput
//               value={addressLine2}
//               placeholder="Address Line 2"
//               onChangeText={(value) => dispatch(updateAddressLine2(value))}
//             />
//             <StatusDropdown
//               label="City"
//               selectedValue={city}
//               onValueChange={(value) => dispatch(updateCity(value))}
//               apiType="city"
//               zIndex={3000}
//             />
//             <StatusDropdown
//               label="State"
//               selectedValue={state}
//               onValueChange={(value) => dispatch(updateState(value))}
//               apiType="state"
//               zIndex={2000}
//             />
//             <StatusDropdown
//               label="Country"
//               selectedValue={country}
//               onValueChange={(value) => dispatch(updateCountry(value))}
//               apiType="country"
//               zIndex={1000}
//             />
//             <CustomTextInput
//               value={pincode}
//               placeholder="Pincode"
//               keyboardType="numeric"
//               onChangeText={(value) => dispatch(updatePincode(value))}
//             />
//             <CustomButton
//               title="Next"
//               customStyle={styles.nextButton}
//               onPress={handleOccupation}
//             />
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     paddingTop:15,
//     gap:18,
//   },
//   headerContainer: {
//     position: 'absolute', 
//     top: 15, 
//     left: 0,
//     right: 0,
//     zIndex: 1000, 
//     paddingTop: 15, 
//     paddingHorizontal: 15, 
//     backgroundColor: '#FFFFFF', 
//   },
//   contentContainer: {
//     flex: 1,
//     paddingTop: 70, 
//   },
//   stepper: {
//     marginTop: 10, 
//     paddingHorizontal: 15, 
//     marginTop:10,
//     paddingTop:15,
//     gap:18
//   },
//   centerContainer: {
//     paddingBottom: 20,
//     gap: 10,
//     paddingLeft: 15,
//     paddingRight: 15,
//     position: "relative",
//     paddingHorizontal: 15, 
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     paddingBottom: '50'
//   },
// });

// export default LeadAddPersonal;

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, ToastAndroid  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';

import {
  updateAddressLine1,
  updateAddressLine2,
  updateCity,
  updateCountry,
  updatePincode,
  updateState,
  updatefirstName,
  updatelastName,
  updateemailId,
  updatewhatsappNo,
  updateMobileno,
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
    country,
  } = useSelector((state) => state.personalReducer);

  const [leadService, setLeadService] = useState('');

  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 1;

  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  // Validation function with toast messages
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
    if (!addressLine2.trim()) {
        showToast('Please enter Address Line 1.');
        return false;
    }
    if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
        showToast('Please enter a valid 6-digit Pincode.');
        return false;
    }
    if (!emailId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId.trim())) {
        showToast('Please enter a valid Email Address.');
        return false;
    }
      
    // if (!city) {
    //     showToast('Please select City.');
    //     return false;
    // }
    // if (!state) {
    //     showToast('Please select State.');
    //     return false;
    // }
    // if (!country) {
    //     showToast('Please select Country.');
    //     return false;
    // }
    
    return true;
  };

  const goBackCall = () => navigation.goBack();

  const handleOccupation = () => {
    if (validateFields()) {
      navigation.navigate('LeadAddOccupation');
    }
  };

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
              onChangeText={(value) => dispatch(updatefirstName(value))}
            />
            <CustomTextInput
              value={lastName}
              placeholder="Last Name"
              onChangeText={(value) => dispatch(updatelastName(value))}
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
              onChangeText={(value) => dispatch(updateMobileno(value))}
            />
            {/* <CustomTextInput
              value={emailId}
              placeholder="Email Id"
              keyboardType="email-address"
              onChangeText={(value) => dispatch(updateemailId(value))}
            /> */}
            <CustomTextInput
            value={emailId}
            placeholder="Email Id"
            keyboardType="email-address"
            onChangeText={(value) => dispatch(updateemailId(value))}
            />
            <CustomTextInput
              value={whatsappNo}
              placeholder="WhatsApp No"
              keyboardType="phone-pad"
              onChangeText={(value) => dispatch(updatewhatsappNo(value))}
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

      {/* Toast component positioned at the bottom */}
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
    marginTop: 10,
    paddingTop: 15,
    gap: 18,
  },
  centerContainer: {
    paddingBottom: 20,
    gap: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
    paddingHorizontal: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: '50',
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

export default LeadAddPersonal;