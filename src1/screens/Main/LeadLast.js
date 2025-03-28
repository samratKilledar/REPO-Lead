
import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet, TouchableOpacity, Image , ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Dropdown from '../../components/Dropdown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCard from '../../components/InsuranceCard';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
import { leadSubmitAllData, updateAssignTo, updateRemark, updateServices } from '../../redux/actions/lastAction';
import { state } from '../../api/mainApi';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { updateAddressLine1, updateAddressLine2, updateCity, updateCountry, updateEmailId, updateLastName, updateMobileNo, updatePincode, updateState, updateWhatsAppNo, updateFirstName, updateLeadSources } from '../../redux/actions/lastAction';
import { updateMonthlyIncome, updateOccupation, updateTypeOfWork } from "../../redux/actions/lastAction";


const LeadLast = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { assignto, services, remark, servicesName,  } = useSelector((state) => state.lastReducer);
  // const {service1} = useSelector((state)=> state.homeReducer)
  // alert(service1)
  const service1= useSelector(state => state.homeReducer);
  //alert(JSON.stringify(service1.service)) 
  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 3;

  const [cards, setCards] = useState([
    // {
    //   id: 1,
    //   title: 'Insurance',
    //   date: '10-01-2025',
    //   description: 'Lorem Ipsum is simply dummy text of the printing industry...'
    // },
    // {
    //   id: 2,
    //   title: 'Mutual Fund',
    //   date: '20-01-2025',
    //   description: "Lorem Ipsum has been the industry's standard dummy text..."
    // },
  ]);


  const goBackCall = () => {
    props.navigation.goBack("LeadAddOccupation");
  };

  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const handleSubmit = () => {
    dispatch(leadSubmitAllData());

    dispatch(updateFirstName(""));
    dispatch(updateLastName(""));
    dispatch(updateMobileNo(""));
    dispatch(updateEmailId(""));
    dispatch(updateWhatsAppNo(""));
    dispatch(updateAddressLine1(""));
    dispatch(updateAddressLine2(""));
    dispatch(updatePincode(""));
    dispatch(updateCity(""));
    dispatch(updateState(""));
    dispatch(updateCountry(""));
    dispatch(updateLeadSources(""));
  
    dispatch(updateOccupation(""));
  dispatch(updateTypeOfWork(""));
  dispatch(updateMonthlyIncome(""));

    dispatch(updateAssignTo("")); 
    dispatch(updateServices("")); 
    dispatch(updateRemark("")); 
    setCards([]); // Clear the added cards list
  
    // Navigate back to LeadScreen
    
      props.navigation.navigate("Lead");
   
  };

  const handleAdd = () => {
    // if (!assignto || !assignto.trim()) {
    //     showToast("Assign to cannot be empty");
    //     return;
    // }

    if (!services || !services.trim()) {
        showToast("Services cannot be empty");
        return;
    }

    if (!remark || !remark.trim()) {
        showToast("Remark cannot be empty");
        return;
    }

    const newCard = {
        id: Date.now(),
        title: services[0], 
        date: new Date().toLocaleDateString(),
        description: remark
    };

    setCards((prevCards) => [...prevCards, newCard]);
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
          label="Assign to"
          selectedValue={assignto}
          onValueChange={(value) => dispatch(updateAssignTo(value))}
          options={[
            { label: 'John Doe', value: 'John Doe' },
            { label: 'Jane Smith', value: 'Jane Smith' }
          ]}
          zIndex={4000}
        />
      
          {/* <StatusDropdown
            label="Services"
            selectedValue={service1.service}
            // onValueChange={(value) => dispatch(updateServices([value]))} 
            apiType="service"
            zIndex={2000}
          /> */}
        
        <StatusDropdown
                label={servicesName}
                selectedValue={service1.services}
                onValueChange={(value) => dispatch(updateServices(value))}
                apiType="leadSource"
                listData={service1.service}
              />
        <CustomTextInput
          value={remark}
          placeholder="Remark"
          onChangeText={(value) => dispatch(updateRemark(value))}
        />
        <CustomButton title="Add" onPress={handleAdd} />
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
            <CustomButton title="Submit" onPress={handleSubmit} />  
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
