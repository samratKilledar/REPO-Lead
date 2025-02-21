import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import HeaderComp from "../../components/HeaderComp";
import CustomTextInput from "../../components/CustomTextInput";
import CustomText from "../../components/CustomText";
import TextStyle from "../../styles/TextStyle";
import LeadCard from "../../components/LeadCard";

const tasksData = [
  { id: "1", name: "Add Account", phone: "Jonh Smith", dateTime: "02 Feb 2025 - 12.00 PM", leadstatus: "Mandate Approved", statusGradient: ["#246BFD", "#6F9EFF"] ,  menuType:"status" },
  { id: "2", name: "Close Account", phone: "John Smith", dateTime: "02 Feb 2025 - 12.00 PM", leadstatus: "Mandate Approved", statusGradient: ["#246BFD", "#6F9EFF"],menuType:"status" },
];
const tasks2Data = [
  { id: "1", name: "Close Account", phone: "Jonh Smith", dateTime: "02 Feb 2025 - 12.00 PM", leadstatus: "Mandate Approved", statusGradient: ["#246BFD", "#6F9EFF"] , menuType:"status"},
  { id: "2", name: "Add Account", phone: "John Smith", dateTime: "02 Feb 2025 - 12.00 PM", leadstatus: "Mandate Approved", statusGradient: ["#246BFD", "#6F9EFF"],menuType:"status" },
];


const TaskScreen = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState("Lead Task");

  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.input}>
        <CustomTextInput
          icon={require('../../assets/icons/Search/search.png')}
          type={search}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          searchbaricon={require('../../assets/icons/Group.png')}
        />
      </View>
      <View style={styles.tabContainer}>
        {["Lead Task", "Client Task"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
            <CustomText text={tab} customstyle={[TextStyle.tabText, activeTab === tab ? TextStyle.activeTabText : TextStyle.inactiveTabText]} />
            <View style={activeTab === tab ? styles.activeTabIndicator : styles.inactiveTabIndicator} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>
        {activeTab === "Lead Task" ? (
          <ScrollView>
            {tasksData.map((item, index) => (
              <View key={item.id} style={styles.cardWrapper}>
                <LeadCard {...item} />
                <View style={[styles.progressLine, { backgroundColor: index === 0 ? "#246BFD" : "#FF4F4F" }]} />
              </View>
            ))}

          </ScrollView>
        ) : (
          <ScrollView>
            {tasks2Data.map((item, index) => (
              <View key={item.id} style={styles.cardWrapper}>
                <LeadCard {...item} />
                <View style={[styles.progressLine, { backgroundColor: index === 0 ? "#246BFD" : "#FF4F4F" }]} />
              </View>
            ))}

          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    //width:'100%',
  },
  input: {
    //height: 56,
    //flex:1,
    gap: 10,
    paddingRight: 24,
    paddingLeft: 24,
  },
  tabContainer: {
    //height: 61,
    //width:'100%',
    //flex:0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
    
  },
  tab: {
    //width: 160,
    width:'50%',
    height: 41,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabIndicator: {
    //flex:1,
    width: 160,
    height: 4,
    borderRadius: 100,
    backgroundColor: "#2B2162",
    marginTop: 4,
  },
  inactiveTabIndicator: {
    width: 160,
    height: 2,
    borderRadius: 100,
    backgroundColor: "#EEEEEE",
    marginTop: 4,
  },
  contentContainer: {
    //width: '100%',
    //height: 611,
    gap: 24,
  },
  cardWrapper: {
    marginBottom: 30, // Adds spacing between cards
    paddingHorizontal: 15,
  },
  progressLine: {
    height: 4,
    borderRadius: 200,
    marginTop: -40, // Move it closer to the card
    width: "200",
    marginLeft: 30,

  },


});

export default TaskScreen;
