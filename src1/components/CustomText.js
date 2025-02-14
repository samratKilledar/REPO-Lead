import React from "react";
import { Text, View } from "react-native";
const CustomText = (props) => {
    return (
        <View>
            <Text style={props.customstyle}>{props.text}</Text>
        </View>
    );
};
export default CustomText;