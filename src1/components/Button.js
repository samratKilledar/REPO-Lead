import React from 'react'
import { View, TouchableOpacity, Text} from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
const Press = (props) => {
  return (
    <View>
       <TouchableOpacity  style={[ButtonStyles.blueButton, props.customStyle]}>
       <Text style={[ButtonStyles.blueButtonText, props.textStyles]}>{props.title}</Text>
       </TouchableOpacity>
       
    </View>
  )
}

export default Press;
