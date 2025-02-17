import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import cardstyle from '../styles/cardstyle';
import TextStyle from '../styles/TextStyle';
import CustomText from './CustomText';

const HoriCardcomp = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.scrollContainer}>
      <View style={cardstyle.project}>
              <View style={{paddingRight:50, padding:10}}>
              <CustomText customstyle={TextStyle.textNum} text = {"1,642"}/>
              <CustomText customstyle={TextStyle.textLabel} text = {"Total Leads"}/>
              </View>
      </View>

      <View style={cardstyle.project}>
              <View style={{paddingRight:50, padding:10}}>
              <CustomText customstyle={TextStyle.textNum} text = {"3,642"}/>
              <CustomText customstyle={TextStyle.textLabel} text = {"Total Clients"}/>
              </View>
      </View>

      <View style={cardstyle.project}>
              <View style={{paddingRight:50, padding:10}}>
              <CustomText customstyle={TextStyle.textNum} text = {"1,041"}/>
              <CustomText customstyle={TextStyle.textLabel} text = {"Total Tasks"}/>
              </View>
      </View>

      <View style={cardstyle.project}>
              <View style={{paddingRight:50, padding:10}}>
              <CustomText customstyle={TextStyle.textNum} text = {"1523"}/>
              <CustomText customstyle={TextStyle.textLabel} text = {"Total Pending"}/>
              </View>
      </View>
    </ScrollView>
  );
};

export default HoriCardcomp;

const style = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    paddingHorizontal: 20, 
  },
  space: {
    gap: 10,
    marginRight: 16, // Space between cards
  },
});
