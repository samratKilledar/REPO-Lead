/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import LeadNavigation from './src1/navigation/LeadNavigation'// Adjust the path as needed
// import AppNavigator from './src1/navigation/LeadNavigation';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator/>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import {View} from "react-native";
import StartApp from "./src1/StartApp";

const App=()=>{
  return(
    <View style={{flex:1}}>
          <StartApp/>
    </View>
  )
}

export default App;