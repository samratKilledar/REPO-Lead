import React from 'react';
import {View, Text} from 'react-native';

const CustomText = ({customstyle, text, maxWords = 30}) => {
  // const words = text.split(" ");
  return (
    <View>
      {text == undefined || text == '' ? (
        <></>
      ) : (
        <Text
          style={customstyle}
          numberOfLines={text.length > maxWords ? 1 : undefined}
          ellipsizeMode={text.length > maxWords ? 'tail' : 'clip'}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default CustomText;
