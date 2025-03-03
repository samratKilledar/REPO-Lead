import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import cardstyle from '../styles/cardstyle';
import TextStyle from '../styles/TextStyle';
import CustomText from './CustomText';

const { width } = Dimensions.get('window');

const RectCardcomp = ({ props, onPress, navigation }) => {
  return (
    <View>
      {props.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress({ navigation })}
        >
          <View style={style.Frame1}>
            <View style={[cardstyle.task, { width: width - 40 }]}> {/* Fixed width for the card */}
              <View style={[cardstyle.Vertical, { flex: 1 }]}> {/* Allow text container to take remaining space */}
                <CustomText customstyle={TextStyle.cardname} text={item.name} />
                <CustomText customstyle={TextStyle.cardnum} text={item.phone} />
                <CustomText customstyle={TextStyle.carddate} text={item.dateTime} />
              </View>
              <View style={style.arrowcentre}>
                <Image
                  source={require("../assets/icons/ArrowNext.png")}
                  style={[cardstyle.arrow, { width: 24, height: 24 }]} // Fixed arrow size
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
    justifyContent: "center",
    marginLeft: 10, // Add margin to separate arrow from text
  },
});