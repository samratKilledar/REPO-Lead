import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeadAddservice from '../screens/Main/LeadAddServices' // Adjust the path as needed
import LeadAddPersonal from '../screens/Main/LeadAddPersonal'; // Adjust the path as needed
import LeadAddOccupation from '../screens/Main/LeadAddOccupation'; // Adjust the path as needed
import LeadAdd from '../screens/Main/LeadLast'; // Adjust the path as needed

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LeadAddservice">
      {/* <Stack.Screen
        name="LeadAddservice"
        component={LeadAddservice}
        options={{ title: 'Add Service' }}
      /> */}

      {/* <Stack.Screen
        name="LeadAddPersonal"
        component={LeadAddPersonal}
        options={{ title: 'Add Personal Details' }}
      /> */}

      {/* <Stack.Screen
        name="LeadAddOccupation"
        component={LeadAddOccupation}
        options={{ title: 'Add Occupation Details' }}
      /> */}

      <Stack.Screen
        name="LeadAdd"
        component={LeadAdd}
        options={{ title: 'Add Lead' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;