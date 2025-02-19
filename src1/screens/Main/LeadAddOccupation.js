
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

