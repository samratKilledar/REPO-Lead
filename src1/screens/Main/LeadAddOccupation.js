import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import TextStyle from "../../styles/TextStyle";
import Dropdown from "../../components/DropDown";
import Stepper from "../../components/StepperComp";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";

const LeadAddOccupation = (props) => {
  const [typeOfWork, setTypeOfWork] = useState("");
  const [type, setType] = useState(null);
  const [monthlyIncome, setMonthlyIncome] = useState("");

  // Define stepper steps
  const steps = [ "Personal", "Occupation", "Services"];
  const currentStep = 2; // Set the current step dynamically based on your logic

  return (
    <View style={styles.container}>
      <View style={{flex:0.1}}>
        <NavigationHeaderBack text="Add Lead"/>
      </View>

      {/* Stepper Component
      <Stepper steps={steps} currentStep={currentStep} /> */}

      <View style={styles.stepperContainer1}>
        <Stepper steps={steps} currentStep={currentStep} />
      </View>


      <View style={styles.centerContainer}>
       
        <Dropdown
          label="Occupation"
          selectedValue={type}
          onValueChange={setType}
          options={[
            { label: "Software Engineer", value: "software_engineer" },
            { label: "Doctor", value: "doctor" },
            { label: "Teacher", value: "teacher" },
            { label: "Business Owner", value: "business_owner" },
            { label: "Freelancer", value: "freelancer" },
          ]}
          zIndex={2000}
        />

        <CustomTextInput
          value={typeOfWork}
          placeholder="Type of Work"
          onChangeText={setTypeOfWork}
        />

        
        <CustomTextInput
          value={monthlyIncome}
          placeholder="Monthly Income"
          onChangeText={setMonthlyIncome}
        />

        <CustomButton title="NEXT" 
        customStyle={{ width: -30 }}
        onPress={() => props.navigation.navigate('LeadLast')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 15,
    gap: 20,
    backgroundColor: "#FFFFFF",

  },
  centerContainer: {
    flex: 0.7,
    gap: 12,
    zIndex: 1,
  },
  stepperContainer1:{
    justifyContent: "space-evenly",
  }


});

export default LeadAddOccupation;


