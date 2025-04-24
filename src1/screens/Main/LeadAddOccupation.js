import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Stepper from "../../components/StepperComp";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import StatusDropdown from "../../components/StatusDropdown";
import { updateMonthlyIncome, updateOccupation, updateOrganisationName, updateTypeOfWork } from "../../redux/actions/lastAction";

const LeadAddOccupation = (props) => {
  const dispatch = useDispatch();
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 2;

  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const {
    occupation, occupationName, organisationName,
    workType,
    monthlyIncome,
  } = useSelector(state => state.lastReducer);

  const occupationList = useSelector(state => state.homeReducer);

  const leadLastHandle = () => {
    if (!workType || !workType.toString().trim()) {
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


  const [showNewCompanyInput, setshowNewCompanyInput] = useState(false);

  // ✅ Handle Dropdown Selection
  const handleOccupationChange = (value) => {
    console.log('Selected Lead Source:', value);

    if (parseInt(value.id, 10) === 5) {
      setshowNewCompanyInput(true);
      dispatch(updateOccupation(value)); // Keep lead source selection
    } else {
      setshowNewCompanyInput(false);
      dispatch(updateOccupation(value)); // Normal selection
      dispatch(updateOrganisationName('')); // Clear otherSource
    }
  };

  // ✅ Debugging: Check if leadSource updates in Redux
  useEffect(() => {
    console.log('Redux Occupation State Updated:', occupation);
  
    // ✅ Show "Enter Company Name" field if occupation ID is 5 (or required ID)
    if (parseInt(occupation, 10) === 5) {
      setshowNewCompanyInput(true);
    } else {
      setshowNewCompanyInput(false);
    }
  }, [occupation]);
  


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
          onValueChange={handleOccupationChange}
          apiType="occupation"
          listData={occupationList.occupation}
          zIndex={1000}
           searchPlaceholder="Search Occupation"
        />

        {showNewCompanyInput && (
          <CustomTextInput
            placeholder="Enter Company Name"
            value={organisationName} // Bind to Redux
            onChangeText={(text) => {
              dispatch(updateOrganisationName(text)); // Store separately
            }}
          />
        )}

        <CustomTextInput
          value={workType ? workType.toString() : ""}
          placeholder="Type of Work"
          onChangeText={(text) => {
            dispatch(updateTypeOfWork(text));
          }}
        />

        <CustomTextInput
          value={monthlyIncome ? monthlyIncome.toString() : ""}
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
    //marginTop: 10,
    flex: 4.7,
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
    paddingHorizontal: 15,
  },
  stepperContainer1: {
    flex: 0.5,
    justifyContent: 'center', 
    backgroundColor: '#EEF0FF',
    alignItems: 'center', // Ensure full width
  },
});

export default LeadAddOccupation;
