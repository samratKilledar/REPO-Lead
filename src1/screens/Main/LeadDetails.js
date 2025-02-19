import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import { ScrollView } from "react-native-gesture-handler";
import InsuranceCard from "../../components/InsuranceCard";
const LeadDetails = () => {
  const cardData = [
    {
      id: 1,
      title: "Insurance",
      date: "20-01-2025",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type ...",
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
      <ScrollView>
        <View style={styles.centralcontainer}>
        <View style={{flex:0.3}}>
      <NavigationHeaderBack text="Barbara Moore"/>
      </View>

          <View style={styles.detailsContainer}>
            <DetailItem icon={require('../../assets/icons/ProfileGrey/profileGrey.png')} label="Name" detail="Rajiv Sharma" />
            <DetailItem icon={require('../../assets/icons/Call/call.png')} label="Mobile No" detail="+919876543210" />
            <DetailItem icon={require('../../assets/icons/Address/Address.png')} label="Address" detail="Build 1/A, 101, Shree krishna society,Waghle Esate, Thane - 400601 Maharashtra,India." />
            <DetailItem icon={require('../../assets/icons/Bag/bag.png')} label="Occupation" detail="Job" />
            <DetailItem icon={require('../../assets/icons/Work/work.png')} label="Type Of Work" detail="IT Engineer" />
            <DetailItem icon={require('../../assets/icons/Wallet/wallett.png')} label="Monthly Income" detail="30000" />
            <DetailItem icon={require('../../assets/icons/Chart/chart.png')} label="Company Name" detail="ABC Contact Pvt Ltd" />
            <View style={styles.leadStatusContainer}><DetailItem icon={require('../../assets/icons/LSTIckSquare/lsTickSquare.png')} label="Lead Status" detail={<Text style={styles.leadStatusText}>Follow up</Text>} /> </View>
            <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Next Meeting Date" detail="Feb 14, 2025" />
            <DetailItem icon={require('../../assets/icons/Remarks.png')} label="Attachment" detail="References.pdf" />
          </View>
          <View style={styles.followup}>
            <CustomButton title="Add Follow Up" customStyle={ButtonStyles.addButton} textStyles={ButtonStyles.addButtonText} />
            <CustomButton title="Add Services" customStyle={ButtonStyles.addButton} textStyles={ButtonStyles.addButtonText} />
          </View>
          <View style={styles.insuranceCard}>
            <Text style={styles.insuranceText}>Intrested Services</Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 45,
    justifyContent: 'space-between',
  },
  centralcontainer: {
    flex: 3,
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 5,
  },
  detailsContainer: {
    flex: 5,
    gap: 12,
    paddingTop: 30,
  },
  followup: {
    flexDirection: 'row',       // Aligns items in a horizontal line
    justifyContent: 'space-between', // Ensures space between the buttons
    gap: 10,
    marginRight: 28,
  },
  leadStatusContainer: {
    height: 32,
    marginRight: 32,
  },
  leadStatusText: {
    color: '#2B2162',
    fontSize: 14,
    lineHeight: 19.6,
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
export default LeadDetails;