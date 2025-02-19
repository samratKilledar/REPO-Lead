/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text} from "react-native";
import StartApp from "./src1/StartApp";
import LeadAddServices from './src1/screens/Main/LeadAddServices';
import LeadAddPersonal from './src1/screens/Main/LeadAddPersonal';
import LeadAddOccupation from './src1/screens/Main/LeadAddOccupation';
import LeadLast from './src1/screens/Main/LeadLast';
const App=()=>{
  return(
    <View style={{flex:1}}>
      {/* <StartApp/> */}
      {/* <LeadAddServices/>  DONE    */}
       {/* <LeadAddPersonal></LeadAddPersonal> remain the spaces  */}
      {/* <LeadAddOccupation></LeadAddOccupation> require stepper improve  & Done  */}
      {/* <LeadLast></LeadLast>   DONE  */}
   </View>
  )
}

export default App;


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