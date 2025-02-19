import React from 'react';
import { View, StyleSheet, Image } from 'react-native'; 

const HeaderComp = ()=>{
    return(
            <View style={styles1.headerstyle}>
            <Image source={require("../assets/images/Frame.png")}  style={styles1.frame}/>
            <View style={styles1.frameimage}>
                <TouchableOpacity onPress={props.onPress} >
                    <Image source={require("../assets/icons/Notification/notification2x.png")}  style={styles1.bell}/>
                </TouchableOpacity>
                <Image source={require("../assets/images/Avatar.png")}  style={styles1.avtar}/>
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



// import React from 'react';
// import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const HeaderComp = ({ navigation }) => {
//   return (
//     <View style={styles1.headerstyle}>
//       <Image source={require("../../assets/images/Frame.png")} style={styles1.frame} />
//       <View style={styles1.frameimage}>
//         <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
//           <Image source={require("../../assets/icons/Notification/notification2x.png")} style={styles1.bell} />
//         </TouchableOpacity>
//         <Image source={require("../../assets/images/Avatar.png")} style={styles1.avtar} />
//       </View>
//     </View>
//   );
// };

// export default HeaderComp;

// const styles1 = StyleSheet.create({
//   headerstyle: {
//     height: 100,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: 10,
//     paddingRight: 24,
//     paddingBottom: 10,
//     paddingLeft: 24,
//   },
//   frame: {
//     width: 86.17,
//     height: 50,
//   },
//   frameimage: {
//     width: 96,
//     height: 48,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 20,
//     marginRight: 2,
//   },
//   bell: {
//     width: 28,
//     height: 28,
//     gap: 20,
//   },
//   avtar: {
//     width: 48,
//     height: 48,
//   },
// });
