import {useState} from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import LeadCard from "../../components/LeadCard";
import HeaderComp from "../../components/HeaderComp";
import TextStyle from "../../styles/TextStyle";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";

const clientData = [
  { id: "1", name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Follow Up", statusGradient: ["#246BFD", "#6F9EFF"] },
  { id: "2", name: "Pricilla Maureen", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Meeting Pending", statusGradient: ["#FACC15", "#FFE580"] },
  { id: "3", name: "Robert George", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Lead Win", statusGradient: ["#4ADE80", "#73FFA6"] },
];


const ClientScreen = () => {
    const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <HeaderComp />
        <CustomTextInput
          icon={require('../../assets/icons/Search/search.png')}
          type={search}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          searchbaricon={require('../../assets/icons/Group.png')}
        />
      <View style={styles.centerContainer}>
        <View style={styles.lead}>
          <CustomText text="Client" customstyle={TextStyle.leadText} />
          <CustomText text="See all" customstyle={TextStyle.seeAll} />
        </View>

        <ScrollView style={{ flex:1, marginBottom: 110}}>
          {clientData.map((item) => (
            <LeadCard key={item.id} {...item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    backgroundColor: "#FFFFFF",
    width:'100%',
    //height: 926,
    flex: 1,
    gap: 4,
    
},
centerContainer: {
    //backgroundColor: "pink",
    //width: 428,
    //height: 611,
    //height: 650,
    flexGrow:1,
    //flex:1,
    gap: 24,
},
lead: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "center", 
    // width: 428,
    height: 22,
    gap: 12,
    paddingRight: 24, 
    paddingLeft: 24,
    //backgroundColor: "red",
},
});
export default ClientScreen;