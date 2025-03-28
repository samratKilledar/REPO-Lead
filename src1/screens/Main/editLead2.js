import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert , ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Stepper from "../../components/StepperComp";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import StatusDropdown from "../../components/StatusDropdown";
import { updateMonthlyIncome, updateOccupation, updateTypeOfWork ,EditLeadFetch} from "../../redux/actions/editLeadAction";


const EditLead2 = (props) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(EditLeadFetch());
  // }, [dispatch]);

  const occupations = useSelector((state) => state.occupationReducer);

  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 2;
  
  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const { 
    occupation,occupationName,
    typeOfWork,
    monthlyIncome,
    } = useSelector(state => state.editLeadReducer);

    const occupationList= useSelector(state => state.homeReducer);
   // alert(JSON.stringify(occupationList))

   const leadLastHandle = () => {
    const monthlyIncomeStr = String(monthlyIncome || ""); // Ensure it's a string
    
    if (!typeOfWork.trim()) {
      showToast("Type of Work cannot be empty");
      return;
    }
  
    if (!monthlyIncomeStr.trim()) {
      showToast("Monthly Income cannot be empty");
      return;
    }
  
    if (!/^\d+$/.test(monthlyIncomeStr)) {
      showToast("Invalid Input: Monthly Income should contain only numbers");
      return;
    }
  
    const incomeValue = parseInt(monthlyIncomeStr, 10);
    if (incomeValue < 1000 || incomeValue > 10000000) {
      showToast("Monthly Income should be between 1,000 and 1,00,00,000");
      return;
    }
  
    props.navigation.navigate("EditLead3");
  };

  const goBackCall = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
         
        <NavigationHeaderBack text="Edit Lead" onPress={goBackCall} />
       
      </View>

      <View style={styles.stepperContainer1}>
       
        <Stepper steps={steps} currentStep={currentStep} />
       
      </View>

      <View style={styles.centerContainer}>
         
        <StatusDropdown
          label={occupationName}
          selectedValue={occupation}
          onValueChange={(value) => {
            dispatch(updateOccupation(value));
          }}
          apiType="occupation"
          listData={occupationList.occupation}
          zIndex={1000}
        />
       
        <CustomTextInput
          value={typeOfWork}
          placeholder="Type of Work"
          onChangeText={(text) => {
            dispatch(updateTypeOfWork(text));
          }}
        />
       
       
       <CustomTextInput
          value={monthlyIncome}
          placeholder="Monthly Income"
          keyboardType="numeric"
          onChangeText={(text) => {
            if (/^\d*$/.test(text)) {
              dispatch(updateMonthlyIncome(text));
            }
          }}
        />
      
       
        <CustomButton title="NEXT" customStyle={{ width: -30 }} onPress={leadLastHandle} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    gap: 18,
    marginBottom: 50,
  },
  centerContainer: {
    flex: 0.7,
    gap: 12,
    zIndex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  stepperContainer1: {
    justifyContent: "space-evenly",
  },
});

export default EditLead2;