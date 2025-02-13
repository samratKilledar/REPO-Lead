import React from "react";
import {View ,Text} from "react-native";
import TextStyle from "../styles/TextStyle";
const Text = (props) => {
    return(
    <View>
    <Text style={props.customstyle}>{props.text}</Text>
    </View>
    );
};
export default Text;