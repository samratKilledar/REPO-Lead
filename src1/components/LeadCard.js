import React from "react";
import { View, Image,Text,TouchableOpacity,StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./CustomText";
import TextStyle from "../styles/TextStyle";

const LeadCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>

        <View style={styles.HorLayout}>
          <CustomText text={props.name} customstyle={TextStyle.nameText} />
          <CustomText text={props.phone} customstyle={TextStyle.namePhone} />
          <View style={styles.moreCircleDot}>
            <Image source={require("../assets/icons/MoreCircle.png")} style={styles.moreCircleIcon} />
          </View>

        </View>

        <View style={styles.VerLayout}>
          {props.status && (
            <LinearGradient
              colors={props.statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.statusBadge}
            >
              <CustomText text={props.status} customstyle={TextStyle.statusText} />
            </LinearGradient>
          )}
          {props.leadstatus && (
            <LinearGradient
              colors={props.statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.leadstatusBadge}
            >
              <CustomText text={props.leadstatus} customstyle={TextStyle.statusText} />
            </LinearGradient>
          )}
          <CustomText text={props.dateTime} customstyle={TextStyle.dateTime} />
        </View>
  
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // width: 380,
    // height: 150,
    //flex: 1,
    gap: 24,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 24,

},
card: {
    // width: 380,
    //height: 164,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    shadowColor: '#04060F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 60,
    //elevation: 4,
    padding: 24, 
    gap: 24, 
},
HorLayout: {
    // width: 324,
    //height: 52,
    gap: 10, 
    //backgroundColor: "pink",

},
VerLayout: {
    // width: 324,
    //height: 32,
    gap: 10,
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "flex-end", 
    //backgroundColor: "pink",
},

statusBadge: {
    //width: 98,
   // height: 32,
    borderRadius: 100,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    gap: 4,
},
moreCircleDot: {
    position: "absolute",
    top: 1,
    right: 1,
    width: 24,  
    height: 24,
},
moreCircleIcon: {
    width: 24,   
    height: 24,
    resizeMode: "contain", 
},
leadstatusBadge: {
    //width: 159,
    //height: 32,
    borderRadius: 100,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    gap: 4,
},
});
export default LeadCard;