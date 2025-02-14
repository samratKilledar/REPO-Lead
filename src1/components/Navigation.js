import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../components/CustomText';
import TextStyle from '../styles/TextStyle';
const Navigation=(props)=>{
return (
<View style={styles.navHeader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
          <Image 
            source={require('../assets/icons/Arrow.png')} // Ensure this file exists
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <CustomText type="header" text="Forgot Password" customstyle={TextStyle.Titles}/> 
      </View>
);
};

const styles = StyleSheet.create({
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 48,
        gap: 12,
      },

    arrowIcon: {
        width: 30,
        height: 30,
      },

    iconStyle: {
        width: 24,
        height: 24,
        marginLeft:10,
        resizeMode: 'contain',
        tintColor: 'black',
      },

    });

    export default Navigation;