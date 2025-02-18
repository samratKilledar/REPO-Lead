

import { View, ScrollView, StyleSheet } from 'react-native';
import RectCardcomp from '../../components/RectCardcomp.js';
import Navigation from '../../components/NavigationHeaderBack.js';

const UpcomingMeetings = [
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
];

const UpcomingTask = (props) => {
  const goBackCall = () => {
    props.navigation.goBack();
  };
  return (
    <View style={{ flex: 1 , top: 15,paddingTop: 12,paddingBottom: 24, gap: 24, }}>
    <View style={{flex:0.3}}>
      <Navigation text={"Upcoming Meetings"}  onPress={goBackCall}/>
    </View>
    <View style={{flex:9,marginBottom:10}}>
    <ScrollView style={style.container1} showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <RectCardcomp props={UpcomingMeetings} />
      </View>
    </ScrollView>
    </View>
    
  </View>
  );
};

export default UpcomingTask;

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