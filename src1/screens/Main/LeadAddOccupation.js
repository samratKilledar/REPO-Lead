import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import TextStyle from "../../styles/TextStyle";
import Dropdown from "../../components/Dropdown";
import Stepper from "../../components/StepperComp";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import StatusDropdown from "../../components/StatusDropdown";

const LeadAddOccupation = (props) => {
  const [typeOfWork, setTypeOfWork] = useState("");
  const [type, setType] = useState(null);
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 2;
  const leadLastHandle = () => {
    props.navigation.navigate("LeadLast")
  }
  const goBackCall = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
        <NavigationHeaderBack text="Add Lead" onPress={goBackCall}/>
      </View>
      {/* Stepper Component
      <Stepper steps={steps} currentStep={currentStep} /> */}
      <View style={styles.stepperContainer1}>
        <Stepper steps={steps} currentStep={currentStep} />
      </View>
      <View style={styles.centerContainer}>
        <StatusDropdown
          label="Occupation"
          selectedValue={type}
          onValueChange={setType}
         apiType="occupation" 
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
        <CustomButton title="NEXT" customStyle={{ width: -30 }} onPress={leadLastHandle}/>
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
  stepperContainer1: {
    justifyContent: "space-evenly",
  }
});

export default LeadAddOccupation;