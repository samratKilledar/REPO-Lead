import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity, Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');

const HeaderComp = ({navigation})=>{

  
    return(
            <View style={styles1.headerstyle}>
            <Image source={require("../assets/images/Frame.png")}  style={styles1.frame}/>
            <View style={styles1.frameimage}>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} >
                    <Image source={require("../assets/icons/Notification/notification2x.png")}  style={styles1.bell}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LogoutScreen')}>
                <Image source={require("../assets/images/Avatar.png")}  style={styles1.avtar}/>
                </TouchableOpacity>
            </View>
            </View> 
    );
};
export default HeaderComp;

const styles1 = StyleSheet.create({

    headerstyle:{
       // width: 428,
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingRight: 24,
        paddingBottom: 10,
        paddingLeft: 24,
    },
    frame :{
      width: 86.17,
      height: 50,
    },
    frameimage :{
        width: 96,
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginRight: 2,
    },
    bell :{
        width: 28,
        height: 28,
        gap: 20,
    },
    avtar:{
        width: 48,
        height: 48,
    },
});