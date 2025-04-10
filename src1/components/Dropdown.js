import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ label, selectedValue, onValueChange, options, zIndex, searchable = false, searchPlaceholder}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={selectedValue}
        setValue={(callback) => {
          const newValue = callback(selectedValue);
          onValueChange(newValue);
        }}
        items={options}
        placeholder={label}
        style={[styles.dropdown, open ? styles.dropdownOpen : null]}
        dropDownContainerStyle={[
          styles.dropDownBox,
          open ? styles.dropDownBoxOpen : null,
        ]}
        textStyle={[styles.labelStyle, open ? styles.labelStyleOpen : null]}
        listItemContainerStyle={styles.listItem}
        listMode="MODAL" // Dropdown opens in a modal
        searchable={searchable} // Enable search functionality
        searchPlaceholder={searchPlaceholder} // Set search placeholder text
        searchTextInputStyle={styles.searchInput}
        searchContainerStyle={styles.searchContainer}
        searchIcon={() => (
          <Image
            source={require('../assets/icons/Search/search.png')}
            style={styles.searchIcon}
          />
        )}
        ArrowUpIconComponent={() => (
          <Image
            source={require("../assets/icons/ArrowUp/arrowup.png")}
            style={styles.icon}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image
            source={require("../assets/icons/ArrowDown/arrowDown3x.png")}
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
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  searchInput: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingLeft: 35,
  },
  searchContainer: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    left: 20,
    top: 10,
  },
});

export default Dropdown;
