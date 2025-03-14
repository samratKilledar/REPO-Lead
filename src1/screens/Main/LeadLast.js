// import React, { useEffect, useState } from 'react';
// import { View, Text, Alert, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Dropdown from '../../components/Dropdown';
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import InsuranceCard from '../../components/InsuranceCard';
// import Stepper from '../../components/StepperComp';
// import StatusDropdown from '../../components/StatusDropdown';
// import { submitLeadLast, updateAssignTo, updateRemark, updateServices } from '../../redux/actions/lastAction';

// const LeadLast = (props) => {
//   const dispatch = useDispatch();
  
//   // Correctly fetching values from Redux state
//   const {
//     assignto, services , remark
//   } = useSelector(state => state.lastReducer); 


//   const steps = ['Personal', 'Occupation', 'Services'];
//   const currentStep = 3;
//   const servicesLoading = false; // Replace with actual loading state if available

//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       title: 'Insurance',
//       date: '10-01-2025',
//       description: "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
//     },
//     {
//       id: 2,
//       title: 'Mutual Fund',
//       date: '20-01-2025',
//       description: "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
//     },
//   ]);

//   const goBackCall = () => {
//     props.navigation.goBack("LeadAddOccupation");
//   };

//   const handleSubmit = () => {
//     if (!assignto || services.length === 0) {
//       console.log('Error', "Please select 'Assign to' and 'Services'");
//       return;
//     }
//     const newCard = {
//       id: Date.now(),
//       title: services[0],
//       date: new Date().toLocaleDateString(),
//       description: remark
//     };
//     setCards((prevCards) => [...prevCards, newCard]);
//     dispatch(submitLeadLast());
//     Alert.alert('Success', 'Lead submitted successfully');
//   };

//   const handleDeleteCard = (id) => {
//     setCards((prevCards) => prevCards.filter((card) => card.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.1, marginLeft: 5 }}>
//         <NavigationHeaderBack text="Add Services" onPress={goBackCall} />
//       </View>
//       <View style={styles.stepperContainer}>
//         <Stepper steps={steps} currentStep={currentStep} />
//       </View>
//       <View style={styles.centerContainer}>
//         <Dropdown
//           label="Assign to"
//           selectedValue={assignto} // Fixed Redux selector
//           onValueChange={(value) => {
//             console.log("AssignTo Selected:", value);
//             dispatch(updateAssignTo(value));
//           }}
//           options={[
//             { label: 'John Doe', value: 'John Doe' },
//             { label: 'Jane Smith', value: 'Jane Smith' }
//           ]}
//           zIndex={4000}
//         />

//         {servicesLoading ? (
//           <Text>Loading Services...</Text>
//         ) : (
//           <Dropdown
//             label="Services"
//             selectedValue={services} // Fixed Redux selector
//             onValueChange={(value) => {
//               console.log("Service Selected:", value);
//               dispatch(updateServices([value])); // Keeping array format
//             }}
//             options={[
//               { label: 'Insurance', value: 'Insurance' },
//               { label: 'Mutual Fund', value: 'Mutual Fund' }
//             ]}
//             apiType="service"
//             zIndex={2000}
//           />
//         )}

//         <CustomTextInput
//           value={remark}
//           placeholder="Remark"
//           onChangeText={(value) => dispatch(updateRemark(value))}
//         />
//         <CustomButton title="Submit" onPress={handleSubmit} />
//         <ScrollView contentContainerStyle={styles.insuranceCardContainer}>
//           <View style={styles.insuranceCard}>
//             {cards.map((item) => (
//               <View key={item.id} style={styles.cardContainer}>
//                 <InsuranceCard
//                   title={item.title}
//                   date={item.date}
//                   description={item.description}
//                 />
//                 <TouchableOpacity
//                   style={styles.deleteButton}
//                   onPress={() => handleDeleteCard(item.id)}
//                 >
//                   <Image
//                     source={require('../../assets/icons/Delete/delete.png')}
//                     style={styles.deleteIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     gap: 18,
//     zIndex: -1,
//   },
//   centerContainer: {
//     flex: 1,
//     gap: 12,
//     zIndex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   stepperContainer: {
//     marginBottom: 10,
//   },
//   insuranceCardContainer: {
//     gap: 24,
//     marginBottom: 16,
//     paddingBottom: 100,
//   },
//   cardContainer: {
//     position: 'relative',
//   },
//   insuranceCard: {
//     marginTop: 10,
//     marginBottom: 30,
//     gap: 24,
//   },
//   deleteButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 1,
//   },
//   deleteIcon: {
//     width: 25,
//     height: 25,
//     top: 20,
//     right: 20,
//   },
// });

// export default LeadLast;


import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCard from '../../components/InsuranceCard';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
import { submitLeadLast, updateAssignTo, updateRemark, updateServices } from '../../redux/actions/lastAction';
import Toast from 'react-native-toast-message';
const LeadLast = (props) => {
  const dispatch = useDispatch();
  
  // Correctly fetching values from Redux state
  const {
    assignto, services , remark 
  } = useSelector(state => state.lastReducer); 


  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 3;
  const servicesLoading = false; // Replace with actual loading state if available

  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Insurance',
      date: '10-01-2025',
      description: "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
    },
    {
      id: 2,
      title: 'Mutual Fund',
      date: '20-01-2025',
      description: "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
    },
  ]);

  const goBackCall = () => {
    props.navigation.goBack("LeadAddOccupation");
  };

  const serviceList= useSelector(state => state.homeReducer);
  alert(JSON.stringify(serviceList))


  const handleSubmit = () => {
    if (!assignto) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please select "Assign to"',
      });
      return;
    }

    if (services.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please select "Services"',
      });
      return;
    }

    const newCard = {
      id: Date.now(),
      title: services[0],
      date: new Date().toLocaleDateString(),
      description: remark
    };

    setCards((prevCards) => [...prevCards, newCard]);

    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Lead submitted successfully',
    });
    // dispatch(submitLeadLast());
  };

  
  const handleDeleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginLeft: 5 }}>
        <NavigationHeaderBack text="Add Services" onPress={goBackCall} />
      </View>
      <View style={styles.stepperContainer}>
        <Stepper steps={steps} currentStep={currentStep} />
      </View>
      <View style={styles.centerContainer}>
        <Dropdown
          label="Assign To"
          selectedValue={assignto} // Fixed Redux selector
          onValueChange={(value) => {
            console.log("AssignTo Selected:", value);
            dispatch(updateAssignTo(value));
          }}
          options={[
            { label: 'John Doe', value: 'John Doe' },
            { label: 'Jane Smith', value: 'Jane Smith' }
            
          ]}
          zIndex={4000}
        />

        {servicesLoading ? (
          <Text>Loading Services...</Text>
        ) : (
          <StatusDropdown
            label="Services"
            selectedValue={services} // Fixed Redux selector
            onValueChange={(value) => {
              console.log("Service Selected:", value);
              dispatch(updateServices([value])); // Keeping array format
            }}
            listData={serviceList.service}
            apiType="service"
            zIndex={2000}
          />
        )}

        <CustomTextInput
          value={remark}
          placeholder="Remark"
          onChangeText={(value) => dispatch(updateRemark(value))}
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
        <ScrollView contentContainerStyle={styles.insuranceCardContainer}>
          <View style={styles.insuranceCard}>
            {cards.map((item) => (
              <View key={item.id} style={styles.cardContainer}>
                <InsuranceCard
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteCard(item.id)}
                >
                  <Image
                    source={require('../../assets/icons/Delete/delete.png')}
                    style={styles.deleteIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    gap: 18,
    zIndex: -1,
  },
  centerContainer: {
    flex: 1,
    gap: 12,
    zIndex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  stepperContainer: {
    marginBottom: 10,
  },
  insuranceCardContainer: {
    gap: 24,
    marginBottom: 16,
    paddingBottom: 100,
  },
  cardContainer: {
    position: 'relative',
  },
  insuranceCard: {
    marginTop: 10,
    marginBottom: 30,
    gap: 24,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  deleteIcon: {
    width: 25,
    height: 25,
    top: 20,
    right: 20,
  },
});

export default LeadLast;