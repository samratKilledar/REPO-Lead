import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,Text,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCard from '../../components/InsuranceCard';
import Stepper from '../../components/StepperComp';
import StatusDropdown from '../../components/StatusDropdown';
import { leadSubmitAllData, updateAssignTo, updateRemark, updateServices } from '../../redux/actions/lastAction';
import { state } from '../../api/mainApi';
import { useNavigation } from '@react-navigation/native';
import {resetStateLead} from '../../redux/actions/lastAction';

const LeadLast = props => {
  const dispatch = useDispatch();
  const {assignedTo, serviceId, remark, serviceName, assignedToName} = useSelector(
    state => state.lastReducer,
  );
  const navigation = useNavigation();
  const service1 = useSelector(state => state.homeReducer);
  const assignToList = useSelector(state => state.homeReducer);
  const allState = useSelector(state => state.lastReducer);
  const editLeadDataAgainstId = useSelector(state => state.editLeadReducer.editLeadDataAgainstId)
  const steps = ['Personal', 'Occupation', 'Services'];
  const currentStep = 3;
  const [cards, setCards] = useState([]);
  const goBackCall = () => {
    props.navigation.goBack('LeadAddOccupation');
  };

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  useEffect(() => {
    if (allState.messageFromServer.success) {
      dispatch(resetStateLead());
      showToast(allState.messageFromServer.message);
      setCards(allState.services)
      navigation.navigate('LeadScreen');
    }
  });
  const leadLast = useSelector(state => state.homeReducer);

  useEffect(()=>{
    alert(JSON.stringify(cards))
  })
  useEffect(()=>{
    //alert("==============>"+JSON.stringify(editLeadDataAgainstId.serviceDetails))
    setCards(editLeadDataAgainstId.serviceDetails)
  },[editLeadDataAgainstId])
  const handleSubmit = () => {
    if (cards.length === 0) {
      showToast("Card cannot be empty. Add at least 1 card to submit.");
      return;
    }
    
    dispatch(leadSubmitAllData(cards));
  };

  const handleAdd = () => {
    if (!assignedTo || String(assignedTo).trim() === "") {
      showToast("AssignTo cannot be empty");
      return;
    }
    
    if (!serviceId.toString() || !serviceId.toString().trim()) {
      showToast('Services cannot be empty');
      return;
    }

    if (!remark || !remark.trim()) {
      showToast('Remark cannot be empty');
      return;
    }

    // const newCard = {
    //   id: serviceId,
    //   title: serviceName,
    //   date: new Date().toLocaleDateString(),
    //   description: remark,
    // };

    // // Check if the newCard already exists based on id and description
    // setCards(prevCards => {
    //   const isDuplicate = prevCards.some(
    //     card =>
    //       card.id === newCard.id && card.description === newCard.description,
    //   );

    //   if (isDuplicate) {
    //     showToast('This service already exists!');
    //     return prevCards; // Do not add duplicate
    let newCard ={};
    if(editLeadDataAgainstId.id != "" && editLeadDataAgainstId.id != undefined){
       newCard = {
        id: editLeadDataAgainstId.id  ,
        customerId: editLeadDataAgainstId.customerId,
        serviceId: serviceId,
        serviceName: serviceName,
        leadId:  editLeadDataAgainstId.customerId,
        clientId: 0,
        isExistingClient: false,
        remark: remark,
        assignedTo: serviceId,
        assignedToName: assignedToName,
        isActive: true,
        date: new Date().toLocaleDateString(),
      }
    }else{
       newCard = {
        id: serviceId,
        title: serviceName,
        date: new Date().toLocaleDateString(),
        remark: remark,
      };
    }
    alert(JSON.stringify(cards) +"=--="+JSON.stringify(newCard ))
   

    // Check if the newCard already exists based on id and remark
    setCards(prevCards => {
      const validPrevCards = Array.isArray(prevCards) ? prevCards : [];
      
      const isDuplicate = validPrevCards.some(
        card => card.id === newCard.id && card.remark === newCard.remark
      );
    
      if (isDuplicate) {
        showToast?.('This service already exists!');
        return validPrevCards; // Keep existing state if duplicate
      }
    
      // alert(JSON.stringify(validPrevCards)+"======0=======>" + JSON.stringify(newCard));
      return [...validPrevCards, newCard]; // Add only if unique
    });
    
  };

  const handleDeleteCard = (id, remark) => {
    setCards(prevCards =>
      prevCards.filter(
        card => !(card.id === id && card.remark === remark),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.5}}>
        <NavigationHeaderBack text="Add Lead" onPress={goBackCall} />
      </View>
      <View style={styles.stepperContainer1}>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          style={{width: '100%'}}
        />
      </View>
      <View style={styles.centerContainer}>
        <StatusDropdown
          label={assignedToName}
          selectedValue={assignedTo}
          onValueChange={value => dispatch(updateAssignTo(value))}
          apiType="assignTo"
          listData={assignToList.assignTo[3]}
          zIndex={4000}
        />
        <StatusDropdown
          label={serviceName}
          selectedValue={service1.serviceId}
          onValueChange={value => dispatch(updateServices(value))}
          apiType="leadSource"
          listData={service1.service}
        />
        <CustomTextInput
          value={remark}
          placeholder="Remark"
          onChangeText={value => dispatch(updateRemark(value))}
        />
        <CustomButton title="Add" onPress={handleAdd} />
        <ScrollView contentContainerStyle={styles.insuranceCardContainer}>
          <View style={styles.insuranceCard}>
            {cards.map(item => (
              <View key={item.id} style={styles.cardContainer}>
                <InsuranceCard
                  title={item.title!= "" && item.title!= undefined ?  item.title : item.serviceName.toString()}
                  date={item.date}
                  description={item.remark!= "" && item.remark!= undefined ? item.remark : item.remark.toString()}
                />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteCard(item.id, item.remark)}>
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
  },
  centerContainer: {
    marginTop: 10,
    flex: 6,
    paddingBottom: 20,
    gap: 10,
    paddingHorizontal: 15,
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
  stepperContainer1: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: '#EEF0FF',
    alignItems: 'center', // Ensure full width
  },
});

export default LeadLast;