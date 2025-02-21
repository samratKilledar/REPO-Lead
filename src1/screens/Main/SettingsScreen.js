import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskScreen from './TaskScreen';
import AddTask from './AddTask';
import CloseAccountScreen from './CloseAccountScreen';
import LeadScreen from './LeadScreen';
import AddFollowUP from './AddFollowUP';
import LeadDetails from './LeadDetails';
import ClientDetails from './ClientDetails';
import ClientAddFollowUP from './ClientAddFollowUp';
import ClientScreen from './ClientScreen';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Settings Screen</Text> */}
      {/* <TaskScreen/> */}
     {/* <CloseAccountScreen/> */}
      {/* <AddTask/> */}
      {/* <LeadScreen/> */}
      <AddFollowUP/>
      {/* <LeadDetails/> */}
      {/* <ClientDetails/> */}
      {/* <ClientAddFollowUP/> */}
      {/* <ClientScreen/> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default SettingsScreen;
