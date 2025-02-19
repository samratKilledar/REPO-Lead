// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const Stepper = ({ steps, currentStep }) => {
//   return (
//     <View style={styles.container}>
//       {steps.map((step, index) => {
//         const isActive = index + 1 === currentStep;
//         return (
//           <View key={index} style={styles.stepContainer}>
//             <View style={[styles.circle, isActive && styles.activeCircle]}>
//               <Text style={[styles.stepNumber, isActive && styles.activeStepNumber]}>
//                 {index + 1}
//               </Text>
//             </View>
//             <Text style={[styles.stepLabel, isActive && styles.activeStepLabel]}>
//               {step}
//             </Text>
//             {index < steps.length - 1 && <View style={styles.separator} />}
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E8EAF6",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     justifyContent: "center",
//   },
//   stepContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   circle: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#3F51B5",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   activeCircle: {
//     backgroundColor: "#3F51B5",
//   },
//   stepNumber: {
//     color: "#3F51B5",
//     fontWeight: "bold",
//   },
//   activeStepNumber: {
//     color: "#fff",
//   },
//   stepLabel: {
//     marginLeft: 6,
//     color: "#3F51B5",
//     fontWeight: "400",
//   },
//   activeStepLabel: {
//     fontWeight: "bold",
//   },
//   separator: {
//     width: 20,
//     height: 2,
//     backgroundColor: "#3F51B5",
//     marginHorizontal: 5,
//   },
// });

// export default Stepper;


// NEW ONE 
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Stepper = ({ steps, currentStep }) => {
  return (
    <View style={styles.stepperContainer}>
      {steps.map((step, index) => {
        const isActive = index + 1 === currentStep;
        const isCompleted = index + 1 < currentStep;

        return (
          <React.Fragment key={index}>
            {/* Step Circle and Label */}
            <View style={styles.stepContainer}>
              <View
                style={[
                  styles.stepCircle,
                  isActive && styles.activeStepCircle,
                  isCompleted && styles.completedStepCircle,
                ]}
              >
                <Text
                  style={[
                    styles.stepText,
                    isActive && styles.activeStepText,
                    isCompleted && styles.completedStepText,
                  ]}
                >
                  {index + 1}
                </Text>
              </View>
              <Text
                style={[
                  styles.stepLabel,
                  isActive && styles.activeStepLabel,
                  isCompleted && styles.completedStepLabel,
                ]}
              >
                {step}
              </Text>
            </View>

            {/* Connecting Line (if not the last step) */}
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.connectingLine,
                  isCompleted && styles.completedLine,
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#DFE4FF", // Sky blue background
    paddingVertical: 16,
    // borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
    position: "relative",
  },
  stepContainer: {
    alignItems: "center",
    zIndex: 1, // Ensure circles are above connecting lines
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF", // Default inactive step background
    borderWidth: 2,
    borderColor: "#C0C0C0", // Gray border for inactive step
    justifyContent: "center",
    alignItems: "center",
  },
  activeStepCircle: {
    backgroundColor: "#2E1C67", // Dark blue active step
    borderColor: "#2E1C67", // Dark blue border
  },
  completedStepCircle: {
    backgroundColor: "#2E1C67", // Dark blue for completed steps
    borderColor: "#2E1C67", // Dark blue border
  },
  stepText: {
    color: "#C0C0C0", // Gray text for inactive step
    fontfamily: "Urbanist",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 19.6,

  },
  activeStepText: {
    color: "#FFFFFF", // White text for active step
  },
  completedStepText: {
    color: "#FFFFFF", // White text for completed step
  },
  stepLabel: {
    fontSize: 14,
    color: "#A0A0A0", // Light gray for inactive text
    marginTop: 4,
  },
  activeStepLabel: {
    color: "#2B2162", // Dark blue for active label
    fontWeight: "400",
  },
  completedStepLabel: {
    color: "#2B2162", // Dark blue for completed label
    fontWeight: "400",
  },
  // connectingLine: {
  //   position: "absolute",
  //   top: "50%", // Center vertically
  //   height: 2,
  //   backgroundColor: "#C0C0C0", // Gray for incomplete steps
  //   width: "20%", // Adjust based on the number of steps
  //   zIndex: 0, // Ensure lines are below circles
  // },
  completedLine: {
    backgroundColor: "#2B2162", // Dark blue for completed steps
  },
});

export default Stepper;



// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const Stepper = ({ steps, currentStep }) => {
//   return (
//     <View style={styles.container}>
//       {steps.map((step, index) => (
//         <View key={index} style={styles.stepContainer}>
//           <View style={[styles.circle, index + 1 <= currentStep && styles.activeCircle]}>
//             <Text style={[styles.stepNumber, index + 1 <= currentStep && styles.activeStepNumber]}>
//               {index + 1}
//             </Text>
//           </View>
//           <Text style={[styles.stepLabel, index + 1 <= currentStep && styles.activeStepLabel]}>
//             {step}
//           </Text>
//           {index < steps.length - 1 && <View style={styles.separator} />}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: 'center', // Center the steps
//     backgroundColor: '#E4E7F5', // Light blue background    
//     paddingVertical: 12,
//     borderRadius: 10,
//     marginHorizontal: 16, // Add margin
//     marginBottom: 20, // Add margin
//   },
//   stepContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   circle: {
//     width: 30, // Increased size
//     height: 30, // Increased size
//     borderRadius: 15, // Half of size for circle
//     backgroundColor: "#FFFFFF", // White background
//     borderWidth: 2,
//     borderColor: "#C0C0C0", // Gray border
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   activeCircle: {
//     backgroundColor: '#2E1C67', // Dark blue background
//     borderColor: '#2E1C67', // Dark blue border
//   },
//   stepNumber: {
//     color: "#C0C0C0", // Gray text
//     fontWeight: "bold",
//   },
//   activeStepNumber: {
//     color: '#FFFFFF', // White text
//   },
//   stepLabel: {
//     fontSize: 14,
//     color: '#A0A0A0', // Light gray text
//     marginLeft: 6,
//   },
//   activeStepLabel: {
//     color: '#2E1C67', // Dark blue text
//     fontWeight: 'bold',
//   },
//   separator: {
//     width: 40, // Increased width
//     height: 2,
//     backgroundColor: '#A0A0A0', // Gray line
//     marginHorizontal: 8, // Add margin
//   },
// });

// export default Stepper;