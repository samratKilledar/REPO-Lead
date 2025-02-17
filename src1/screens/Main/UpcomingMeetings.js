

import { View, ScrollView, StyleSheet } from 'react-native';
import RectCardcomp from './src1/components/RectCardcomp.js';
import Navigation from './src1/components/Navigation.js';

const meetingsData = [
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
];

const UpcomingMeetings = () => {
  return (
    <View style={{ flex: 1 , top: 15,paddingTop: 12,paddingBottom: 24, gap: 24, }}>
      <Navigation text={"Upcoming Meetings"} />
      <ScrollView style={style.container1} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <RectCardcomp props={meetingsData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpcomingMeetings;

const style = StyleSheet.create({
  container: {
    top: 15,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 24,
  },
  container1: {
    flex: 1,
  },
});