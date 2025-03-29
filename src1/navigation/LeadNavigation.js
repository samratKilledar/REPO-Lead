import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeadAddservice from '../screens/Main/LeadAddServices' 
import LeadAddPersonal from '../screens/Main/LeadAddPersonal'; 
import LeadAddOccupation from '../screens/Main/LeadAddOccupation'; 
import LeadLast from '../screens/Main/LeadLast'; 

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
        component={LeadLast}
        options={{ title: 'Add Lead' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;