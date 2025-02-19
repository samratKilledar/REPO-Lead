import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import HeaderComp from "../../components/HeaderComp";
import CustomTextInput from "../../components/CustomTextInput";
import CustomText from "../../components/CustomText";
import TextStyle from "../../styles/TextStyle";
import LeadCard from "../../components/LeadCard";
import LeadCardStyles from "../../styles/LeadCardStyles";

const ClientScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComp/>
            <View style={styles.inner}>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 24,
    },
    inner: {
        //height: 56,
        gap: 10,
        paddingRight: 24,
        paddingLeft: 24,
      },
});
export default ClientScreen;
