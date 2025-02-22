// NEW ONE 
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const Stepper = ({ steps, currentStep }) => {
//   return (
//     <View style={styles.stepperContainer}>
//       {steps.map((step, index) => {
//         const isActive = index + 1 === currentStep;
//         const isCompleted = index + 1 < currentStep;

//         return (
//           <React.Fragment key={index}>
//             {/* Step Circle and Label */}
//             <View style={styles.stepContainer}>
//               <View
//                 style={[
//                   styles.stepCircle,
//                   isActive && styles.activeStepCircle,
//                   isCompleted && styles.completedStepCircle,
//                 ]}
//               >
//                 <Text
//                   style={[
//                     styles.stepText,
//                     isActive && styles.activeStepText,
//                     isCompleted && styles.completedStepText,
//                   ]}
//                 >
//                   {index + 1}
//                 </Text>
//               </View>
//               <Text
//                 style={[
//                   styles.stepLabel,
//                   isActive && styles.activeStepLabel,
//                   isCompleted && styles.completedStepLabel,
//                 ]}
//               >
//                 {step}
//               </Text>
//             </View>

//             {/* Connecting Line (if not the last step) */}
//             {index !== steps.length - 1 && <View style={styles.stepLine} />}
//           </React.Fragment>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   stepperContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#DFE4FF", // Sky blue background
//     paddingVertical: 22,
//     paddingHorizontal: 18,
//     marginBottom: 15,
//     position: "relative",
//   },

//   stepContainer: {
//     flexDirection: "row", // Align number and text in a column
//     alignItems: "center",
//     zIndex: 1, // Ensure circles are above connecting lines
//   },

//   stepCircle: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: "#FFFFFF", // Default inactive step background
//     borderWidth: 2,
//     borderColor: "#C0C0C0", // Gray border for inactive step
//     justifyContent: "center",
//     alignItems: "center",
//   },
  
//   activeStepCircle: {
//     backgroundColor: "#2E1C67", // Dark blue active step
//     borderColor: "#2E1C67", // Dark blue border
//   },
//   completedStepCircle: {
//     backgroundColor: "#2E1C67", // Dark blue for completed steps
//     borderColor: "#2E1C67", // Dark blue border
//   },
//   stepText: {
//     color: "#C0C0C0", // Gray text for inactive step
//     fontFamily: "Urbanist",
//     fontWeight: "700",
//     fontSize: 14,
//     lineHeight: 19.6,
//   },
//   activeStepText: {
//     color: "#FFFFFF", // White text for active step
//   },
//   completedStepText: {
//     color: "#FFFFFF", // White text for completed step
//   },
//   stepLabel: {
//     fontSize: 14,
//     color: "#A0A0A0", // Light gray for inactive text
//     marginTop: 2, // Add spacing between number and label
//     left: 3,
//   },
  
//   activeStepLabel: {
//     color: "#2B2162", // Dark blue for active label
//     fontWeight: "400",
//   },

//   completedStepLabel: {
//     color: "#2B2162", // Dark blue for completed label
//     fontWeight: "400",
//   },

//   stepLine: {
//     width: 30, // Adjust the length of the connecting line
//     height: 2,
//     backgroundColor: "#C0C0C0",
//     position: "absolute",
//     top: 35, // Adjust to align with the center of the circles
//     left: 108, // Adjust to align with the end of the circle
//     zIndex: 1,
//   },
// });

// export default Stepper;




import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Stepper = ({ steps, currentStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View style={[styles.circle, index + 1 <= currentStep && styles.activeCircle]}>
            <Text style={[styles.stepNumber, index + 1 <= currentStep && styles.activeStepNumber]}>
              {index + 1}
            </Text>
          </View>
          <Text style={[styles.stepLabel, index + 1 <= currentStep && styles.activeStepLabel]}>
            {step}
          </Text>
          {index < steps.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly", // Center the steps
    backgroundColor: '#E4E7F5', // Light blue background    
    paddingVertical: 12,
    marginHorizontal: 1, // Add margin
    marginBottom: 12, // Add margin
  },

  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  circle: {
    width: 30, // Increased size
    height: 30, // Increased size
    borderRadius: 15, // Half of size for circle
    backgroundColor: "#FFFFFF", // White background
    borderWidth: 2,
    borderColor: "#C0C0C0", // Gray border
    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: {
    backgroundColor: '#2E1C67', // Dark blue background
    borderColor: '#2E1C67', // Dark blue border
  },

  stepNumber: {
    color: "#C0C0C0", // Gray text
    fontWeight: "bold",
  },

  activeStepNumber: {
    color: '#FFFFFF', // White text
  },

  stepLabel: {
    fontSize: 14,
    color: '#A0A0A0', // Light gray text
    marginLeft: 6,
  },

  activeStepLabel: {
    color: '#2E1C67', // Dark blue text
    fontWeight: 'bold',
  },
  
  separator: {
    width: 40, // Increased width
    height: 2,
    backgroundColor: '#A0A0A0', // Gray line
    marginHorizontal: 8, // Add margin
  },
});

export default Stepper;