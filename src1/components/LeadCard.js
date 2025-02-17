import React from "react";
import { View, Image,Text,TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LeadCardStyles from "../styles/LeadCardStyles";
import CustomText from "./CustomText";
import TextStyle from "../styles/TextStyle";

const LeadCard = ({ name, phone, dateTime, status, statusGradient ,leadstatus}) => {
  return (
    <View style={LeadCardStyles.cardContainer}>
      <View style={LeadCardStyles.card}>

        <View style={LeadCardStyles.HorLayout}>
          <CustomText text={name} customstyle={TextStyle.nameText} />
          <CustomText text={phone} customstyle={TextStyle.namePhone} />
          <View style={LeadCardStyles.moreCircleDot}>
            <Image source={require("../assets/icons/MoreCircle.png")} style={LeadCardStyles.moreCircleIcon} />
          </View>

        </View>

        <View style={LeadCardStyles.VerLayout}>
          {status && (
            <LinearGradient
              colors={statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={LeadCardStyles.statusBadge}
            >
              <CustomText text={status} customstyle={TextStyle.statusText} />
            </LinearGradient>
          )}
          {leadstatus && (
            <LinearGradient
              colors={statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={LeadCardStyles.leadstatusBadge}
            >
              <CustomText text={leadstatus} customstyle={TextStyle.statusText} />
            </LinearGradient>
          )}
          <CustomText text={dateTime} customstyle={TextStyle.dateTime} />
        </View>
  
      </View>

    </View>
  );
};

export default LeadCard;