/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text} from "react-native";
import StartApp from "./src1/StartApp";
import ForgotPassword from './src1/screens/Auth/ForgotPassword';
import TaskScreen from './src1/screens/Main/TaskScreen';
const App=()=>{
  return(
    <View style={{flex:1}}>
          {/* <StartApp/> */}
          {/* <ForgotPassword/> */}
          <TaskScreen/>

    </View>
  )
}

export default App;