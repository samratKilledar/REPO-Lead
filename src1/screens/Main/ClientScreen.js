import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import LeadCard from "../../components/LeadCard";
import HeaderComp from "../../components/HeaderComp";
import TextStyle from "../../styles/TextStyle";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
const clintsData = [
  { id: "1", name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Follow Up", statusGradient: ["#246BFD", "#6F9EFF"], menuType: "follow" },
  { id: "2", name: "Pricilla Maureen", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Meeting Pending", statusGradient: ["#FACC15", "#FFE580"], menuType: "follow" },
  { id: "3", name: "Robert George", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Lead Win", statusGradient: ["#4ADE80", "#73FFA6"], menuType: "follow" },
];

const ClientScreen = (props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
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
          <CustomText text="See all" customstyle={TextStyle.SeeallText} />
        </View>

        <ScrollView style={{ padding: 20, flex: 1, }}>
          {clintsData.map((item) => (
            <LeadCard key={item.id} {...item} navigation={props.navigation} screenType="client" />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    width: "100%",
  },
  centerContainer: {
    flexGrow: 1
  },
  lead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 22,
    gap: 12,
    paddingTop: 5,
    paddingRight: 24,
    paddingLeft: 24,
  },

});
export default ClientScreen;