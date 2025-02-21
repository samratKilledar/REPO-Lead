import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./CustomText";
import TextStyle from "../styles/TextStyle";


const LeadCard = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.HorLayout}>
          <CustomText text={props.name} customstyle={TextStyle.nameText} />
          <CustomText text={props.phone} customstyle={TextStyle.namePhone} />

          {/* Three Dots Icon */}
          <View style={styles.moreCircleDot}>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <Image source={require("../assets/icons/MoreCircle.png")} style={styles.moreCircleIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.VerLayout}>
          {props.status && (
            <LinearGradient
              colors={props.statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.statusBadge}
            >
              <CustomText text={props.status} customstyle={{}} />
            </LinearGradient>
          )}
          {props.leadstatus && (
            <LinearGradient
              colors={props.statusGradient}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.leadstatusBadge}
            >
              <CustomText text={props.leadstatus} customstyle={TextStyle.statusText} />
            </LinearGradient>
          )}
          <CustomText text={props.dateTime} customstyle={TextStyle.dateTime} />
        </View>
      </View>

      {/* Popup Menu */}
      {menuVisible && (
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Edit clicked")}>
            <Image source={require("../assets/icons/Edit/edit.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Edit</Text>
          </TouchableOpacity>

          {/* Conditional Menu Item */}
          {props.menuType === "follow" ? (
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Add Follow clicked")}>
              <Image source={require("../assets/icons/PlusBlack/Plus.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Add Follow</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Status clicked")}>
              <Image source={require("../assets/icons/LSTIckSquare/lsTickSquare.png")} style={styles.menuIcon} />
              <Text style={styles.menuText}>Status</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Delete clicked")}>
            <Image source={require("../assets/icons/Delete/delete.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
        gap: 24,
        marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    shadowColor: '#04060F14',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 60,
   // elevation: 1,
    padding: 24, 
    gap: 24, 
    overflow:"hidden"
},
HorLayout: {
    gap: 10, 
},
VerLayout: { 
    gap: 10,
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "flex-end", 
},
statusBadge: {
  borderRadius: 100,
  paddingTop: 6,
  paddingRight: 16,
  paddingBottom: 6,
  paddingLeft: 16,
  gap: 4,
},
moreCircleDot: {
  position: "absolute",
  top: 1,
  right: 1,
  width: 24,  
  height: 24,
},
moreCircleIcon: {
  width: 24,   
  height: 24,
  resizeMode: "contain", 
},
  leadstatusBadge: {
    width: 159,
    height: 32,
    borderRadius: 100,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    gap: 4,
  },

  /* Menu Styles */
  menuBox: {
    position: "absolute",
    flex: 1,
    top: 30, 
    right: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    resizeMode: "contain",
  },
  menuText: {
    fontSize: 14,
  },
});

export default LeadCard;

