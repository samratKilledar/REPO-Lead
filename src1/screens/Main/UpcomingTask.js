import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingTasks } from '../../redux/actions/upcomingTaskAction.js';
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

const UpcomingTask = ({ navigation }) => {
  const NavigatetoCloseAccountScreen = () => {
    navigation.navigate("CloseAccountScreen");
  };

  const goBackCall = () => {
    navigation.goBack();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUpcomingTasks()); // Dispatch API call on component mount
  }, [dispatch]);

  return (
    <View style={{ flex: 1, top: 10,paddingBottom: 24, gap: 24, marginTop: 13 }}>
      <View style={{ flex: 0.7, marginLeft: 8 }}>
        <Navigation text={"Upcoming Task"} onPress={goBackCall} />
      </View>
      <View style={{ flex: 9, marginBottom: 90 }}>
        <ScrollView style={style.container1} showsVerticalScrollIndicator={false}>
          <View style={style.container}>
            <RectCardcomp props={UpcomingMeetings} onPress={NavigatetoCloseAccountScreen} navigation={navigation} />
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


// import React, { useEffect } from 'react';
// import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUpcomingTasks } from '../../redux/actions/upcomingTaskAction.js'; // Import Redux action
// import RectCardcomp from '../../components/RectCardcomp.js';
// import Navigation from '../../components/NavigationHeaderBack.js';

// const UpcomingTask = ({ navigation }) => {
//   const dispatch = useDispatch();

//   // Get the Redux state
//   const { loading, tasks, error } = useSelector((state) => state.upcomingTaskReducer);

//   useEffect(() => {
//     dispatch(fetchUpcomingTasks()); // Dispatch API call on component mount
//   }, [dispatch]);

//   const NavigatetoCloseAccountScreen = () => {
//     navigation.navigate("CloseAccountScreen");
//   };

//   const goBackCall = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={{ flex: 1, top: 10, paddingBottom: 24, gap: 24, marginTop: 13 }}>
//       <View style={{ flex: 0.7, marginLeft: 8 }}>
//         <Navigation text={"Upcoming Task"} onPress={goBackCall} />
//       </View>

//       <View style={{ flex: 9, marginBottom: 90 }}>
//         {loading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : error ? (
//           <Text style={style.errorText}>Error: {error}</Text>
//         ) : (
//           <ScrollView style={style.container1} showsVerticalScrollIndicator={false}>
//             <View style={style.container}>
//               <RectCardcomp props={tasks} onPress={NavigatetoCloseAccountScreen} navigation={navigation} />
//             </View>
//           </ScrollView>
//         )}
//       </View>
//     </View>
//   );
// };

// export default UpcomingTask;

// const style = StyleSheet.create({
//   container: {
//     top: 15,
//     paddingTop: 12,
//     paddingBottom: 24,
//     gap: 24,
//   },
//   container1: {
//     flex: 1,
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 16,
//     marginTop: 20,
//   },
// });
