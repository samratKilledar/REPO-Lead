import { View, ScrollView, StyleSheet } from 'react-native';
import Navigation from '../../components/NavigationHeaderBack.js';
import CustomText from '../../components/CustomText.js';
import TextStyle from '../../styles/TextStyle.js';
import { Text } from 'react-native';


const TodayName = [
  { name: "Jacob Jones", message: "Leave a comment on the ", app: "Tiki App" },
  { name: "Jenny Wilson", message: "Adding a task to the ", app: "3D Design" },
  { name: "Wade Warren", message: "Have been invited to the project", app: "" },
];

const YesterdayNames = [
  { name: "Guy Hawkins", message: "Adding a task to the ", app: "NFT App" },
  { name: "Kathryn Murphy", message: "Have been invited to the project", app: "" },
  { name: "Eleanor Pena", message: "Leave a comment on the ", app: "Job App" },
];

const DateName = [
  { name: "Marvin McKinney", message: "Have been invited to the project", app: "" },
  { name: "Dianne Russell", message: "Leave a comment on the ", app: "Tiki App" },
];


const Notifications = (props) => {
  const goBackCall = () => {
    props.navigation.goBack();
  };
  return (
    <View style={{ flex: 1 , paddingTop: 12, gap: 24,}}>
        <View style={{flex:0.3}}>
        <Navigation text={"Notifications"}  onPress={goBackCall}/>
      </View>
      <View style={{flex:8}}>
    <ScrollView style={style.container1} showsVerticalScrollIndicator={false}>
      <View style={style.container}>

        {/* Today Header */}
        <View style={style.container2}>
          <CustomText customstyle={TextStyle.notificationtext} text={"Today"} />
        </View>

        {/* Loop through notifications */}
        {TodayName.map((item, index) => (
          <View key={index} style={style.container3}>
            <CustomText customstyle={TextStyle.notificationtext} text={item.name} />
            <Text style={TextStyle.notificationtext1}>
              {item.message}
              {item.app ? <Text style={TextStyle.boldText}>{item.app}</Text> : null}
            </Text>
          </View>
        ))}

        {/* Yesterday Header */}
        <View style={style.container2}>
          <CustomText customstyle={TextStyle.notificationtext} text={"Yesterday"} />
        </View>

      {/* Loop through notifications */}
      {YesterdayNames.map((item, index) => (
        <View key={index} style={style.container3}>
          <CustomText customstyle={TextStyle.notificationtext} text={item.name} />
          <Text style={TextStyle.notificationtext1}>
            {item.message}
            {item.app ? <Text style={TextStyle.boldText}>{item.app}</Text> : null}
          </Text>
        </View>
      ))}


        {/* Date Header */}
        <View style={style.container2}>
          <CustomText customstyle={TextStyle.notificationtext} text={"January 21,2025"} />
        </View>

        {DateName.map((item, index) => (
        <View key={index} style={style.container3}>
          <CustomText customstyle={TextStyle.notificationtext} text={item.name} />
          <Text style={TextStyle.notificationtext1}>
            {item.message}
            {item.app ? <Text style={TextStyle.boldText}>{item.app}</Text> : null}
          </Text>
        </View>
      ))}

    </View>
    </ScrollView>
    </View>
  </View>
  );
};

export default Notifications;

const style = StyleSheet.create({
  container: {
    top: 15,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 24,
  },
  container1: {
    flex: 1,
  },
  container2: {
    paddingRight: 24,
    paddingLeft: 24,
    gap: 24,
    marginBottom: 10,
  },
  container3: {
    paddingRight: 24,
    paddingLeft: 24,
    gap: 12,
    marginBottom: 10,
  },
});



// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Notifications = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const hideTabBar = () => navigation.setOptions({ tabBarStyle: { display: 'none' } });
//     const showTabBar = () => navigation.setOptions({ tabBarStyle: undefined });

//     // Hide tab bar when entering
//     hideTabBar();

//     return () => {
//       // Show tab bar when leaving
//       showTabBar();
//     };
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Notifications Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// export default Notifications;
