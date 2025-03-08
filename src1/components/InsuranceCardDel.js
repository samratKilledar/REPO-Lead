import React from "react";
import { View, Image,TouchableOpacity,StyleSheet , Dimensions} from "react-native";
import CustomText from "./CustomText";
import cardstyle from "../styles/cardstyle";
import TextStyle from "../styles/TextStyle";

const { width, height } = Dimensions.get('window');
const InsuranceCardDel = ({ title, date, description, onDelete }) => {
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
export default InsuranceCardDel;

const styles = StyleSheet.create({
  deleteButton: {
    position: "absolute",
    top: 15,
    right: 10,
    padding: 8,
  },
  deleteIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "contain",
  },
});