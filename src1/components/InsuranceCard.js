import React from "react";
import { View, Image } from "react-native";
import CustomText from "./CustomText";
import cardstyle from "../styles/cardstyle";
import TextStyle from "../styles/TextStyle";

const InsuranceCard = ({ title, date, description, onDelete }) => {
  return (
    <View style={cardstyle.Insurance}>
      <Image
        source={require("../assets/icons/Delete/delete2x.png")}
        style={cardstyle.Delete}
      />
      <View style={cardstyle.Inside}>
        <CustomText customstyle={TextStyle.Insurance} text={title} />
        <CustomText customstyle={TextStyle.datesText} text={date} />
        <CustomText customstyle={TextStyle.datesText} text={description} />
      </View>
    </View>
  );
};

export default InsuranceCard;
