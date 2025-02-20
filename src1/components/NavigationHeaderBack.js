import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import TextStyle from '../styles/TextStyle';

const NavigationHeaderBack=(props)=>{

return (
<View style={styles.navHeader}>
        <TouchableOpacity onPress={props.onPress} style={styles.backButton}>
          <Image 
            source={require('../assets/icons/Arrow.png')} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <CustomText type="header" text={props.text} customstyle={TextStyle.Titles}/> 
      </View>
);
};

const styles = StyleSheet.create({
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1
      },

    arrowIcon: {
        width: 30,
        height: 30,
        marginLeft:20
      },

    iconStyle: {
        width: 24,
        height: 24,
        marginLeft:10,
        resizeMode: 'contain',
        tintColor: 'black',
      },

    });

    export default NavigationHeaderBack;