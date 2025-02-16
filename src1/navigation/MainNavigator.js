import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import LeadScreen from '../screens/Main/LeadScreen';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ onPress }) => (
  <TouchableOpacity style={styles.plusButton} onPress={onPress}>
    <View style={styles.plusButtonInner}>
      <Image 
        source={require('../assets/icons/Plus/plus.png')} // Replaced with your Task image
        style={styles.taskIcon} 
      />
    </View>
  </TouchableOpacity>
);

const MainNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/HomeBlue/homeBlue.png') // Active Icon
                  : require('../assets/icons/HomeGray/home.png') // Inactive Icon
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lead"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/LeadLogoBlue/leadLogoBlue.png')
                  : require('../assets/icons/LeadLogo/leadLogo.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
      
      {/* Center Floating AddTask Button with Task Image */}
      <Tab.Screen
        name="AddTask"
        component={ProfileScreen} 
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props} onPress={() => navigation.navigate('AddTask')} />
          ),
        }}
      />

      <Tab.Screen
        name="Client"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/ChatBlue/chatBlue.png')
                  : require('../assets/icons/ClientChat/clientChat.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/TaskBlue/taskBlue.png')
                  : require('../assets/icons/Task/task.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: 70, 
    paddingBottom: 5, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    width: 25, 
    height: 25, 
    resizeMode: 'contain', 
    marginBottom: -5, 
  },
  plusButton: {
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 70, 
    // height: 70,
    // borderRadius: 35,
   
  },
  plusButtonInner: {
    // width: 60,
    // height: 60,
    // borderRadius: 30,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  taskIcon: {
    width: 60, 
    height: 60,
    resizeMode: 'contain', 
  },
});

export default MainNavigator;
