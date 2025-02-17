import React from "react";
import { View, TextInput, Image, Pressable } from "react-native";
import InputStyle from "../styles/Inputstyle";
import { useState } from "react";


<<<<<<< HEAD
const CustomTextInput = ({ icon, followupicon,type, value, onChangeText, placeholder, secureTextEntry,searchbaricon }) => {
=======
const CustomTextInput = ({ followupicon,icon, type, value, onChangeText, placeholder, secureTextEntry }) => {
>>>>>>> leadHome
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
      {searchbaricon && <Image source={searchbaricon} style={InputStyle.searchbaricon}/>}
      <View style={InputStyle.followup}>
      {followupicon && <Image source={followupicon} style={InputStyle.followupicon} />}
      </View>
    </View>
  );
};

export default CustomTextInput;