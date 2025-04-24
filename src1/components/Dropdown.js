// import React, { useState } from "react";
// import { View, StyleSheet, Image } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";

// const Dropdown = ({ label, selectedValue, onValueChange, options, zIndex, searchable = false, searchPlaceholder}) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <View style={[styles.container, { zIndex: zIndex }]}>
//       <DropDownPicker
//         open={open}
//         setOpen={setOpen}
//         value={selectedValue}
//         setValue={(callback) => {
//           const newValue = callback(selectedValue);
//           onValueChange(newValue);
//         }}
//         items={options}
//         placeholder={label}
//         style={[styles.dropdown, open ? styles.dropdownOpen : null]}
//         dropDownContainerStyle={[
//           styles.dropDownBox,
//           open ? styles.dropDownBoxOpen : null,
//         ]}
//         textStyle={[styles.labelStyle, open ? styles.labelStyleOpen : null]}
//         listItemContainerStyle={styles.listItem}
//         listMode="MODAL" // Dropdown opens in a modal
//         searchable={searchable} // Enable search functionality
//         searchPlaceholder={searchPlaceholder} // Set search placeholder text
//         searchTextInputStyle={styles.searchInput}
//         searchContainerStyle={styles.searchContainer}
//         searchIcon={() => (
//           <Image
//             source={require('../assets/icons/Search/search.png')}
//             style={styles.searchIcon}
//           />
//         )}
//         ArrowUpIconComponent={() => (
//           <Image
//             source={require("../assets/icons/ArrowUp/arrowup.png")}
//             style={styles.icon}
//           />
//         )}
//         ArrowDownIconComponent={() => (
//           <Image
//             source={require("../assets/icons/ArrowDown/arrowDown3x.png")}
//             style={styles.icon}
//           />
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 15,
//     height: 50,
//   },
//   dropdown: {
//     height: 60,
//     borderRadius: 12,
//     paddingRight: 20,
//     borderColor: "#FAFAFA",
//     borderWidth: 1,
//     backgroundColor: "#FAFAFA",
//   },
//   dropdownOpen: {
//     borderColor: "#2b2162",
//     borderWidth: 2,
//   },
//   dropDownBox: {
//     borderColor: "#2b2162",
//     borderWidth: 2,
//     borderRadius: 12,
//     backgroundColor: "#FFFFFF",
//   },
//   dropDownBoxOpen: {
//     borderColor: "#2b2162",
//     borderWidth: 2,
//   },
//   labelStyle: {
//     fontFamily: "Urbanist",
//     fontWeight: "400",
//     fontSize: 14,
//     lineHeight: 15.6,
//     letterSpacing: 0.2,
//     color: "#616161",
//     padding: 12,
//   },
//   labelStyleOpen: {
//     color: "black",
//     fontWeight: "600",
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   listItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#cccccc",
//   },
//   searchInput: {
//     height: 40,
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     marginHorizontal: 10,
//     marginBottom: 10,
//     paddingLeft: 35,
//   },
//   searchContainer: {
//     borderBottomColor: '#e0e0e0',
//     borderBottomWidth: 1,
//     paddingBottom: 10,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     position: 'absolute',
//     left: 20,
//     top: 10,
//   },
// });

// export default Dropdown;

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";

const Dropdown = ({
  label,
  selectedValue,
  onValueChange,
  options = [],
  zIndex = 1000,
  searchable = true,
  searchPlaceholder = "Search...",
}) => {
  const [selected, setSelected] = useState(selectedValue || null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setSelected(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    if (searchable && searchText !== "") {
      const filtered = options.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [searchText, options]);

  const handleSelect = (item) => {
    setSelected(item.value);
    onValueChange && onValueChange(item.value);
    setIsDropdownOpen(false);
    setSearchText("");
  };

  return (
    <View style={{ zIndex }}>
      <TouchableOpacity
        onPress={() => setIsDropdownOpen((prev) => !prev)}
        style={styles.selectorBox}
      >
        <Text style={styles.selectedText}>
           {selected?.name || label}
        </Text>
        <Image
          source={
            isDropdownOpen
              ? require("../assets/icons/ArrowUp/arrowup.png")
              : require("../assets/icons/ArrowDown/arrowDown3x.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdownContainer}>
          {searchable && (
            <View style={styles.searchBarWrapper}>
            <Image
              source={require("../assets/icons/Search/search.png")} // update this path to your actual search icon path
              style={styles.searchIcon}
            />
            <TextInput
              placeholder={searchPlaceholder}
              style={styles.searchBar}
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#2B2162"
            />
          </View>
          
          )}
          <FlatList
            data={filteredOptions}
            keyExtractor={(item, index) => index.toString()}
            style={styles.optionList}
            nestedScrollEnabled
            renderItem={({ item, index }) => (
              <View>
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
                {index !== filteredOptions.length - 1 && (
                  <View style={styles.separator} />
                )}
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectorBox: {
    backgroundColor: "#FAFAFA",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FAFAFA",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    fontFamily: "Urbanist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.2,
    color: "#616161",
    flex: 1,
    paddingLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  dropdownContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    maxHeight: 200,
    borderRadius: 10,
    borderColor: "#2B2162",
    borderWidth: 1,
    overflow: "hidden",
  },
  searchBar: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 10,
    color: "#000",
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: "#2B2162",
  },
  
  optionList: {
    maxHeight: 160,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  separator: {
    height: 1,
    backgroundColor: "#2B2162",
    marginHorizontal: 5,
  },
});

export default Dropdown;

















