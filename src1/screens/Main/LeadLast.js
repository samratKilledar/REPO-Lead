// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import RNPickerSelect from "react-native-picker-select";
// import Stepper from "../../components/StepperComp"; // Ensure the correct path
// import Navigation from '../../components/Navigation';
// import ButtonStyles from '../../styles/ButtonStyles';
// import CustomTextInput from '../../components/CustomTextInput';
// import TextStyle from '../../styles/TextStyle';
// import CustomButton from '../../components/CustomButton';
// import CustomText from '../../components/CustomText';

// const LeadAdd = () => {
//   const [assignTo, setAssignTo] = useState(null);
//   const [service, setService] = useState(null);
//   const [remark, setRemark] = useState("");
//   const steps = ["Personal", "Occupation", "Services"];
//   const currentStep = 3;

//   const addLead = () => {
//     console.log("Lead Added:", { assignTo, service, remark });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.headerBack}> {"<-"} </Text>   
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Add Lead</Text>
//       </View>

//       {/* Stepper */}
//       <Stepper steps={steps} currentStep={currentStep} />

//       {/* Space Below Stepper */}
//       <View style={{ height: 20 }} />

//       {/* Dropdowns & Inputs */}
//       <View style={styles.inputContainer}>
//         <RNPickerSelect
//           onValueChange={(value) => setAssignTo(value)}
//           items={[
//             { label: "John Doe", value: "John Doe" },
//             { label: "Jane Smith", value: "Jane Smith" },
//           ]}
//           placeholder={{ label: "Assign to", value: null }}
//           value={assignTo}
//           style={pickerSelectStyles}
//         />

//         <RNPickerSelect
//           onValueChange={(value) => setService(value)}
//           items={[
//             { label: "Mutual Fund", value: "Mutual Fund" },
//             { label: "Insurance", value: "Insurance" },
//           ]}
//           placeholder={{ label: "Services", value: null }}
//           value={service}
//           style={pickerSelectStyles}
//         />

//         <CustomTextInput
//           style={styles.input}
//           placeholder="Remark"
//           value={remark}
//           onChangeText={setRemark}
//         />
//       </View>

//       {/* Add Button */}
//       <TouchableOpacity >
//       <CustomButton title="ADD" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerBack: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#007BFF",
//     marginRight: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: "#F7F7F7",
//     marginBottom: 15,
//   },
//   addButton: {
//     backgroundColor: "#007BFF",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: "#F7F7F7",
//     marginBottom: 15,
//   },
//   inputAndroid: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: "#F7F7F7",
//     marginBottom: 15,
//   },
// };

// export default LeadAdd;


//New LeadLast with Stepper component 

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image, // Import the Image component
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Stepper from "../../components/StepperComp";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import TextStyle from "../../styles/TextStyle";

const LeadAdd = () => {
  const [assignTo, setAssignTo] = useState(null);
  const [service, setService] = useState(null);
  const [remark, setRemark] = useState("");
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 3;

  // Dropdown states for Assign To
  const [assignToOpen, setAssignToOpen] = useState(false);
  const [assignToItems, setAssignToItems] = useState([
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
  ]);

  // Dropdown states for Services
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceItems, setServiceItems] = useState([
    { label: "Mutual Fund", value: "Mutual Fund" },
    { label: "Insurance", value: "Insurance" },
  ]);

  const addLead = () => {
    console.log("Lead Added:", { assignTo, service, remark });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/Cross/cross.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={TextStyle.Task_Title}>Add Lead</Text>
      </View>

      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Space Below Stepper */}
      <View style={{ height: 20 }} />

      {/* Dropdowns & Inputs */}
      <ScrollView contentContainerStyle={styles.inputContainer}>
        {/* Assign To Dropdown */}
        <DropDownPicker
          open={assignToOpen}
          value={assignTo}
          items={assignToItems}
          setOpen={setAssignToOpen}
          setValue={setAssignTo}
          setItems={setAssignToItems}
          placeholder="   Assign to"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={TextStyle.Task_descp}
          placeholderStyle={styles.dropdownPlaceholder}
          selectedItemLabelStyle={styles.selectedItemLabel}
          zIndex={3000}
          ArrowUpIconComponent={() => (
            <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
          )}
          ArrowDownIconComponent={() => (
            <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
          )}
        />

        {/* Services Dropdown */}
        <DropDownPicker
          open={serviceOpen}
          value={service}
          items={serviceItems}
          setOpen={setServiceOpen}
          setValue={setService}
          setItems={setServiceItems}
          placeholder="   Services"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={TextStyle.Task_descp}
          placeholderStyle={styles.dropdownPlaceholder}
          selectedItemLabelStyle={styles.selectedItemLabel}
          zIndex={2000}
          ArrowUpIconComponent={() => (
            <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
          )}
          ArrowDownIconComponent={() => (
            <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
          )}
        />

        {/* Remark Input */}
        <CustomTextInput
          placeholder="Remark"
          value={remark}
          onChangeText={setRemark}
          style={TextStyle.Task_descp}
        />

        {/* Space between Remark and Button */}
        <View style={{ height: 20 }} />

        {/* Add Button */}
        <TouchableOpacity onPress={addLead}>
          <CustomButton
            title="ADD"
            customStyle={{ width: "100%" }}
            textStyles={styles.nextButtonText}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",

  },
  
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  arrowIcon: {
    width: 24, // Set the width of the arrow
    height: 24, // Set the height of the arrow
    resizeMode: "contain", // Ensure the image scales properly
    marginRight: 10, // Add some spacing between the arrow and the title
  },
  
  inputContainer: {
    flexGrow: 1,
  },
  input: {
    marginBottom: 15,
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

  dropdownPlaceholder: {
    color: "#616161",
  },

  selectedItemLabel: {
    fontWeight: "bold",
    color: "#2B2162",
  },

  
});

export default LeadAdd;

// With Navigation 
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Stepper from '../../components/StepperComp';
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import TextStyle from '../../styles/TextStyle';

// const LeadAdd = ({ navigation }) => {
//   const [assignTo, setAssignTo] = useState(null);
//   const [service, setService] = useState(null);
//   const [remark, setRemark] = useState('');
//   const steps = ['Personal', 'Occupation', 'Services'];
//   const currentStep = 3;

//   // Dropdown states for Assign To
//   const [assignToOpen, setAssignToOpen] = useState(false);
//   const [assignToItems, setAssignToItems] = useState([
//     { label: 'John Doe', value: 'John Doe' },
//     { label: 'Jane Smith', value: 'Jane Smith' },
//   ]);

//   // Dropdown states for Services
//   const [serviceOpen, setServiceOpen] = useState(false);
//   const [serviceItems, setServiceItems] = useState([
//     { label: 'Mutual Fund', value: 'Mutual Fund' },
//     { label: 'Insurance', value: 'Insurance' },
//   ]);

//   const addLead = () => {
//     console.log('Lead Added:', { assignTo, service, remark });
//     navigation.navigate('LeadAddservice'); // Navigate back to the first screen
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={TextStyle.Task_Title}> &lt; </Text>
//         </TouchableOpacity>
//         <Text style={TextStyle.Task_Title}>Add Lead</Text>
//       </View>

//       {/* Stepper */}
//       <Stepper steps={steps} currentStep={currentStep} />

//       {/* Dropdowns & Inputs */}
//       <ScrollView contentContainerStyle={styles.inputContainer}>
//         {/* Assign To Dropdown */}
//         <DropDownPicker
//           open={assignToOpen}
//           value={assignTo}
//           items={assignToItems}
//           setOpen={setAssignToOpen}
//           setValue={setAssignTo}
//           setItems={setAssignToItems}
//           placeholder="Assign to"
//           style={styles.dropdown}
//           dropDownContainerStyle={styles.dropdownContainer}
//           textStyle={TextStyle.Task_descp}
//           placeholderStyle={styles.dropdownPlaceholder}
//           selectedItemLabelStyle={styles.selectedItemLabel}
//           zIndex={3000}
//         />

//         {/* Services Dropdown */}
//         <DropDownPicker
//           open={serviceOpen}
//           value={service}
//           items={serviceItems}
//           setOpen={setServiceOpen}
//           setValue={setService}
//           setItems={setServiceItems}
//           placeholder="Services"
//           style={styles.dropdown}
//           dropDownContainerStyle={styles.dropdownContainer}
//           textStyle={TextStyle.Task_descp}
//           placeholderStyle={styles.dropdownPlaceholder}
//           selectedItemLabelStyle={styles.selectedItemLabel}
//           zIndex={2000}
//         />

//         {/* Remark Input */}
//         <CustomTextInput
//           placeholder="Remark"
//           value={remark}
//           onChangeText={setRemark}
//           style={styles.input}
//         />

//         {/* Add Button */}
//         <TouchableOpacity onPress={addLead}>
//           <CustomButton title="ADD" customStyle={{ width: '100%' }} textStyles={styles.nextButtonText} />
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexGrow: 1,
//   },
//   input: {
//     marginBottom: 15,
//   },
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#F7F7F7',
//     marginBottom: 15,
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#F7F7F7',
//   },
//   dropdownPlaceholder: {
//     color: '#616161',
//   },
//   selectedItemLabel: {
//     fontWeight: 'bold',
//     color: '#2B2162',
//   },
//   nextButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LeadAdd;