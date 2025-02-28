import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(''); // Navigate to Login Screen after 4 seconds
    }, 4000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../android/app/src/main/assets/leadLoader.gif')} // Your GIF file
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gif: {
    width: 300,
    height: 300,
  },
});

export default SplashScreen;