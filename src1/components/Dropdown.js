// import React from 'react'
// import { View , StyleSheet} from 'react-native'
// import { Picker } from "@react-native-picker/picker";

// const Dropdown = ({label, selectedValue, onValueChange, options }) => {
//   return (
//     <View style={styles.dropPicker}>
//         <Picker
//         selectedValue={selectedValue}
//         onValueChange={onValueChange}
//         style={styles.picker}
//       >
//         <Picker.Item label={`Select ${label}`} value="" />
//         {options.map((option) => (
//           <Picker.Item key={option.value} label={option.label} value={option.value} />
//         ))}
//       </Picker>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     dropPicker: {
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 8,
//       backgroundColor: "#fff",
//       justifyContent: "center",
//       height: 50,
//       marginVertical: 8,
//     },
//     picker: {
//       height: 50,
//       width: "100%",
//       color: "#333",
//     },
//   });

// export default Dropdown;




//2 hide below dropdown
// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";

// const Dropdown = ({ label, selectedValue, onValueChange, options }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <View style={styles.container}>
//       <DropDownPicker
//         open={open}
//         setOpen={setOpen}
//         value={selectedValue}
//         setValue={onValueChange}
//         items={options}
//         placeholder={`Select ${label}`}
//         containerStyle={styles.dropdownContainer}
//         style={styles.dropdown}
//         dropDownContainerStyle={styles.dropDownBox}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 15,
//   },
//   dropdownContainer: {
//     height: 50,
//   },
//   dropdown: {
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: "#fff",
//   },
//   dropDownBox: {
//     borderColor: "#ccc",
//     backgroundColor: "#fff",
//   },
// });

// export default Dropdown;


//3no code
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


