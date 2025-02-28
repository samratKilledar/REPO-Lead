// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import CustomButton from "../../components/CustomButton";
// import CustomTextInput from "../../components/CustomTextInput";
// import TextStyle from "../../styles/TextStyle";
// import Dropdown from "../../components/Dropdown";
// import Stepper from "../../components/StepperComp";
// import NavigationHeaderBack from "../../components/NavigationHeaderBack";

// const LeadAddOccupation = (props) => {
//   const [typeOfWork, setTypeOfWork] = useState("");
//   const [type, setType] = useState(null);
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const steps = ["Personal", "Occupation", "Services"];
//   const currentStep = 2;

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.1 }}>
//         <NavigationHeaderBack text="Add Lead" />
//       </View>
//       {/* Stepper Component
//       <Stepper steps={steps} currentStep={currentStep} /> */}
//       <View style={styles.stepperContainer1}>
//         <Stepper steps={steps} currentStep={currentStep} />
//       </View>
//       <View style={styles.centerContainer}>
//         <Dropdown
//           label="Occupation"
//           selectedValue={type}
//           onValueChange={setType}
//           options={[
//             { label: "Software Engineer", value: "software_engineer" },
//             { label: "Doctor", value: "doctor" },
//             { label: "Teacher", value: "teacher" },
//             { label: "Business Owner", value: "business_owner" },
//             { label: "Freelancer", value: "freelancer" },
//           ]}
//           zIndex={2000}
//         />
//         <CustomTextInput
//           value={typeOfWork}
//           placeholder="Type of Work"
//           onChangeText={setTypeOfWork}
//         />
//         <CustomTextInput
//           value={monthlyIncome}
//           placeholder="Monthly Income"
//           onChangeText={setMonthlyIncome}
//         />
//         <CustomButton title="NEXT" customStyle={{ width: -30 }} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   //  paddingHorizontal: 24,
//     paddingTop: 15,
//     backgroundColor: "#FFFFFF",
//     gap: 18,
//     marginBottom: 50,
//   },
//   centerContainer: {
//     flex: 0.7,
//     gap: 12,
//     zIndex: 1,
//     paddingLeft:20,
//     paddingRight:20,
//   },
//   stepperContainer1: {
//     justifyContent: "space-evenly",
    
//   }
// });

// export default LeadAddOccupation;


import React , { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
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
          onChangeText={(text) => dispatch(updateTypeOfWork(text))}
        />

        <CustomTextInput
          value={monthlyIncome}
          placeholder="Monthly Income"
          onChangeText={(text) => dispatch(updateMonthlyIncome(text))}
        />
        <CustomButton title="NEXT" customStyle={{ width: -30 }} onPress={leadLastHandle}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
