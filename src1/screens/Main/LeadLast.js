import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import TextStyle from '../../styles/TextStyle';
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCard from '../../components/InsuranceCard';
import Stepper from "../../components/StepperComp";
import StatusDropdown from '../../components/StatusDropdown';

const LeadLast = (props) => {
  const [assignto, setAssignto] = useState('');
  const [services, setService] = useState('');
  const [Remark, setRemark] = useState(null);
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
  const goBackCall = () => {
    props.navigation.goBack();
  };

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
        <NavigationHeaderBack text="Add Services" onPress={goBackCall}/>
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
          zIndex={2000}
        />
          <StatusDropdown
            label="Services"
            selectedValue={services}
            onValueChange={setService}
            apiType="service"
            zIndex={1000} // Lower zIndex
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
    paddingRight: 24,
    paddingLeft: 24,
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
    marginTop: 30,
    marginRight: 10,
    marginLeft: 5,
    marginBottom: 30,
    gap: 24,
  },
  insuranceText: {
    fontFamily: "Urbanist",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21.6,
    color: "#212121",
  },
});

export default LeadLast;

