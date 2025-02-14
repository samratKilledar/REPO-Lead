import React from "react";
import { View, Text } from "react-native";
const CustomText = (props) => {
    return (
        <View>
            <Text style={props.customstyle}>{props.text}</Text>
        </View>
    );
};
export default CustomText;