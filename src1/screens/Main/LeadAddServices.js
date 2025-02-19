
// Final Code ---------->
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import TextStyle from "../../styles/TextStyle";
import ButtonStyles from "../../styles/ButtonStyles";

const LeadAddService = () => {
  const [service, setService] = useState(null);
  const [remark, setRemark] = useState("");
  const steps = ["Personal", "Occupation", "Services"];
  const currentStep = 3;

  // Dropdown states for Services
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceItems, setServiceItems] = useState([
    { label: "Mutual Fund", value: "Mutual Fund" },
    { label: "Insurance", value: "Insurance" },
    { label: "Loans", value: "Loans" },
    { label: "Real Estate", value: "Real Estate" },
  ]);

  const addLeadService = () => {
    console.log("Lead Service Added:", { service, remark });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* Replace manual arrow with Image component */}
          <Image
            source={require("../../assets/icons/Cross/cross.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={TextStyle.Task_Title}>Add Service</Text>
      </View>

      
      {/* Dropdowns & Inputs */}
      <ScrollView contentContainerStyle={styles.inputContainer}>
        {/* Services Dropdown */}
        <DropDownPicker
          open={serviceOpen}
          value={service}
          items={serviceItems}
          setOpen={setServiceOpen}
          setValue={setService}
          setItems={setServiceItems}
          placeholder="   Services"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={TextStyle.Task_descp}
          placeholderStyle={styles.dropdownPlaceholder}
          selectedItemLabelStyle={styles.selectedItemLabel}
          zIndex={2000}
          ArrowUpIconComponent={() => (
            <Image source={require("../../assets/icons/Cross/cross.png")} style={styles.arrowIcon} />
            )}
            ArrowDownIconComponent={() => (
                <Image source={require("../../assets/icons/Plus/plus.png")} style={styles.arrowIcon} />
            )}
        />

        {/* Remark Input */}
        <CustomTextInput
          placeholder="Remark"
          value={remark}
          onChangeText={setRemark}
          style={TextStyle.Task_descp}
        />

        {/* Space between Remark and Button */}
        <View style={{ height: 20 }} />

        {/* Add Button */}
        <TouchableOpacity>
          <CustomButton title="Submit" customStyle={{ width: -30 }} textStyles={styles.nextButtonText} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 10,
  },

  inputContainer: {
    flexGrow: 1,
  },

  input: {
    marginBottom: 15,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#FAFAFA",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: 15,
  },

  dropdownContainer: {
    borderWidth: 1.2,
    borderColor: "#2B2162",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },

  dropdownPlaceholder: {
    color: "#616161",
    
  },

  selectedItemLabel: {
    fontWeight: "bold",
    color: "#2B2162",
  },

});

export default LeadAddService;
