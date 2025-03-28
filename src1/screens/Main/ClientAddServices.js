import React  from "react";
import { View, StyleSheet, Dimensions, ScrollView , Image ,TouchableOpacity ,ToastAndroid} from 'react-native'; // Import ScrollView
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCard from '../../components/InsuranceCard';
import { useNavigation } from '@react-navigation/native';
import StatusDropdown from '../../components/StatusDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { updateRemark, updateServices,leadAddServiceUser } from '../../redux/actions/leadAddServiceActions';


const { width, height } = Dimensions.get('window'); 

const ClientAddServices = () => {
  const dispatch = useDispatch();
  const remark = useSelector(state => state.leadAddService.remark);
  const services = useSelector(state => state.leadAddService.services);
  const service1= useSelector(state => state.homeReducer);
  const navigation = useNavigation();
  const goBackCall = () => {
    navigation.popToTop();
  };

  const handleSubmit = () => {
    if (!remark) {
        ToastAndroid.show("Remark is required.", ToastAndroid.SHORT);
        return;
    }
    if (!services || services.length === 0) {
        ToastAndroid.show("Services are required.", ToastAndroid.SHORT);
        return;
    }

    ToastAndroid.show("Service added successfully!", ToastAndroid.SHORT);
    dispatch(leadAddServiceUser());
};

  const cardData = [
    {
      id: 1,
      title: "Insurance",
      date: "20-01-2025",
      description:
        "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
    },
    {
      id: 2,
      title: "Mutual Fund",
      date: "20-01-2025",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
     
        <NavigationHeaderBack text="Add Services" onPress={goBackCall} />
       
      </View>
      <View style={styles.centerContainer}>
        <StatusDropdown
          label="Services"
          selectedValue={services}
          onValueChange={(value) =>dispatch(updateServices(value))}
          apiType="service"
          zIndex={1000}
          listData={service1.service}
        />
        <CustomTextInput
          type={remark}
          value={remark}
          placeholder="Remark"
          onChangeText={(text) => dispatch(updateRemark(text))} 
        />
        <CustomButton
          title="Submit"
          customStyle={{ width: width * 0.9 }}
          textStyles={styles.nextButtonText}
          onPress={handleSubmit}
        />
        
      </View>
      <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.insuranceCard}>
          {cardData.map((item) => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: width * 0.04, 
    paddingTop: height * 0.03, 
  },
  headerContainer: {
    flex: 0.1, 
    justifyContent: 'center',
    paddingHorizontal: width * 0.02, 
  },
  centerContainer: {
    flex: 0.4, 
    gap: height * 0.03,
    zIndex: 1,
    marginBottom: height * 0.08,
    marginTop: height * 0.03,
    paddingHorizontal: width * 0.04, 
  },
  scrollViewContainer: {
    flex: 0.5, 
  },
  insuranceCard: {
    gap: height * 0.03,
    flex: 1,
    paddingBottom: height * 0.05,
    paddingTop : 40,
    marginBottom : 40,
    paddingHorizontal: width * 0.04, 
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
  nextButtonText: {
    fontSize: width * 0.04,
  },
});

export default ClientAddServices;