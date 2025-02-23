import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTask from './AddTask';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Profile Screen</Text> */}
      {/* <AddTask/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default ProfileScreen;
