import { useState } from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
const CloseAccountScreen = () => {
   const [menuVisible, setMenuVisible] = useState(false);
  return (
    
    <View style={styles.container}>
      
  <View style={styles.centralcontainer}>
    {/* Adjust flex to give enough space */}
    <View style={{ flex:0.3 ,gap:16, flexDirection:"row"}} >
      <NavigationHeaderBack text="Close Account" />
      <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                <Image 
                  source={require('../../assets/icons/MoreCircle.png')} 
                  style={{width:28 ,height:28}}
                />
              </TouchableOpacity>
    </View>

    <View style={styles.detailsContainer}>
      <DetailItem icon={require('../../assets/icons/Work/work.png')} label="Task Name" detail="Close Account" />
      <DetailItem icon={require('../../assets/icons/ProfileGrey/profileGrey.png')} label="Task Owner" detail="John Smith" />
      <DetailItem icon={require('../../assets/icons/ShieldDone.png')} label="Priority" detail="Medium" />
      <DetailItem icon={require('../../assets/icons/Bag/bag.png')} label="Progress" detail="50%" />
      <DetailItem icon={require('../../assets/icons/LSTIckSquare/lsTickSquare.png')} label="Lead Status" detail="Under Process" />
      <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Due Date" detail="Feb 14, 2025" />
      <DetailItem icon={require('../../assets/icons/Service.png')} label="Service Request" detail="Account close once redemption amt credited to his account." />
      <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Start Date" detail="Feb 21, 2025" />
      <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Reminder Date" detail="Feb 15, 2025" />
      <DetailItem icon={require('../../assets/icons/Remarks.png')} label="Remarks" detail="Query raised- 11310957" />
    </View>
  </View>
   {menuVisible && (
                  <View style={styles.menuBox}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Edit clicked")}>
                      <Image source={require("../../assets/icons/Edit/edit.png")} style={styles.menuIcon} />
                      <Text style={styles.menuText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Status clicked")}>
                      <Image source={require("../../assets/icons/LSTIckSquare/lsTickSquare.png")} style={styles.menuIcon} />
                      <Text style={styles.menuText}>Status</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Delete clicked")}>
                      <Image source={require("../../assets/icons/Delete/delete.png")} style={styles.menuIcon} />
                      <Text style={styles.menuText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
  )}
</View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    flexDirection:'row',
    paddingHorizontal: 24,
    paddingLeft: 5,
    paddingBottom: 48,
    justifyContent: "space-between",
  },
  centralcontainer: {
    //flexDirection:'row',
    flex:3,
    width:'100%',
    gap: 32,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 35,
    marginBottom:150,
  },
  detailsContainer: {
    flex: 5,
    //width: "80%", // Make it responsive
    gap: 15,
    paddingLeft: 5,
  paddingRight: 20,
  
  },
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

export default CloseAccountScreen;

