// // Del func & Scroll view 
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Dropdown from '../../components/DropDown';
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import InsuranceCard from '../../components/InsuranceCard';
// import Stepper from "../../components/StepperComp";

// const LeadAdd = () => {
//   const [assignto, setAssignto] = useState('');
//   const [services, setService] = useState('');
//   const [Remark, setRemark] = useState(null);
//   const steps = ["Personal", "Occupation", "Services"];
//   const currentStep = 3;
//   const cardData = [
//     {
//       id: 1,
//       title: "Insurance",
//       date: "10-01-2025",
//       description:
//         "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
//     },
//     {
//       id: 2,
//       title: "Mutual Fund",
//       date: "20-01-2025",
//       description:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
//     },
//     {
//       id: 3,
//       title: "Insurance",
//       date: "25-01-2025",
//       description:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
//     },

//   ];

//   // Function to delete a card
//   const deleteCard = (id) => {
//     setCardData(cardData.filter(card => card.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.1 }}>
//         <NavigationHeaderBack text="Add Services" />
//       </View>
//       <View style={styles.centerContainer}>
//         <Stepper steps={steps} currentStep={currentStep} />
//         <Dropdown
//           label="Assign to"
//           selectedValue={assignto}
//           onValueChange={setAssignto}
//           options={[
//             { label: "John Doe", value: "John Doe" },
//             { label: "Jane Smith", value: "Jane Smith" },
//           ]}
//           zIndex={3000}
//         />
//         <Dropdown
//           label="Services"
//           selectedValue={services}
//           onValueChange={setService}
//           options={[
//             { label: "Mutual Fund", value: "Mutual Fund" },
//             { label: "Insurance", value: "Insurance" },
//             { label: "Loans", value: "Loans" },
//             { label: "Real Estate", value: "Real Estate" },
//           ]}
//           zIndex={2000}
//         />
//         <CustomTextInput
//           type={Remark}
//           value={setRemark}
//           placeholder="Remark"
//           onChangeText={setRemark}
//         />
//         <CustomButton title="ADD" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
//       </View>
//       <View style={styles.insuranceCard}>
//         <Text style={styles.insuranceText}></Text>
//         {cardData.map((item) => (
//           <InsuranceCard
//             key={item.id}
//             title={item.title}
//             date={item.date}
//             description={item.description}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   //  paddingHorizontal: 24,
//     paddingTop: 15,
//     backgroundColor: "#FFFFFF",
//     gap: 15,
//   },
//   centerContainer: {
//     flex: 0.7,
//     gap: 12,
//     zIndex: 1,
//   },
//   insuranceCard: {
//     marginTop: 35,
//     marginRight: 10,
//     marginLeft: 5,
//     marginBottom: 30,
//     gap: 12,
//   },
//   insuranceText: {
//     fontFamily: "Urbanist",
//     fontWeight: "700",
//     fontSize: 18,
//     lineHeight: 21.6,
//     color: "#212121",
//   },
//   cardContainer: {
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//     position: "relative", // Needed for absolute positioning of the delete button
//   },
//   deleteButton: {
//     position: "absolute",
//     top: 20,  // Adjust this for proper alignment
//     right: 18, // Adjust this for proper alignment
//     padding: 8, // Increases tap area
//     zIndex: 10, // Ensures it stays above card content
//   },
//   deleteIcon: {
//     width: 24,
//     height: 24,
//     tintColor: "black",  // Matches your image color
//   },
// });

// export default LeadLast;


// According to API Call
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import InsuranceCard from "../../components/InsuranceCard";
import Stepper from "../../components/StepperComp";
import { saveServicesData, addLead } from "../../redux/reducers/lastReducer";

const LeadLast = ({ navigation }) => {
  const dispatch = useDispatch();
  // const { personal, occupation } = useSelector((state) => state.lead);
  const { personal, occupation } = useSelector((state) => state.lead || {});

  const [assignto, setAssignto] = useState("");
  const [services, setService] = useState("");
  const [remark, setRemark] = useState("");

  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 3;

  const cardData = [
    {
      id: 1,
      title: "Insurance",
      date: "10-01-2025",
      description: "Lorem Ipsum is simply dummy text of the printing industry...",
    },
    {
      id: 2,
      title: "Mutual Fund",
      date: "20-01-2025",
      description: "Lorem Ipsum has been the industry's standard dummy text...",
    },
  ];

  // const handleSubmit = () => {
  //   if (!assignto || !services) {
  //     Alert.alert("Error", "Please select 'Assign to' and 'Services'");
  //     return;
  //   }

  //   const formData = { assignto, services, remark };
  //   dispatch(saveServicesData(formData));

  //   const finalData = { ...personal, ...occupation, ...formData };

  //   dispatch(addLead(finalData))
  //     .unwrap()
  //     .then(() => {
  //       Alert.alert("Success", "Lead submitted successfully");
  //       navigation.navigate("Home");
  //     })
  //     .catch((error) => {
  //       Alert.alert("Error", error || "Submission failed");
  //     });
  // };

  const handleSubmit = () => {
    if (!assignto || !services) {
      Alert.alert("Error", "Please select 'Assign to' and 'Services'");
      return;
    }
  
    const formData = { assignto, services, remark };
    dispatch(saveServicesData(formData));
  
    const finalData = { ...personal, ...occupation, ...formData };
  
    dispatch(addLead(finalData))
      .unwrap()
      .then(() => {
        Alert.alert("Success", "Lead submitted successfully");
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Error", error || "Submission failed");
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
        <NavigationHeaderBack text="Add Services" />
      </View>
      <View style={styles.centerContainer}>
        <Stepper steps={steps} currentStep={currentStep} />
        <Dropdown
          label="Assign to"
          selectedValue={assignto}
          onValueChange={setAssignto}
          options={[
            { label: "John Doe", value: "John Doe" },
            { label: "Jane Smith", value: "Jane Smith" },
          ]}
          zIndex={3000}
        />
        <Dropdown
          label="Services"
          selectedValue={services}
          onValueChange={setService}
          options={[
            { label: "Mutual Fund", value: "Mutual Fund" },
            { label: "Insurance", value: "Insurance" },
            { label: "Loans", value: "Loans" },
            { label: "Real Estate", value: "Real Estate" },
          ]}
          zIndex={2000}
        />
        <CustomTextInput
          value={remark}
          placeholder="Remark"
          onChangeText={setRemark}
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>
      <View style={styles.insuranceCard}>
        <Text style={styles.insuranceText}></Text>
        {cardData.map((item) => (
          <InsuranceCard key={item.id} title={item.title} date={item.date} description={item.description} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //  paddingHorizontal: 24,
      paddingTop: 15,
      backgroundColor: "#FFFFFF",
      gap: 15,
    },
    centerContainer: {
      flex: 0.7,
      gap: 12,
      zIndex: 1,
    },
    insuranceCard: {
      marginTop: 35,
      marginRight: 10,
      marginLeft: 5,
      marginBottom: 30,
      gap: 12,
    },
    insuranceText: {
      fontFamily: "Urbanist",
      fontWeight: "700",
      fontSize: 18,
      lineHeight: 21.6,
      color: "#212121",
    },
    cardContainer: {
      backgroundColor: "#f9f9f9",
      borderRadius: 10,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      position: "relative", // Needed for absolute positioning of the delete button
    },
    deleteButton: {
      position: "absolute",
      top: 20,  // Adjust this for proper alignment
      right: 18, // Adjust this for proper alignment
      padding: 8, // Increases tap area
      zIndex: 10, // Ensures it stays above card content
    },
    deleteIcon: {
      width: 24,
      height: 24,
      tintColor: "black",  // Matches your image color
    },
  });
  
export default LeadLast;
  
