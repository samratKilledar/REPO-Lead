import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'; // Import this

import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import UpcomingMeetings from '../screens/Main/UpcomingMeetings';
import UpcomingTask from '../screens/Main/UpcomingTask';
import Notifications from '../screens/Main/Notifications';
import LeadScreen from '../screens/Main/LeadScreen';
import AddFollowUp from '../screens/Main/AddFollowUP';
import EditProfileScreen from '../screens/Main/EditProfileScreen';
import ClientScreen from '../screens/Main/ClientScreen';
import LeadAddService from '../screens/Main/LeadAddServices'
import TaskScreen from '../screens/Main/TaskScreen';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="UpcomingMeetings" component={UpcomingMeetings} />
      <HomeStack.Screen name="UpcomingTask" component={UpcomingTask} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="AddFollowUp" component={AddFollowUp} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </HomeStack.Navigator>
  );
};

const LeadStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
       <HomeStack.Screen name="Lead" component={LeadScreen} />
      <HomeStack.Screen name="AddFollowUp" component={AddFollowUp} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </HomeStack.Navigator>
  );
};


const ClientStackScreen= ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
             <HomeStack.Screen name="Lead" component={LeadScreen} />

       <HomeStack.Screen name="ClientScreen" component={LeadAddService} />
       <HomeStack.Screen name="AddFollowUp" component={AddFollowUp} />
       <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      
    </HomeStack.Navigator>
  );
};

const CustomTabButton = ({ onPress }) => (
  <TouchableOpacity style={styles.plusButton} onPress={onPress}>
    <View style={styles.plusButtonInner}>
      <Image 
        source={require('../assets/icons/Plus/plus.png')}
        style={styles.taskIcon} 
      />
    </View>
  </TouchableOpacity>
);



const MainNavigator = () => {
  return (
  <View style={{flex:1}}>
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        return {
          tabBarShowLabel: false,
          tabBarStyle: routeName === 'Notifications' ? { display: 'none' } : styles.tabBarStyle,
          headerShown: false,
        };
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/HomeBlue/homeBlue.png') 
                              : require('../assets/icons/HomeGray/home.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lead"
        component={LeadStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/LeadLogoBlue/leadLogoBlue.png') 
                              : require('../assets/icons/LeadLogo/leadLogo.png')}
              style={styles.icon}
            />
          ),
        }}
      />
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
        component={ClientStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/ChatBlue/chatBlue.png') 
                              : require('../assets/icons/ClientChat/clientChat.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/TaskBlue/taskBlue.png') 
                              : require('../assets/icons/Task/task.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
    
    // <Tab.Screen name="Home" component={HomeScreen} />
    // <Tab.Screen name="Profile" component={ProfileScreen} />
    // <Tab.Screen name="Settings" component={SettingsScreen} />
    // <Tab.Screen name="Lead" component={LeadScreen} />
    // <Tab.Screen name="Addfollowup" component={AddFollowUp} />
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
  },
  plusButtonInner: {},
  taskIcon: {
    width: 60, 
    height: 60,
    resizeMode: 'contain', 
  },
});

export default MainNavigator;
