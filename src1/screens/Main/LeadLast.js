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
// import { fetchServices, updateAssignTo, updateRemark, updateServices } from '../../redux/actions/lastAction';

// const LeadLast = (props) => {
//   const dispatch = useDispatch();
//   const { assignto, services, remark, servicesLoading, servicesError } = useSelector((state) => state.lastReducer);

//   const steps = ['Personal', 'Occupation', 'Services'];
//   const currentStep = 3;

//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       title: 'Insurance',
//       date: '10-01-2025',
//       description: 'Lorem Ipsum is simply dummy text of the printing industry...'
//     },
//     {
//       id: 2,
//       title: 'Mutual Fund',
//       date: '20-01-2025',
//       description: "Lorem Ipsum has been the industry's standard dummy text..."
//     },
//   ]);

//   useEffect(() => {
//     dispatch(fetchServices());
//   }, [dispatch]);

//   const goBackCall = () => {
//     props.navigation.goBack("LeadAddOccupation");
//   };

//   const handleSubmit = () => {
//     if (!assignto || services.length === 0) {
//       Alert.alert('Error', "Please select 'Assign to' and 'Services'");
//       return;
//     }

//     const formData = { assignto, services, remark };
//     console.log('Form Data:', formData);
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
//         <StatusDropdown
//           label="Assign to"
//           selectedValue={assignto}
//           onValueChange={(value) => dispatch(updateAssignTo(value))}
//           options={[
//             { label: 'John Doe', value: 'John Doe' },
//             { label: 'Jane Smith', value: 'Jane Smith' }
//           ]}
//           zIndex={4000}
//         />
//         {servicesLoading ? (
//           <Text>Loading Services...</Text>
//         ) : (
//           <StatusDropdown
//             label="Services"
//             selectedValue={services}
//             onValueChange={(value) => dispatch(updateServices([value]))} // Fix for non-serializable value
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
//           {cards.map((item) => (
//             <View key={item.id} style={styles.cardContainer}>
//               <InsuranceCard
//                 title={item.title}
//                 date={item.date}
//                 description={item.description}
//               />
//               <TouchableOpacity
//                 style={styles.deleteButton}
//                 onPress={() => handleDeleteCard(item.id)}
//               >
//                 <Image
//                   source={require('../../assets/icons/Delete/delete.png')}
//                   style={styles.deleteIcon}
//                 />
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     backgroundColor: '#FFFFFF',
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
//     marginRight: 10,
//     marginLeft: 5,
//     gap: 24,
//     marginBottom: 16,
//     padding: 6,
//     paddingBottom: 100,
//   },
//   cardContainer: {
//     position: 'relative',
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
import { fetchServices, updateAssignTo, updateRemark, updateServices } from '../../redux/actions/lastAction';

const LeadLast = (props) => {
  const dispatch = useDispatch();
  const { assignto, services, remark, servicesLoading, servicesError } = useSelector((state) => state.lastReducer);

  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 3;

  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Insurance',
      date: '10-01-2025',
      description: 'Lorem Ipsum is simply dummy text of the printing industry...'
    },
    {
      id: 2,
      title: 'Mutual Fund',
      date: '20-01-2025',
      description: "Lorem Ipsum has been the industry's standard dummy text..."
    },
  ]);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const goBackCall = () => {
    props.navigation.goBack("LeadAddOccupation");
  };

  const handleSubmit = () => {
    if (!assignto || services.length === 0) {
      Alert.alert('Error', "Please select 'Assign to' and 'Services'");
      return;
    }

    const newCard = {
      id: Date.now(),
      title: services[0],
      date: new Date().toLocaleDateString(),
      description: remark
    };

    setCards((prevCards) => [...prevCards, newCard]);

    Alert.alert('Success', 'Lead submitted successfully');
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
        <StatusDropdown
          label="Assign to"
          selectedValue={assignto}
          onValueChange={(value) => dispatch(updateAssignTo(value))}
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
            selectedValue={services}
            onValueChange={(value) => dispatch(updateServices([value]))} 
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
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
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
    marginRight: 10,
    marginLeft: 5,
    gap: 24,
    marginBottom: 16,
    padding: 6,
    paddingBottom: 100,
  },
  cardContainer: {
    position: 'relative',
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

