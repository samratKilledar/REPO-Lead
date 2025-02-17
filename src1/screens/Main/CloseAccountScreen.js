import React from "react";
import {View ,Text, StyleSheet} from "react-native";
import DetailItem from "../../components/DetailItem";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
const CloseAccountScreen = () =>{
    return(
        <View style={styles.container}>
             <View style={styles.centralcontainer}>
              {/* <NavigationHeaderBack text="Create New Password"  /> */}
              <View style={styles.detailsContainer}>
                
                <DetailItem icon={require('../../assets/icons/Work/work.png')} label="Task Name" detail="Close Account" />
                <DetailItem icon={require('../../assets/icons/ProfileGrey/profileGrey.png')} label="Task Owner" detail="John Smith" />
                <DetailItem icon={require('../../assets/icons/ShieldDone.png')} label="Priority" detail="Medium" />
                <DetailItem icon={require('../../assets/icons/Bag/bag.png')} label="Progress" detail="50%" />
                <DetailItem icon={require('../../assets/icons/LSTIckSquare/lsTickSquare.png')} label="Lead Status" detail="Under Process" />
                <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Due Date" detail="Feb 14, 2025" />
                <DetailItem icon={require('../../assets/icons/Service.png')} label="Service Request" detail="Account close once redemption amt credited" />
                <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Start Date" detail="Feb 21, 2025" />
                <DetailItem icon={require('../../assets/icons/Calendar/calendar.png')} label="Reminder Date" detail="Feb 15, 2025" />
                <DetailItem icon={require('../../assets/icons/Remarks.png')} label="Remarks" detail="Query raised- 11310957" />
              </View>
               
             </View>
        </View>
      
    );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 48,
    paddingLeft: 24,
    justifyContent: 'space-between',
    backgroundColor: "pink"
  },
  centralcontainer:{
    //width: 380,
    //height: 470,
    gap: 32,
    paddingTop: 24,
    paddingLeft: 20,
    backgroundColor: "orange"

  },
  detailsContainer:{
    width: 380,
    height: 470,
    gap: 20,
    // backgroundColor:"blue",

  }
});
export default CloseAccountScreen;