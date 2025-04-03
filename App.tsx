/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import StartApp from "./src1/StartApp";

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!isConnected && (
        <View style={styles.networkStrip}>
          <Text style={styles.networkText}>Please on your data connection.</Text>
        </View>
      )}
      <StartApp />
    </View>
  );
};

const styles = StyleSheet.create({
  networkStrip: {
    width: '100%',
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  networkText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;