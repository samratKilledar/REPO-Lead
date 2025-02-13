import React from "react";
import { View, TextInput } from "react-native";
import InputStyle from "../constants/InputStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomTextInput = ({ type ,iconName, value, onChangeText, placeholder }) => {
  return (
    <View style={InputStyle.container}>
      <Icon name={iconName} size={24} style={InputStyle.icon} />
      <TextInput
        type={type}
        style={InputStyle.input}
        placeholder={placeholder}
        placeholderTextColor="#616161"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;