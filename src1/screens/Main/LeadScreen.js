import React from "react";
import { View, ScrollView } from "react-native";
import LeadCard from "../../components/LeadCard";
import LeadCardStyles from "../../styles/LeadCardStyles";
import HeaderComp from "../../components/HeaderComp";
import TextStyle from "../../styles/TextStyle";
import CustomText from "../../components/CustomText";

const leadsData = [
  { id: "1", name: "Barbara Moore", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Follow Up", statusGradient: ["#246BFD", "#6F9EFF"] },
  { id: "2", name: "Pricilla Maureen", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Meeting Pending", statusGradient: ["#FACC15", "#FFE580"] },
  { id: "3", name: "Robert George", phone: "+91 9876543210", dateTime: "02 Feb 2025 - 12.00 PM", status: "Lead Win", statusGradient: ["#4ADE80", "#73FFA6"] },
];   


const LeadScreen = () => {
  return (
    <View style={LeadCardStyles.container}>
      <HeaderComp  />

      <View style={LeadCardStyles.centerContainer}>
        <View style={LeadCardStyles.lead}>
          <CustomText text= "Lead" customstyle={TextStyle.leadText}/>
          <CustomText  text="See all" customstyle={TextStyle.seeAll}/>
        </View>

        <ScrollView style={{padding:20,flex:1, }}>
          {leadsData.map((item) => (
            <LeadCard key={item.id} {...item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LeadScreen;