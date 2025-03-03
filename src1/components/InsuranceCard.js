import React from "react";
import { View, Image,TouchableOpacity,StyleSheet } from "react-native";
import CustomText from "./CustomText";
import cardstyle from "../styles/cardstyle";
import TextStyle from "../styles/TextStyle";

const InsuranceCard = ({ title, date, description, onDelete }) => {
  return (
    <View style={cardstyle.Insurance}>
      <View style={cardstyle.Inside}>
        <CustomText customstyle={TextStyle.Insurance} text={title} />
        <CustomText customstyle={TextStyle.datesText} text={date} />
        <CustomText customstyle={TextStyle.datesText} text={description} />
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Image source={require('../assets/icons/Delete/delete2x.png')} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default InsuranceCard;

const styles = StyleSheet.create({
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});