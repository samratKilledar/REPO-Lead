import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HeaderComp from "../../components/HeaderComp";
import CustomTextInput from "../../components/CustomTextInput";
import CustomText from "../../components/CustomText";
import TextStyle from "../../styles/TextStyle";

const TaskScreen = () => {
  const [search, setSearch] = useState(''); 
  const [activeTab, setActiveTab] = useState("Lead Task");

  return (
    <View style={styles.container}>
      <HeaderComp />
      <View style={styles.input}>
        <CustomTextInput 
          icon={require('../../assets/icons/Search/searchIcon2x.png')}
          type={search}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
        />
      </View>
      <View style={styles.tabContainer}>
        {["Lead Task", "Client Task"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
            <CustomText text={tab} customstyle={[TextStyle.tabText, activeTab === tab ? TextStyle.activeTabText : TextStyle.inactiveTabText]}/>
            <View style={activeTab === tab ? styles.activeTabIndicator : styles.inactiveTabIndicator} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>
        {activeTab === "Lead Task" ? (
          <Text>Lead Task Content</Text>
        ) : (
          <Text>Client Task Content</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  input: {
    height: 56,
    gap: 10,
    paddingRight: 24,
    paddingLeft: 24,
  },
  tabContainer: {
    height: 61,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  tab: {
    width: 160,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabIndicator: {
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
});

export default TaskScreen;
