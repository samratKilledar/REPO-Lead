import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import TextStyle from '../../styles/TextStyle';
import Dropdown from '../../components/DropDown';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import InsuranceCard from '../../components/InsuranceCard';
const LeadAddService = () => {
  const [services, setService] = useState('');
  const [Remark, setRemark] = useState(null);

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
      <View style={{flex:0.1}}>
      <NavigationHeaderBack text="Add Services"/>
      </View>

      <View style={styles.centerContainer}>
        <CustomTextInput
          type={Remark}
          value={setRemark}
          placeholder="Remark"
          onChangeText={setRemark}
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
            { label: "Real E", value: "Real E" },
            { label: "Real Est", value: "Real Est" },
            { label: "Real E", value: "Real E" },
            { label: "Real E", value: "Real E" },

          ]}
           zIndex={2000}
        />
        <CustomButton title="NEXT" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
      
        </View>
        
        <View style={styles.insuranceCard}>
            {cardData.map((item) => (
              <InsuranceCard
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
              />
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
    gap: 20, 
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

export default LeadAddService;