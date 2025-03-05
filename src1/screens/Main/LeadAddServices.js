import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView , Image} from 'react-native'; // Import ScrollView
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCardDel from '../../components/InsuranceCardDel';
import { useNavigation } from '@react-navigation/native';
import StatusDropdown from '../../components/StatusDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { updateRemark, updateServices } from '../../redux/reducers/leadAddServiceReducer';

const { width, height } = Dimensions.get('window'); 

const LeadAddServices = () => {
  const dispatch = useDispatch();
  const remark = useSelector(state => state.leadAddService.remark);
  const services = useSelector(state => state.leadAddService.services);
  const navigation = useNavigation();
  const goBackCall = () => {
    navigation.popToTop();
  };

  const handleSubmit = () => {
    if (!remark || !services) {
      alert("All fields are required!");
      return;
    }

    const leadServiceData = {
      remark,
      services,
    };

    dispatch(leadServiceData);
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
        <CustomTextInput
          type={remark}
          value={remark}
          placeholder="Remark"
          onChangeText={(text) => dispatch(updateRemark(text))} 
        />
        <StatusDropdown
          label="Services"
          selectedValue={services}
          onValueChange={(value) => dispatch(updateServices(value))}
          apiType="service"
          zIndex={1000}
        />
        <CustomButton
          title="Submit"
          customStyle={{ width: width * 0.9 }} // Responsive width
          textStyles={styles.nextButtonText}
          onPress={handleSubmit}
        />
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.insuranceCard}>
          {cardData.map((item) => (
            <InsuranceCardDel
              key={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05, 
    paddingTop: height * 0.02, 
    // backgroundColor: "#FFFFFF",

  },
  headerContainer: {
    flex: 0.2, 
    justifyContent: 'center',

  },
  centerContainer: {
    flex: 0.4, 
    gap: height * 0.04,
    zIndex: 1,
    marginBottom: height * 0.08,
    
  },
  scrollViewContainer: {
    flex: 0.5,
    
  },
  insuranceCard: {
    gap: height * 0.03,
    flex: 1,
    paddingBottom: height * 0.05,
    paddingTop : 60,
    marginBottom : 40,
  },
  nextButtonText: {
    fontSize: width * 0.04,
  },
});

export default LeadAddServices;