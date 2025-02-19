// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
// import Navigation from '../../components/Navigation';
// import ButtonStyles from '../../styles/ButtonStyles';
// import CustomTextInput from '../../components/CustomTextInput';
// import TextStyle from '../../styles/TextStyle';
// import CustomButton from '../../components/CustomButton';
// import CustomText from '../../components/CustomText';
// import Stepper from '../../components/StepperComp';
// const LeadAdd = () => {
//     const [assignedTo, setAssignedTo] = useState('');
//     const [services, setServices] = useState('');
//     const [remark, setRemark] = useState('');
//     const [date, setDate] = useState(new Date());
//     const [show, setShow] = useState(false);
//     const [mutualFundText, setMutualFundText] = useState("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
    
//     const handleDateChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'ios');
//         setDate(currentDate);
//     };
    
//     const showDatepicker = () => {
//         setShow(true);
//     };
    
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity>
//                     <Text style={styles.headerBack}> &lt; </Text>
//                 </TouchableOpacity>
//                 <Text style={styles.headerTitle}>Add Lead</Text>
//             </View>
            
//             <Stepper steps={["Personal", "Occupation", "Service"]} currentStep={1} />
            
//             <ScrollView contentContainerStyle={styles.content}>
//                 <View style={styles.dropdownContainer}>
//                     <Picker selectedValue={assignedTo} onValueChange={(itemValue) => setAssignedTo(itemValue)} style={styles.dropdown}>
//                         <Picker.Item label="Assign to" value="" />
//                         <Picker.Item label="Option 1" value="option1" />
//                         <Picker.Item label="Option 2" value="option2" />
//                     </Picker>
//                 </View>
                
//                 <View style={styles.dropdownContainer}>
//                     <Picker selectedValue={services} onValueChange={(itemValue) => setServices(itemValue)} style={styles.dropdown}>
//                         <Picker.Item label="Services" value="" />
//                         <Picker.Item label="Service 1" value="service1" />
//                         <Picker.Item label="Service 2" value="service2" />
//                     </Picker>
//                 </View>
                
//                 <CustomTextInput style={styles.input} placeholder="Remark" value={remark} onChangeText={setRemark} multiline={true} numberOfLines={3} />
                
//                 <TouchableOpacity style={styles.datePickerButton} onPress={showDatepicker}>
//                     <Text>{moment(date).format('DD-MM-YYYY')}</Text>
//                 </TouchableOpacity>
                
//                 {show && (
//                     <DateTimePicker testID="dateTimePicker" value={date} mode={'date'} is24Hour={true} display="default" onChange={handleDateChange} />
//                 )}
                
//                 <TouchableOpacity style={styles.addButton}>
//                     <Text style={styles.addButtonText}>Add</Text>
//                 </TouchableOpacity>
                
//                 <View style={styles.mutualFundContainer}>
//                     <Text style={styles.mutualFundTitle}>Mutual Fund</Text>
//                     <Text style={styles.mutualFundDate}>{moment(date).format('DD-MM-YYYY')}</Text>
//                     <CustomTextInput style={styles.mutualFundText} value={mutualFundText} onChangeText={setMutualFundText} multiline={true} />
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#fff' },
//     header: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#a9a9a9', backgroundColor: '#fff' },
//     headerBack: { fontSize: 20, fontWeight: 'bold', color: '#000' },
//     headerTitle: { fontSize: 18, fontWeight: '500', color: '#000', marginLeft: 16 },
//     content: { padding: 16 },
//     dropdownContainer: { marginBottom: 16, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, paddingHorizontal: 8, backgroundColor: '#F5F5F5' },
//     dropdown: { height: 48, color: '#000' },
//     input: { height: 48, borderRadius: 8, borderWidth: 1, borderColor: '#E0E0E0', paddingHorizontal: 16, marginBottom: 16, fontSize: 16, backgroundColor: '#F5F5F5', color: '#000' },
//     datePickerButton: { height: 48, borderRadius: 8, borderWidth: 1, borderColor: '#E0E0E0', paddingHorizontal: 16, marginBottom: 16, justifyContent: 'center', backgroundColor: '#F5F5F5' },
//     addButton: { backgroundColor: '#6730D2', borderRadius: 8, paddingVertical: 12, alignItems: 'center', marginBottom: 16 },
//     addButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
//     mutualFundContainer: { backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8, marginBottom: 16 },
//     mutualFundTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#000' },
//     mutualFundDate: { fontSize: 14, color: '#8A8A8A', marginBottom: 8 },
//     mutualFundText: { height: 80, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 8, textAlignVertical: 'top', backgroundColor: '#fff', color: '#000' }
// });

// export default LeadAdd;

// // Updated with components
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import TextStyle from '../../styles/TextStyle';

// const LeadAddservice = () => {
//     const [services, setServices] = useState('');
//     const [remark, setRemark] = useState('');

//     const handleSubmit = () => {
//         console.log("Services:", services);
//         console.log("Remark:", remark);
//     };

//     return (
//         <View style={styles.container}>
//             {/* Header   Image arrow to be added */}
//             <View style={styles.header}>
//                 <TouchableOpacity>
//                     <Text style={TextStyle.Task_Title}> &lt; </Text>
//                 </TouchableOpacity>
//                 <Text style={TextStyle.Task_Title}>Add Lead</Text>
//             </View>

//             {/* Content */}
//             <ScrollView contentContainerStyle={styles.content}>
//                 {/* Dropdown (Services) */}
//                 <View style={styles.dropdownContainer}>
//                     <Picker
//                         selectedValue={services}
//                         onValueChange={(itemValue) => setServices(itemValue)}
//                         style={styles.dropdown}
//                     >
//                         <Picker.Item label="Services" value="" />
//                         <Picker.Item label="Service 1" value="service1" />
//                         <Picker.Item label="Service 2" value="service2" />
//                     </Picker>
//                 </View>

//                 {/* Remark Input */}
//                 <CustomTextInput
//                     style={styles.input}
//                     placeholder="Remark"
//                     value={remark}
//                     onChangeText={setRemark}
//                     multiline={true}
//                     numberOfLines={3}
//                 />

//                 {/* Submit Button */}
//                 <View style={{ marginTop: 20 }}>
//                   <TouchableOpacity onPress={handleSubmit}>
//                       <CustomButton title="Submit" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//                   </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#FFFFFF' },

//     header: {  //Addlead
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#a9a9a9',
//         backgroundColor: '#fff'
//     },
//     headerBack: { fontSize: 20, fontWeight: 'bold', color: '#000' },
//     headerTitle: { fontSize: 18, fontWeight: '500', color: '#000', marginLeft: 16 },

//     content: { padding: 16 },

//     dropdownContainer: {
//         marginBottom: 20, // Increased margin for better spacing
//         borderWidth: 1,
//         borderColor: '#FAFAFA',
//         borderRadius: 8,
//         paddingHorizontal: 8,
//         paddingVertical: 4, // Added padding to fix alignment issue
//         backgroundColor: '#FAFAFA',
//     },
//     dropdown: { height: 56, color: '#000' }, // Increased height for better visibility

//     input: {
//         height: 48,
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#E0E0E0',
//         paddingHorizontal: 16,
//         marginBottom: 16,
//         fontSize: 16,
//         backgroundColor: '#F5F5F5',
//         color: '#000'
//     },

//     nextButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
// });

// export default LeadAddservice;

// Final Code ---------->
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import TextStyle from "../../styles/TextStyle";
import ButtonStyles from "../../styles/ButtonStyles";

const LeadAddService = () => {
  const [service, setService] = useState(null);
  const [remark, setRemark] = useState("");
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 3;

  // Dropdown states for Services
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceItems, setServiceItems] = useState([
    { label: "Mutual Fund", value: "Mutual Fund" },
    { label: "Insurance", value: "Insurance" },
    { label: "Loans", value: "Loans" },
    { label: "Real Estate", value: "Real Estate" },
  ]);

  const addLeadService = () => {
    console.log("Lead Service Added:", { service, remark });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* Replace manual arrow with Image component */}
          <Image
            source={require("../../assets/icons/Cross/cross.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={TextStyle.Task_Title}>Add Service</Text>
      </View>

      
      {/* Dropdowns & Inputs */}
      <ScrollView contentContainerStyle={styles.inputContainer}>
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
        <TouchableOpacity>
          <CustomButton title="Submit" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
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
    marginBottom: 30,
  },

  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 10,
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

export default LeadAddService;







// Navigation 
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import TextStyle from '../../styles/TextStyle';

// const LeadAddservice = ({ navigation }) => {
//     const [services, setServices] = useState('');
//     const [remark, setRemark] = useState('');

//     const handleSubmit = () => {
//         console.log("Services:", services);
//         console.log("Remark:", remark);
//         navigation.navigate('LeadAddPersonal'); // Navigate to the next screen
//     };

//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Text style={TextStyle.Task_Title}> &lt; </Text>
//                 </TouchableOpacity>
//                 <Text style={TextStyle.Task_Title}>Add Lead</Text>
//             </View>

//             {/* Content */}
//             <ScrollView contentContainerStyle={styles.content}>
//                 {/* Dropdown (Services) */}
//                 <View style={styles.dropdownContainer}>
//                     <Picker
//                         selectedValue={services}
//                         onValueChange={(itemValue) => setServices(itemValue)}
//                         style={styles.dropdown}
//                     >
//                         <Picker.Item label="Services" value="" />
//                         <Picker.Item label="Service 1" value="service1" />
//                         <Picker.Item label="Service 2" value="service2" />
//                     </Picker>
//                 </View>

//                 {/* Remark Input */}
//                 <CustomTextInput
//                     style={styles.input}
//                     placeholder="Remark"
//                     value={remark}
//                     onChangeText={setRemark}
//                     multiline={true}
//                     numberOfLines={3}
//                 />

//                 {/* Submit Button */}
//                 <View style={{ marginTop: 20 }}>
//                   <TouchableOpacity onPress={handleSubmit}>
//                       <CustomButton title="Submit" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//                   </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#FFFFFF' },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#a9a9a9',
//         backgroundColor: '#fff'
//     },
//     content: { padding: 16 },
//     dropdownContainer: {
//         marginBottom: 20,
//         borderWidth: 1,
//         borderColor: '#FAFAFA',
//         borderRadius: 8,
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         backgroundColor: '#FAFAFA',
//     },
//     dropdown: { height: 56, color: '#000' },
//     input: {
//         height: 48,
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#E0E0E0',
//         paddingHorizontal: 16,
//         marginBottom: 16,
//         fontSize: 16,
//         backgroundColor: '#F5F5F5',
//         color: '#000'
//     },
//     nextButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
// });

// export default LeadAddservice;