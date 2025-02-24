import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import { ScrollView } from "react-native-gesture-handler";
import InsuranceCard from "../../components/InsuranceCard";
import { useNavigation } from "@react-navigation/native";
const LeadDetails = (props) => {
  const navigation = useNavigation();
  const goBackCall = () => {
    navigation.goBack();
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
  const [menuVisible, setMenuVisible] = useState(false);
  const addfollow = () => {
    props.navigation.navigate("AddFollowUp")
  }
  const addService = () => {
    props.navigation.navigate("LeadAddServices")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.centralcontainer}>
          <View style={{ flex: 0.3, flexDirection: "row", paddingRight: 15, }}>
            <NavigationHeaderBack text="Barbara Moore" onPress={goBackCall} />
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <Image
                source={require('../../assets/icons/MoreCircle.png')}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
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
            <View style={{ flex: 1, margin: 10 }}>
              <CustomButton title="Add Follow Up" customStyle={ButtonStyles.addButton} textStyles={ButtonStyles.addButtonText} onPress={addfollow} />
            </View>
            <View style={{ flex: 1, margin: 10 }}>
              <CustomButton title="Add Services" customStyle={ButtonStyles.addButton} textStyles={ButtonStyles.addButtonText} onPress={addService} />
            </View>
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
        {menuVisible && (
          <View style={styles.menuBox}>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Edit clicked")}>
              <Image source={require("../../assets/icons/Edit/edit.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Delete clicked")}>
              <Image source={require("../../assets/icons/Delete/delete.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
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
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 35,

  },
  detailsContainer: {
    flex: 5,
    gap: 12,
    paddingTop: 30,
  },
  followup: {
    flexDirection: 'row',
    gap: 10,
    flex: 1
  },
  leadStatusContainer: {
    height: 32,
    marginRight: 10,
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
  menuBox: {
    position: "absolute",
    flex: 1,
    top: 30,
    right: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    resizeMode: "contain",
  },
  menuText: {
    fontSize: 14,
  },

});
export default LeadDetails;