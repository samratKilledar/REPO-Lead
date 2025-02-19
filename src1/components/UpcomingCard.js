import React from 'react';
import { View } from 'react-native';
import cardstyle from '../styles/cardstyle';
import CustomText from './CustomText';
import TextStyle from '../styles/TextStyle';

const Card = () => {
  return (
    <View style={cardstyle.task}>
      <View style={cardstyle.Vertical}>
            <CustomText style={TextStyle.cardname} text={"Barbara Moore"} />
            <CustomText style={TextStyle.cardnum} text={"+91 9876543210"} />
            <CustomText style={TextStyle.carddate} text={"02 Feb 2025 - 12:00 PM"} />
      </View>
    </View>
  );
};

export default Card;
