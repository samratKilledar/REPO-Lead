import React from 'react'
import { View, TouchableOpacity, Text} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
const CustomButton = (props) => {
  return (
    <View>
       <TouchableOpacity onPress={props.onPress} style={[ButtonStyles.blueButton, props.customStyle]}>
       <Text style={[ButtonStyles.blueButtonText, props.textStyles]}>{props.title}</Text>
       </TouchableOpacity>   
    </View>
  );
};
export default CustomButton;
