import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Dropdown from "../../components/Dropdown";
import Stepper from "../../components/StepperComp";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import StatusDropdown from "../../components/StatusDropdown";
import { updateMonthlyIncome, updateOccupation, updateTypeOfWork } from "../../redux/actions/lastAction";


const LeadAddOccupation = (props) => {
  const dispatch = useDispatch();
  const occupations = useSelector((state) => state.occupationReducer);

  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 2;

  const { 
    occupation,
    typeOfWork,
    monthlyIncome,
    } = useSelector(state => state.lastReducer);

    const occupationList= useSelector(state => state.homeReducer);
    alert(JSON.stringify(occupationList))
    
  const leadLastHandle = () => {
    if (!/^[0-9]*$/.test(monthlyIncome)) {
      Alert.alert("Invalid Input", "Monthly Income should contain only numbers");
      return;
    }
    props.navigation.navigate("LeadLast");
  };

  const goBackCall = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
         
        <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
       
      </View>

      <View style={styles.stepperContainer1}>
       
        <Stepper steps={steps} currentStep={currentStep} />
       
      </View>

      <View style={styles.centerContainer}>
         
        <StatusDropdown
          label="Occupation"
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
          onChangeText={(text) => {
            if (/^[0-9]*$/.test(text) || text === "") {
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

export default LeadAddOccupation;


// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Alert , ToastAndroid } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import CustomButton from "../../components/CustomButton";
// import CustomTextInput from "../../components/CustomTextInput";
// import Dropdown from "../../components/Dropdown";
// import Stepper from "../../components/StepperComp";
// import NavigationHeaderBack from "../../components/NavigationHeaderBack";
// import StatusDropdown from "../../components/StatusDropdown";
// import { updateMonthlyIncome, updateOccupation, updateTypeOfWork } from "../../redux/actions/lastAction";


// const LeadAddOccupation = (props) => {
//   const dispatch = useDispatch();
//   const occupations = useSelector((state) => state.occupationReducer);

//   const steps = ["Personal", "Occupation", "Services"];
//   const currentStep = 2;
  
//   const showToast = (message) => {
//     ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
//   };

//   const { 
//     occupation,
//     typeOfWork,
//     monthlyIncome,
//     } = useSelector(state => state.lastReducer);

//     const occupationList= useSelector(state => state.homeReducer);
//     alert(JSON.stringify(occupationList))

//     const leadLastHandle = () => 
//       {
//         if (!typeOfWork.trim()) {
//           showToast("Type of Work cannot be empty");
//           return;
//         }
    
//         if (!monthlyIncome.trim()) {
//           showToast("Monthly Income cannot be empty");
//           return;
//         }
    
//         if (!/^\d+$/.test(monthlyIncome)) {
//           showToast("Invalid Input: Monthly Income should contain only numbers");
//           return;
//         }
    
//         // Optional: Check if income is within a valid range
//         const incomeValue = parseInt(monthlyIncome, 10);
//         if (incomeValue < 1000 || incomeValue > 10000000) {
//           showToast("Monthly Income should be between 1,000 and 1,00,00,000");
//           return;
//         }
    
//         props.navigation.navigate("LeadLast");
//       };

//   const goBackCall = () => {
//     props.navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.1 }}>
         
//         <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
       
//       </View>

//       <View style={styles.stepperContainer1}>
       
//         <Stepper steps={steps} currentStep={currentStep} />
       
//       </View>

//       <View style={styles.centerContainer}>
         
//         <StatusDropdown
//           label="Occupation"
//           selectedValue={occupation}
//           onValueChange={(value) => {
//             dispatch(updateOccupation(value));
//           }}
//           apiType="occupation"
//           listData={occupationList.occupation}
//           zIndex={1000}
//         />
       
//         <CustomTextInput
//           value={typeOfWork}
//           placeholder="Type of Work"
//           onChangeText={(text) => {
//             dispatch(updateTypeOfWork(text));
//           }}
//         />
       
       
//        <CustomTextInput
//           value={monthlyIncome}
//           placeholder="Monthly Income"
//           keyboardType="numeric"
//           onChangeText={(text) => {
//             if (/^\d*$/.test(text)) {
//               dispatch(updateMonthlyIncome(text));
//             }
//           }}
//         />
      
       
//         <CustomButton title="NEXT" customStyle={{ width: -30 }} onPress={leadLastHandle} />
        
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     backgroundColor: "#FFFFFF",
//     gap: 18,
//     marginBottom: 50,
//   },
//   centerContainer: {
//     flex: 0.7,
//     gap: 12,
//     zIndex: 1,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   stepperContainer1: {
//     justifyContent: "space-evenly",
//   },
// });

// export default LeadAddOccupation;
