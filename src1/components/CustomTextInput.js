import React from "react";
import { View, TextInput, Image, Pressable } from "react-native";
import InputStyle from "../styles/Inputstyle";
import { useState } from "react";


const CustomTextInput = ({ icon, type, value, onChangeText, placeholder, secureTextEntry }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  return (
    <View style={InputStyle.container}>
      {icon && <Image source={icon} style={InputStyle.icon} />}

      <TextInput
        type={type}
        style={InputStyle.input}
        placeholder={placeholder}
        placeholderTextColor="#616161"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordVisible}
      />
      {secureTextEntry && (
        <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Image source={require('../assets/icons/Hide/hide.png')} style={InputStyle.eyeIcon} />
        </Pressable>
      )}
    </View>
  );
};

export default CustomTextInput;