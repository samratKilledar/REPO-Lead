import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Dropdown = ({ options, selectedValue, onValueChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.dropdown}
        dropdownIconColor="#000" // Customize dropdown icon color
      >
        <Picker.Item label={placeholder} value="" />
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    marginBottom: 20,
  },
  dropdown: {
    height: 56,
    color: "#000",
  },
});

export default Dropdown;