import React from 'react';
import {View, Text, Pressable} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
const CustomButton = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={[ButtonStyles.blueButton, props.customStyle]}>
        <Text style={[ButtonStyles.blueButtonText, props.textStyles]}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
};
export default CustomButton;
