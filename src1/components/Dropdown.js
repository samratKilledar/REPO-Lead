import React, { useState } from "react";
import { View, StyleSheet, Image} from "react-native";
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
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropDownBox}
        textStyle={styles.labelStyle} 
        ArrowUpIconComponent={() => (
          <Image
            source={require("../assets/icons/Calendar/calendar3x.png")}  // Change this path to your actual image
            style={styles.icon}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image
            source={require("../assets/icons/ArrowDown/arrowDown3x.png")}  // Change this path to your actual image
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
    //width: 380,
    borderRadius: 12,
    paddingRight: 20,//for arrow 
    borderColor: "#FAFAFA",
    borderWidth: 1,
    backgroundColor: "#FAFAFA", //for button
  },
  dropDownBox: {
    borderColor: "#2b2162",
    borderWidth: 2 ,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",//drop box below
  },
  labelStyle: {
    fontFamily: "Urbanist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.2,
    color: "#616161", 
    padding: 12, 
  },
  icon: {
    width: 24,  // Increase width (Try 28 or 30 if needed)
    height: 24, // Increase height (Make sure it's equal to width for proper scaling)
    resizeMode: "contain", // Ensures the whole image is visible
  },
});

export default Dropdown;
