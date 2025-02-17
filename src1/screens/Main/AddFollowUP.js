// import React from 'react'
// import { useState } from 'react'
// import { View , StyleSheet , Text} from 'react-native'
// import Dropdown from '../../components/Dropdown'
// import Navigation from '../../components/Navigation'
// const AddFollowUP = () => {
//     const [type, setType] = useState("");
//     const [priority, setPriority] = useState("");
//     const [assign , setAssign] = useState("");
//   return (
//     <View style={styles.container}>
//       <Navigation text= "Add Follow-Up"/>
//       <View style={styles.centerContainer}>
//         <Dropdown
//         label="Type"
//         selectedValue={type}
//         onValueChange={setType}
//         options={[
//           { label: "Lead", value: "lead" },
//           { label: "Client", value: "client" }
//         ]}
//       />
//       <Dropdown
//         label="Priority"
//         selectedValue={priority}
//         onValueChange={setPriority}
//         options={[
//           { label: "High", value: "high" },
//           { label: "Mid", value: "mid" },
//           { label: "Low", value: "low" }
//         ]}
//       />
//        <Dropdown
//         label="Assign"
//         selectedValue={assign}
//         onValueChange={setAssign}
//         options={[
//           { label: "Mr. Akshat", value: "akshat" },
//           { label: "Mr. Paresh", value: "paresh" },
//           { label: "Mr. Subhash", value: "subhash" }
//         ]}
//       />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//       backgroundColor: "#c4c4c0",
//       gap: 24,
//     },
//     centerContainer: {
//       height: 590,
//       // width: 428,
//       paddingRight: 10,
//       paddingLeft: 10,
//       backgroundColor: "pink",
//       gap: 10,
//     }
//   });
  
// export default AddFollowUP;




//code 2
// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import Dropdown from "../../components/Dropdown";
// import Navigation from "../../components/Navigation";

// const AddFollowUP = () => {
//   const [type, setType] = useState(null);
//   const [priority, setPriority] = useState(null);
//   const [assign, setAssign] = useState(null);

//   return (
//     <View style={styles.container}>
//       <Navigation text="Add Follow-Up" />
//       <View style={styles.centerContainer}>
//         <Dropdown
//           label="Type"
//           selectedValue={type}
//           onValueChange={setType}
//           options={[
//             { label: "Lead", value: "lead" },
//             { label: "Client", value: "client" },
//           ]}
//         />
//         <Dropdown
//           label="Priority"
//           selectedValue={priority}
//           onValueChange={setPriority}
//           options={[
//             { label: "High", value: "high" },
//             { label: "Mid", value: "mid" },
//             { label: "Low", value: "low" },
//           ]}
//         />
//         <Dropdown
//           label="Assign"
//           selectedValue={assign}
//           onValueChange={setAssign}
//           options={[
//             { label: "Mr. Akshat", value: "akshat" },
//             { label: "Mr. Paresh", value: "paresh" },
//             { label: "Mr. Subhash", value: "subhash" },
//           ]}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#c4c4c0",
//     gap: 24,
//   },
//   centerContainer: {
//     height: 590,
//     paddingRight: 10,
//     paddingLeft: 10,
//     backgroundColor: "pink",
//     gap: 10,
//   },
// });

// export default AddFollowUP;



//3 no code
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "../../components/Dropdown";
import Navigation from "../../components/Navigation";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";


const AddFollowUP = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [assign, setAssign] = useState(null);
  const [attachment, setAttachment] = useState('');
  const [meetSchedule, setMeetSchedule] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [remark, setRemark] = useState('');

  return (
    <View style={styles.container}>
      <View><Navigation text="Add Follow-Up" /></View>

      <View style={styles.centerContainer}>
        <CustomTextInput
          type={title}
          value={title}
          placeholder="Title"
          onChangeText={setTitle}
        />
        <Dropdown
          label="Status"
          selectedValue={type}
          onValueChange={setType}
          options={[
            { label: "Insurance Under Process", value: "Insurance Under Process" },
            { label: "Mandate Approved", value: "Mandate Approved" },
            { label: "Demat Under Process", value: "Demat Under Process" },
            { label: "Mandate Pending", value: "Mandate Pending" },
            { label: "Case Declined", value: "Case Declined" },
            { label: "Reject", value: "client" },
            { label: "Payment Pending", value: "Payment Pending" },
            { label: "Task Completed", value: "Task Completed" },
            { label: "Document Recived & Under Process", value: "Document Recived & Under Process" },
            { label: "Policy Issues", value: "Policy Issues" },
            { label: "Insurance Pending", value: "Insurance Pending" },
            { label: "Waiting For Documents", value: "Waiting For Documents" },
            { label: "Conversation Pending", value: "Conversation Pending" },
          ]}
          zIndex={2000}  // Highest zIndex to keep it on top
        />
        <Dropdown
          label="Assign"
          selectedValue={assign}
          onValueChange={setAssign}
          options={[
            { label: "Mr.Akshat", value: "akshat" },
            { label: "Mr.Paresh", value: "paresh" },
            { label: "Mr.Rajesh", value: "paresh" },
            { label: "Mr.Subhash", value: "subhash" },
          ]}
          zIndex={1000} // Lowest zIndex
        />
        <CustomTextInput
          followupicon={require('../../assets/icons/Scan/scan.png')}
          type={attachment}
          value={attachment}
          placeholder="Attachment"
          onChangeText={setTitle}
        />
        <CustomTextInput
          followupicon={require('../../assets/icons/Calendar/calendar.png')}
          type={meetSchedule}
          value={meetSchedule}
          placeholder="Next Meeting schedule on"
          onChangeText={setMeetSchedule}
        />
         <CustomTextInput
         followupicon={require('../../assets/icons/Calendar/calendar.png')}
          type={scheduleTime}
          value={scheduleTime}
          placeholder="Schedule Time"
          onChangeText={setScheduleTime}
        />
         <CustomTextInput
          type={remark}
          value={remark}
          placeholder="Remark"
          onChangeText={setRemark}
        />
        <CustomButton title="Sign in" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 15,
    backgroundColor: "#FFFFFF",
    gap: 20, //bet nav and con
  },
  centerContainer: {
    // height: 590,
    flex: 0.7,
    gap: 12,
    zIndex: 1,  // Ensure it's below the dropdowns
  },
});

export default AddFollowUP;


