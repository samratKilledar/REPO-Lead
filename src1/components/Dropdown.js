import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ label, selectedValue, onValueChange, options, zIndex }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={selectedValue}
        setValue={onValueChange}
        items={options}
        placeholder={label}
        style={[styles.dropdown, open ? styles.dropdownOpen : null]}
        dropDownContainerStyle={[styles.dropDownBox, open ? styles.dropDownBoxOpen : null]}
        textStyle={[styles.labelStyle, open ? styles.labelStyleOpen : null]}
        listItemContainerStyle={styles.listItem}
        ArrowUpIconComponent={() => (
          <Image
            source={require("../assets/icons/ArrowDown/arrowDown.png")}
            style={styles.icon}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image
            source={require("../assets/icons/ArrowDown/arrowDown.png")}
            style={styles.icon}
          />
        )}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 50,
  },
  dropdown: {
    height: 60,
    borderRadius: 12,
    paddingRight: 20,
    borderColor: "#FAFAFA",
    borderWidth: 1,
    backgroundColor: "#FAFAFA",
  },
  dropdownOpen: {
    borderColor: "#2b2162",
    borderWidth: 2,
  },
  dropDownBox: {
    borderColor: "#2b2162",
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  dropDownBoxOpen: {
    borderColor: "#2b2162",
    borderWidth: 2,
  },
  labelStyle: {
    fontFamily: "Urbanist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15.6,
    letterSpacing: 0.2,
    color: "#616161",
    padding: 12,
  },
  labelStyleOpen: {
    color: "black",
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 12,
    resizeMode: "contain",
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default Dropdown;