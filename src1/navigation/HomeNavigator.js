// AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { creatNativeStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Main/HomeScreen';
import UpcomingMeetings from '../screens/Main/UpcomingMeetings'; // Ensure this path is correct
import UpcomingTask from '../screens/Main/UpcomingTask'; // Ensure this path is correct
import Notifications from '../screens/Main/Notifications'; // Ensure this path is correct

const Stack = creatNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UpcomingMeetings" component={UpcomingMeetings} />
        <Stack.Screen name="UpcomingTask" component={UpcomingTask} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;