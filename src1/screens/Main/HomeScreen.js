
import { View, ScrollView, StyleSheet } from 'react-native';
import Headercomp from './src1/components/HeaderComp.js';
import HoriCardcomp from './src1/components/HoriCardcomp';
import RectCardcomp from './src1/components/RectCardcomp.js';
import CustomText from './src1/components/CustomText.js';
import TextStyle from './src1/styles/TextStyle.js';

const meetingsData = [
  { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Karlene Chaidez", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Russell Copeland", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
  { name: "Joseph Collins", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
];

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Headercomp />
      <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <View>
          <HoriCardcomp />

          <View style={{ marginTop: 25 }}>
            <View style={style.textlayout}>
              <View style={{ flex: 5, justifyContent: "flex-start" }}>
                <CustomText customstyle={TextStyle.upComingUp} text={"Upcoming Meetings"} />
              </View>
              <View style={{ flex: 1 }}>
                <CustomText customstyle={TextStyle.SeeallText} text={"See All"} />
              </View>
            </View>
          </View>

          <RectCardcomp props={meetingsData} />

          <View style={style.textlayout}>
            <View style={{ flex: 5, justifyContent: "flex-start" }}>
              <CustomText customstyle={TextStyle.upComingUp} text={"Upcoming Tasks"} />
            </View>
            <View style={{ flex: 1 }}>
              <CustomText customstyle={TextStyle.SeeallText} text={"See All"} />
            </View>
          </View>

          <RectCardcomp props={meetingsData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textlayout: {
    gap: 12,
    paddingRight: 24,
    paddingLeft: 24,
    flexDirection: "row",
    flex: 1,
    paddingTop: 20,
  },
});




// import React from 'react';
// import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import HeaderComp from '../../components/HeaderComp.js';
// import HoriCardcomp from '../../components/HoriCardcomp.js';
// import RectCardcomp from '../../components/RectCardcomp.js';
// import CustomText from '../../components/CustomText.js';
// import TextStyle from '../../styles/TextStyle.js';

// const meetingsData = [
//   { name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
//   { name: "Karlene Chaidez", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
//   { name: "Russell Copeland", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
//   { name: "Joseph Collins", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12:00 PM" },
// ];

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Headercomp navigation={navigation} />
//       <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
//         <View>
//           <HoriCardcomp />

//           <View style={{ marginTop: 25 }}>
//             <View style={style.textlayout}>
//               <View style={{ flex: 5, justifyContent: "flex-start" }}>
//                 <CustomText customstyle={TextStyle.upComingUp} text={"Upcoming Meetings"} />
//               </View>
//               <View style={{ flex: 1 }}>
//                 <TouchableOpacity onPress={() => navigation.navigate("UpcomingMeetings")}>
//                   <CustomText customstyle={TextStyle.SeeallText} text={"See All"} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           <RectCardcomp props={meetingsData} />

//           <View style={style.textlayout}>
//             <View style={{ flex: 5, justifyContent: "flex-start" }}>
//               <CustomText customstyle={TextStyle.upComingUp} text={"Upcoming Tasks"} />
//             </View>
//             <View style={{ flex: 1 }}>
//               <TouchableOpacity onPress={() => navigation.navigate("UpcomingTask")}>
//                 <CustomText customstyle={TextStyle.SeeallText} text={"See All"} />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <RectCardcomp props={meetingsData} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textlayout: {
//     gap: 12,
//     paddingRight: 24,
//     paddingLeft: 24,
//     flexDirection: "row",
//     flex: 1,
//     paddingTop: 20,
//   },
// });