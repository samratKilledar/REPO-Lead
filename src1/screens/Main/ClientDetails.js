import { useState , useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import { ScrollView } from "react-native-gesture-handler";
import InsuranceCard from "../../components/InsuranceCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeadSuccess, fetchInsuranceSuccess , fetchClientDetails} from "../../redux/actions/clientDetailActions";

const ClientDetails = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goBackCall = () => {
    navigation.goBack();
  };

  const clientDetails = useSelector((state) => state.clientDetailReducer.ClientValue);
  const clientDetailsPlaceholder = useSelector((state) => state.clientDetailReducer.ClientPlaceholder);
  const insuranceList = useSelector((state) => state.clientDetailReducer.InsuranceList);

  const [menuVisible, setMenuVisible] = useState(false);
  const addfollow = () => {
    props.navigation.navigate("ClientAddFollowUp")
  }
  const addService = () => {
    props.navigation.navigate("ClientAddServices")
  }

    // useEffect(() => {
    //   dispatch(fetchClientDetails());
    // }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row",  paddingRight: 28, marginLeft: 8 }}>
        <NavigationHeaderBack text="Barbara Moore" onPress={goBackCall} />
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Image
            source={require('../../assets/icons/MoreCircle.png')}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
      </View>
  
      <ScrollView style={styles.centralcontainer}>
        <View style={styles.detailsContainer}>
          <DetailItem icon={require('../../assets/icons/ProfileGrey/profileGrey.png')} label={clientDetailsPlaceholder.name} detail={clientDetails.name} />
          <DetailItem icon={require('../../assets/icons/Call/call.png')}  label={clientDetailsPlaceholder.mobileNo} detail={clientDetails.mobileNo} />
          <DetailItem icon={require('../../assets/icons/Address/Address.png')} label={clientDetailsPlaceholder.address} detail={clientDetails.address} />
          <DetailItem icon={require('../../assets/icons/Bag/bag.png')} label={clientDetailsPlaceholder.occupation} detail={clientDetails.occupation} />
          <DetailItem icon={require('../../assets/icons/Work/work.png')} label={clientDetailsPlaceholder.typeOfWork} detail={clientDetails.typeOfWork} />
          <DetailItem icon={require('../../assets/icons/Wallet/wallett.png')} label={clientDetailsPlaceholder.monthlyIncome} detail={clientDetails.monthlyIncome} />
          <DetailItem icon={require('../../assets/icons/Chart/chart.png')} label={clientDetailsPlaceholder.companyName} detail={clientDetails.companyName} />
          <View style={styles.leadStatusContainer}>
            <DetailItem icon={require('../../assets/icons/LSTIckSquare/lsTickSquare.png')} label={clientDetailsPlaceholder.leadStatus} detail={<Text style={styles.leadStatusText}>{clientDetails.leadStatus}</Text>} />
          </View>
          <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label={clientDetailsPlaceholder.nextMeetingDate} detail={clientDetails.nextMeetingDate}  />
          <DetailItem icon={require('../../assets/icons/Remarks.png')} label={clientDetailsPlaceholder.attachment}  detail={clientDetails.attachment} />
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
          <Text style={styles.insuranceText}>Interested Services</Text>
          {insuranceList.map((item) => (
            <InsuranceCard
              key={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 45,
    justifyContent: 'space-between',
  },
  centralcontainer: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  detailsContainer: {
    flex: 5,
    gap: 12,
    paddingTop: 30,
  },
  followup: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingRight: 5,
  },
  leadStatusContainer: {
    height: 32,
    marginRight: 10,
    justifyContent: 'center',
  },
  leadStatusText: {
    color: '#2B2162',
    fontSize: 14,
    lineHeight: 16,
  },
  insuranceCard: {
    marginTop: 10,
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
export default ClientDetails;