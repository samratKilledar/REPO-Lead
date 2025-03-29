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
//           {index < steps.length - 1 && (
//             <View style={[
//               styles.separator,
//               index + 1 < currentStep && styles.activeSeparator
//           ]}/>
//           )}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     alignContent:"center",
//     justifyContent: "space-between",
//     backgroundColor: '#EEF0FF',
//     paddingVertical: 18,
//     // paddingHorizontal: 8,
//     marginBottom: 12,
//     // margin:2
//   },
//   stepContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex:1, 
//   },
//   circle: {
//     width: 24,
//     height: 24,
//     borderRadius: 15,
//     backgroundColor: "#FFFFFF",
//     borderWidth: 2,
//     borderColor: "#C0C0C0",
//     justifyContent: "center",
//     alignItems: "center",
//     margin:10
//   },
//   activeCircle: {
//     backgroundColor: '#2F1C6A',
//     borderColor: '#2F1C6A',
//   },
//   stepNumber: {
//     color: "#6B7280",
//     fontWeight: "bold",
//   },
//   activeStepNumber: {
//     color: '#FFFFFF',
//   },
//   stepLabel: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginLeft: 3,
//   },
//   activeStepLabel: {
//     color: '#2F1C6A',
//     fontWeight: 'bold',
//   },
//   separator: {
//     width: 20,
//     height: 1,flex:1,
//     backgroundColor: '#2F1C6A',
//     marginHorizontal: 10,
//   },
//   activeSeparator: {
//     backgroundColor: '#2F1C6A',
//   },
// });

// export default Stepper;


import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
          {index < steps.length - 1 && (
            <View style={[styles.separator, index + 1 < currentStep && styles.activeSeparator]} />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#EEF0FF',
    padding: 10,
    flexWrap: "nowrap", // Ensures it stays in a single line
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: width * 0.03,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    backgroundColor: '#2F1C6A',
    borderColor: '#2F1C6A',
  },
  stepNumber: {
    color: "#6B7280",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  activeStepNumber: {
    color: '#FFFFFF',
  },
  stepLabel: {
    fontSize: width * 0.035,
    color: '#6B7280',
    marginLeft: 6,
  },
  activeStepLabel: {
    color: '#2F1C6A',
    fontWeight: 'bold',
  },
  separator: {
    width: width * 0.1,
    height: 2,
    backgroundColor: '#C0C0C0',
    marginHorizontal: width * 0.02,
  },
  activeSeparator: {
    backgroundColor: '#2F1C6A',
  },
});

export default Stepper;
