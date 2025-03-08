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
          {index < steps.length - 1 && (
            <View style={[
              styles.separator,
              index + 1 < currentStep && styles.activeSeparator
          ]}/>
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
    justifyContent: "space-evenly",
    backgroundColor: '#EEF0FF',
    paddingVertical: 18,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 15,
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
  },
  activeStepNumber: {
    color: '#FFFFFF',
  },
  stepLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },
  activeStepLabel: {
    color: '#2F1C6A',
    fontWeight: 'bold',
  },
  separator: {
    width: 20,
    height: 1,
    backgroundColor: '#2F1C6A',
    marginHorizontal: 21,
  },
  activeSeparator: {
    backgroundColor: '#2F1C6A',
  },
});

export default Stepper;