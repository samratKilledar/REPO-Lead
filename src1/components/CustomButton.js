import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[ButtonStyles.blueButton, props.customStyle]}>
        <Text style={[ButtonStyles.blueButtonText, props.textStyles]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;
