// import React, { useEffect } from 'react';
// import { View, Text, Alert, ScrollView } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import CustomButton from '../../components/CustomButton';
// import CustomTextInput from '../../components/CustomTextInput';
// import Dropdown from '../../components/Dropdown';
// import NavigationHeaderBack from '../../components/NavigationHeaderBack';
// import InsuranceCard from '../../components/InsuranceCard';
// import Stepper from '../../components/StepperComp';
// import StatusDropdown from '../../components/StatusDropdown';
// import { fetchServices, updateAssignTo, updateRemark } from '../../redux/actions/lastAction';
// import { StyleSheet } from 'react-native';


// const LeadLast = (props) => {
//   const dispatch = useDispatch();
//   const { assignto, services, remark, servicesLoading, servicesError } = useSelector((state) => state.last);

//   const steps = ['Personal', 'Occupation', 'Services'];
//   const currentStep = 3;

//   useEffect(() => {
//     dispatch(fetchServices());
//   }, [dispatch]);

//   const cardData = [
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
//     }
//   ];

//   const goBackCall = () => {
//     props.navigation.goBack();
//   };

//   const handleSubmit = () => {
//     if (!assignto || !services) {
//       Alert.alert('Error', "Please select 'Assign to' and 'Services'");
//       return;
//     }

//     const formData = { assignto, services, remark };
//     console.log('Form Data:', formData);
//     Alert.alert('Success', 'Lead submitted successfully');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.1 }}>
//         <NavigationHeaderBack text="Add Services" onPress={goBackCall} />
//       </View>
//       <View style={styles.centerContainer}>
//         <Stepper steps={steps} currentStep={currentStep} />
//         <Dropdown
//           label="Assign to"
//           selectedValue={assignto}
//           onValueChange={(value) => dispatch(updateAssignTo(value))}
//           options={[
//             { label: 'John Doe', value: 'John Doe' },
//             { label: 'Jane Smith', value: 'Jane Smith' }
//           ]}
//           zIndex={2000}
//         />
//         {servicesLoading ? (
//           <Text>Loading Services...</Text>
//         ) : servicesError ? (
//           <Text>Error: {servicesError}</Text>
//         ) : (
//           <StatusDropdown
//             label="Services"
//             selectedValue={services}
//             onValueChange={(value) => dispatch(updateAssignTo(value))}
//             apiType="service"
//             zIndex={1000}
//           />
//         )}
//         <CustomTextInput
//           value={remark}
//           placeholder="Remark"
//           onChangeText={(value) => dispatch(updateRemark(value))}
//         />
//         <CustomButton title="Submit" onPress={handleSubmit} />
//       </View>
//       <View style={styles.insuranceCard}>
//         {cardData.map((item) => (
//           <InsuranceCard key={item.id} title={item.title} date={item.date} description={item.description} />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingRight: 24,
//     paddingLeft: 24,
//     paddingTop: 15,
//     backgroundColor: '#FFFFFF',
//     gap: 15,
//   },
//   centerContainer: {
//     flex: 0.7,
//     gap: 12,
//     zIndex: 1,
//   },
//   insuranceCard: {
//     marginTop: 30,
//     marginRight: 10,
//     marginLeft: 5,
//     marginBottom: 30,
//     gap: 24,
//   },
//   insuranceText: {
//     fontFamily: 'Urbanist',
//     fontWeight: 700,
//     fontSize: 18,
//     lineHeight: 21.6,
//     color: '#212121',
//   },
// });

// export default LeadLast;


import React, { useEffect } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet } from 'react-native';
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

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const cardData = [
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
    }
  ];

  const goBackCall = () => {
    props.navigation.goBack();
  };

  const handleSubmit = () => {
    if (!assignto || !services) {
      Alert.alert('Error', "Please select 'Assign to' and 'Services'");
      return;
    }

    const formData = { assignto, services, remark };
    console.log('Form Data:', formData);
    Alert.alert('Success', 'Lead submitted successfully');
  };

  return (
    <View style={styles.container}>
      <NavigationHeaderBack text="Add Services" onPress={goBackCall} />
      <ScrollView contentContainerStyle={styles.centerContainer}>
        <Stepper steps={steps} currentStep={currentStep} />
        <Dropdown
          label="Assign to"
          selectedValue={assignto}
          onValueChange={(value) => dispatch(updateAssignTo(value))}
          options={[
            { label: 'John Doe', value: 'John Doe' },
            { label: 'Jane Smith', value: 'Jane Smith' }
          ]}
          zIndex={2000}
        />
        {servicesLoading ? (
          <Text>Loading Services...</Text>
        ) : servicesError ? (
          <Text>Error: {servicesError}</Text>
        ) : (
          <StatusDropdown
            label="Services"
            selectedValue={services}
            onValueChange={(value) => dispatch(updateServices(value))}
            apiType="service"
            zIndex={1000}
          />
        )}
        <CustomTextInput
          value={remark}
          placeholder="Remark"
          onChangeText={(value) => dispatch(updateRemark(value))}
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
        <View style={styles.insuranceCard}>
          {cardData.map((item) => (
            <InsuranceCard key={item.id} title={item.title} date={item.date} description={item.description} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingRight: 24,
      paddingLeft: 24,
      paddingTop: 15,
      backgroundColor: '#FFFFFF',
      gap: 15,
    },
    centerContainer: {
      flex: 0.7,
      gap: 12,
      zIndex: 1,
    },
    insuranceCard: {
      marginTop: 30,
      marginRight: 10,
      marginLeft: 5,
      marginBottom: 30,
      gap: 24,
    },
    insuranceText: {
      fontFamily: 'Urbanist',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 21.6,
      color: '#212121',
    },
  });

export default LeadLast;
  
