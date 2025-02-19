import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import cardstyle from '../styles/cardstyle';
import TextStyle from '../styles/TextStyle';
import CustomText from './CustomText';

const RectCardcomp = ({ props }) => {
  return (
    <View>
      {props.map((item, index) => (
        <View key={index} style={style.Frame1}>
          <View style={cardstyle.task}>
            <View style={cardstyle.Vertical}>
              <CustomText customstyle={TextStyle.cardname} text={item.name} />
              <CustomText customstyle={TextStyle.cardnum} text={item.phone} />
              <CustomText customstyle={TextStyle.carddate} text={item.dateTime} />
            </View>
            <View style={style.arrowcentre}>
              <Image source={require("../assets/icons/ArrowNext.png")} style={cardstyle.arrow} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RectCardcomp;

const style = StyleSheet.create({
  Frame1: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  arrowcentre: {
    alignItems: "center",
    justifyContent: "center",
  },
});