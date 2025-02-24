import React from "react";
import { View, TextInput, Image, Pressable } from "react-native";
import InputStyle from "../styles/Inputstyle";
import { useState } from "react";


const CustomTextInput = ({ icon, followupicon,type, value, onChangeText, placeholder, secureTextEntry,searchbaricon }) => {
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
        <Image
          source={
            isPasswordVisible
              ? require("../assets/icons/Hide/hide.png") 
              : require("../assets/icons/Unhide/unhide.png") 
          }
          style={InputStyle.eyeIcon}
        />
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