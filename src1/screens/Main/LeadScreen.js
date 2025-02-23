import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import LeadCard from "../../components/LeadCard";
import HeaderComp from "../../components/HeaderComp";
import TextStyle from "../../styles/TextStyle";
import CustomText from "../../components/CustomText";
import { useNavigation } from "@react-navigation/native";
const leadsData = [
  { id: "1", name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Follow Up", statusGradient: ["#246BFD", "#6F9EFF"], menuType: "follow" },
  { id: "2", name: "Pricilla Maureen", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Meeting Pending", statusGradient: ["#FACC15", "#FFE580"], menuType: "follow" },
  { id: "3", name: "Robert George", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Lead Win", statusGradient: ["#4ADE80", "#73FFA6"], menuType: "follow" },
];

const LeadScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />

      <View style={styles.centerContainer}>
        <View style={styles.lead}>
          <CustomText text="Lead" customstyle={TextStyle.leadText} />
          <CustomText text="See all" customstyle={TextStyle.SeeallText} />
        </View>

        <ScrollView style={{ padding: 20, flex: 1, }}>
          {leadsData.map((item) => (
            <LeadCard key={item.id} {...item} navigation={props.navigation} screenType="lead" />

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
  },
  navbar: {
    height: 70,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 10,
    paddingLeft: 24,
    backgroundColor: "grey",
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
    paddingRight: 24,
    paddingLeft: 24,
  },
});
export default LeadScreen;