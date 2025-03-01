import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const LottieScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animation/loadingFilter.json')} 
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999, // Ensure it appears on top
  },
  lottie: {
    width: 400,
    height: 400,
  },
});

export default LottieScreen;
