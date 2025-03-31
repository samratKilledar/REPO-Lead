import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert , ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Stepper from "../../components/StepperComp";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import StatusDropdown from "../../components/StatusDropdown";
import { updateMonthlyIncome, updateOccupation, updateTypeOfWork } from "../../redux/actions/lastAction";

const LeadAddOccupation = (props) => {
  const dispatch = useDispatch();
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 2;
  
  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const { 
    occupation, occupationName,
    typeOfWork,
    monthlyIncome,
  } = useSelector(state => state.lastReducer);

  const occupationList = useSelector(state => state.homeReducer);

  const leadLastHandle = () => {
    if (!typeOfWork.trim()) {
      showToast("Type of Work cannot be empty");
      return;
    }

    if (!monthlyIncome.toString().trim()) {
      showToast("Monthly Income cannot be empty");
      return;
    }

    if (!/^\d+$/.test(monthlyIncome)) {
      showToast("Invalid Input: Monthly Income should contain only numbers");
      return;
    }

    const incomeValue = parseInt(monthlyIncome, 10);
    if (incomeValue < 1000 || incomeValue > 10000000) {
      showToast("Monthly Income should be between 1,000 and 1,00,00,000");
      return;
    }

    if (!occupation) {
      showToast("Select the Occupation");
      return;
    }
    props.navigation.navigate("LeadLast");
  };

  const goBackCall = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
      </View>

      <View style={styles.stepperContainer1}>
        <Stepper steps={steps} currentStep={currentStep} style={{ width: '100%' }} />
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
          value={monthlyIncome.toString()}
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
    backgroundColor: "#FFFFFF",
  },
  centerContainer: {
    marginTop:10,
    flex: 6,
    paddingBottom: 20,
    gap: 10,
    paddingHorizontal: 15,
  },
  stepperContainer1: {
    flex: 0.5,
    justifyContent: 'center', backgroundColor: '#EEF0FF',
    alignItems: 'center', // Ensure full width
  },
});

export default LeadAddOccupation;
