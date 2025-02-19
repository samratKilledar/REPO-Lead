// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Navigation from '../../components/Navigation';
// import ButtonStyles from '../../styles/ButtonStyles';
// import TextStyle from '../../styles/TextStyle';
// import CustomText from '../../components/CustomText';
// import DropDownPicker from 'react-native-dropdown-picker'; // Import the dropdown library

// const LeadAddOccupation = () => {
//   const [occupation, setOccupation] = useState('');
//   const [typeOfWork, setTypeOfWork] = useState('');
//   const [monthlyIncome, setMonthlyIncome] = useState('');
//   const step = 2; // Assuming the current step is Occupation

//   // Dropdown state for Occupation
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: 'Software Engineer', value: 'software_engineer' },
//     { label: 'Doctor', value: 'doctor' },
//     { label: 'Teacher', value: 'teacher' },
//     { label: 'Business Owner', value: 'business_owner' },
//     { label: 'Freelancer', value: 'freelancer' },
//   ]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.headerBack}> &lt; </Text>
//         </TouchableOpacity>
//         <Text style={TextStyle.Task_Title}>Add Lead</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Stepper Container */}
//         <View style={styles.stepperContainer}>
//           {/* Step 1: Personal */}
//           <View style={styles.stepContainer}>
//             <View style={[styles.stepCircle, step === 1 && styles.activeStepCircle]}>
//               <Text style={[styles.stepText, step === 1 && styles.activeStepText]}>1</Text>
//             </View>
//             <Text style={[TextStyle.Task_descp, step === 1 && styles.activeStepLabel]}>Personal</Text>
//           </View>

//           {/* Connecting Line */}
//           <View style={[styles.connectingLine, step > 1 && styles.completedLine]} />

//           {/* Step 2: Occupation */}
//           <View style={styles.stepContainer}>
//             <View style={[styles.stepCircle, step === 2 && styles.activeStepCircle]}>
//               <Text style={[styles.stepText, step === 2 && styles.activeStepText]}>2</Text>
//             </View>
//             <Text style={[TextStyle.Task_descp, step === 1 && styles.activeStepLabel]}>Occupation</Text>
//           </View>

//           {/* Connecting Line */}
//           <View style={[styles.connectingLine, step > 2 && styles.completedLine]} />

//           {/* Step 3: Services */}
//           <View style={styles.stepContainer}>
//             <View style={[styles.stepCircle, step === 3 && styles.activeStepCircle]}>
//               <Text style={[styles.stepText, step === 3 && styles.activeStepText]}>3</Text>
//             </View>
//             <Text style={[styles.stepLabel, step === 3 && styles.activeStepLabel]}>Services</Text>
//           </View>
//         </View>

//         {/* Form Fields */}
//         <View style={styles.section}>
//           {/* Occupation Dropdown */}
//           <DropDownPicker
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setItems}
//             placeholder="Select Occupation"
//             style={styles.dropdown}
//             dropDownContainerStyle={styles.dropdownContainer}
//             textStyle={TextStyle.Task_descp}    // yet to know 
//             placeholderStyle={styles.dropdownPlaceholder}
//             selectedItemLabelStyle={styles.selectedItemLabel}
//             onChangeValue={(value) => setOccupation(value)} // Update occupation state
//           />
//         </View>

//         <View style={styles.section}>
//           <CustomTextInput
//             placeholder="Type of Work"
//             value={typeOfWork}
//             onChangeText={setTypeOfWork}
//           />
//         </View>

//         <View style={styles.section}>
//           <CustomTextInput
//             placeholder="Monthly Income"
//             value={monthlyIncome}
//             onChangeText={setMonthlyIncome}
//             keyboardType="numeric"
//           />
//         </View>

//         {/* Next Button */}
//         <TouchableOpacity>
//           <CustomButton title="NEXT" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FFFFFF',
//   },
//   headerBack: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#000',
//     marginLeft: 16,
//   },
//   content: {
//     padding: 16,
//   },
//   stepperContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#DFE4FF', // Sky blue background
//     paddingVertical: 16,
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 16, // Add horizontal padding to ensure lines don't overlap circles
//     position: 'relative', // To position connecting lines properly
//   },
//   stepContainer: {
//     alignItems: 'center',
//     zIndex: 1, // Ensure circles are above connecting lines
//   },
//   stepCircle: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#FFFFFF', // Default inactive step background
//     borderWidth: 2,
//     borderColor: '#C0C0C0', // Gray border for inactive step
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeStepCircle: {
//     backgroundColor: '#2E1C67', // Dark blue active step
//     borderColor: '#2E1C67', // Dark blue border
//   },
//   stepText: {
//     color: '#C0C0C0', // Gray text for inactive step
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   activeStepText: {
//     color: '#FFFFFF', // White text for active step
//   },
//   stepLabel: {
//     fontSize: 14,
//     color: '#A0A0A0', // Light gray for inactive text
//     marginTop: 4,
//   },
//   activeStepLabel: {
//     color: '#2B2162',
//     fontFamily: 'Urbanist',
//     fontWeight: '400',
//     fontSize: 14,
//     lineHeight: 19.6,
//   },
//   connectingLine: {
//     position: 'absolute',
//     top: '62%', // Center vertically
//     height: 2,
//     backgroundColor: '#2B2162', // Gray for incomplete steps
//     zIndex: 0, // Ensure lines are below circles
//   },
//   section: {
//     marginBottom: 24,
//   },
//   // Dropdown Styles
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0', // Matcdh the border color of other inputs
//     borderRadius: 8,
//     backgroundColor: '#FFFFFF', // Match the background color of other inputs
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0', // Match the border color of other inputs
//     borderRadius: 8,
//     backgroundColor: '#FFFFFF', // Match the background color of other inputs
//     marginTop: 4,
//   },
//   dropdownText: {
//     fontSize: 14,
//     color: '#000000', // Match the text color of other inputs
//   },
//   dropdownPlaceholder: {
//     color: '#616161', // Match the placeholder color of other inputs
//   },
//   selectedItemLabel: {
//     fontWeight: 'bold',
//     color: '#2B2162', // Match the active text color
//   },
// });

// export default LeadAddOccupation;



// According to Steeper component & Dropdown comp
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import TextStyle from '../../styles/TextStyle';

import Stepper from '../../components/StepperComp'; // Import the updated Stepper component

const LeadAddOccupation = () => {
  const [occupation, setOccupation] = useState('');
  const [typeOfWork, setTypeOfWork] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const step = 2; // Current step

  // Dropdown state for Occupation
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Software Engineer', value: 'software_engineer' },
    { label: 'Doctor', value: 'doctor' },
    { label: 'Teacher', value: 'teacher' },
    { label: 'Business Owner', value: 'business_owner' },
    { label: 'Freelancer', value: 'freelancer' },
    { label: 'Business Owned', value: 'business_owned' },
    { label: 'Business Owned1', value: 'business_owned1' },
    { label: 'Business Owned2', value: 'business_owned2' },

  ]);

  // Define steps for the stepper
  const steps = ["Personal", "Occupation", "Services"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/Cross/cross.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={TextStyle.Task_Title}>Add Lead</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Stepper Component */}
        <Stepper steps={steps} currentStep={step} />

        {/* Form Fields */}
        <View style={styles.section}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="     Occupation"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={TextStyle.Task_descp}
            placeholderStyle={styles.dropdownPlaceholder}
            selectedItemLabelStyle={styles.selectedItemLabel}
            onChangeValue={(value) => setOccupation(value)}
            ArrowUpIconComponent={() => (
              <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
                )}
            ArrowDownIconComponent={() => (
              <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
              )}
          />
        </View>

        <View style={styles.section}>
          <CustomTextInput
            placeholder="Type of Work"
            value={typeOfWork}
            onChangeText={setTypeOfWork}
          />
        </View>

        <View style={styles.section}>
          <CustomTextInput
            placeholder="Monthly Income"
            value={monthlyIncome}
            onChangeText={setMonthlyIncome}
            keyboardType="numeric"
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity>
          <CustomButton title="NEXT" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,  //space between add lead and steeper 
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  
  headerBack: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  
  content: {
    padding: 16,
  },
  
  section: {
    marginBottom: 24,
  },

  // dropdown: {
  //   borderWidth: 1,
  //   borderColor: '#E0E0E0',
  //   borderRadius: 8,
  //   backgroundColor: '#FFFFFF',
  //   paddingHorizontal: 12,
  //   paddingVertical: 10,
  // },

  dropdown: {
    borderWidth: 1,
    borderColor: "#FAFAFA",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: -2,
  },

  dropdownContainer: {
    borderWidth: 1.2,
    borderColor: "#2B2162",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },

  // dropdownText: {
  //   fontSize: 14,
  //   color: '#000000',
    
  // },

  dropdownPlaceholder: {
    color: '#616161',  //greyscale
  },

  selectedItemLabel: {
    fontWeight: 'bold',
    color: '#2B2162',  //dark blue i.e primary 
  },

  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default LeadAddOccupation;


// Navigation code 
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Stepper from '../../components/StepperComp';
// import TextStyle from '../../styles/TextStyle';

// const LeadAddOccupation = ({ navigation }) => {
//   const [occupation, setOccupation] = useState('');
//   const [typeOfWork, setTypeOfWork] = useState('');
//   const [monthlyIncome, setMonthlyIncome] = useState('');
//   const steps = ["Personal", "Occupation", "Services"];
//   const currentStep = 2;

//   // Dropdown state for Occupation
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: 'Software Engineer', value: 'software_engineer' },
//     { label: 'Doctor', value: 'doctor' },
//     { label: 'Teacher', value: 'teacher' },
//     { label: 'Business Owner', value: 'business_owner' },
//     { label: 'Freelancer', value: 'freelancer' },
//   ]);

//   const handleNext = () => {
//     navigation.navigate('LeadAdd'); // Navigate to the next screen
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.headerBack}> &lt; </Text>
//         </TouchableOpacity>
//         <Text style={TextStyle.Task_Title}>Add Lead</Text>
//       </View>

//       {/* Stepper */}
//       <Stepper steps={steps} currentStep={currentStep} />

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Form Fields */}
//         <DropDownPicker
//           open={open}
//           value={value}
//           items={items}
//           setOpen={setOpen}
//           setValue={setValue}
//           setItems={setItems}
//           placeholder="Select Occupation"
//           style={styles.dropdown}
//           dropDownContainerStyle={styles.dropdownContainer}
//           textStyle={TextStyle.Task_descp}
//           placeholderStyle={styles.dropdownPlaceholder}
//           selectedItemLabelStyle={styles.selectedItemLabel}
//           onChangeValue={(value) => setOccupation(value)}
//         />

//         <CustomTextInput
//           placeholder="Type of Work"
//           value={typeOfWork}
//           onChangeText={setTypeOfWork}
//           style={styles.input}
//         />

//         <CustomTextInput
//           placeholder="Monthly Income"
//           value={monthlyIncome}
//           onChangeText={setMonthlyIncome}
//           keyboardType="numeric"
//           style={styles.input}
//         />

//         {/* Next Button */}
//         <TouchableOpacity onPress={handleNext}>
//           <CustomButton title="Next" customStyle={{ width: '100%' }} textStyles={styles.nextButtonText} />
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FFFFFF',
//   },
//   headerBack: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   content: {
//     padding: 16,
//   },
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     backgroundColor: '#FFFFFF',
//     marginTop: 4,
//   },
//   dropdownText: {
//     fontSize: 14,
//     color: '#000000',
//   },
//   dropdownPlaceholder: {
//     color: '#616161',
//   },
//   selectedItemLabel: {
//     fontWeight: 'bold',
//     color: '#2B2162',
//   },
//   nextButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LeadAddOccupation;