/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text} from "react-native";
import StartApp from "./src1/StartApp";
import LeadScreen from './src1/screens/Main/LeadScreen';

const App=()=>{
  return(
    <View style={{flex:1}}>
          {/* <StartApp/> */}
          <LeadScreen/>
    </View>
  )
}

export default App;