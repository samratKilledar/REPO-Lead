// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 24, fontWeight: 'bold' },
// });

// export default ProfileScreen;





import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity,Modal } from 'react-native';
import TextStyle from '../../styles/TextStyle';
import CustomText from '../../components/CustomText';
import CustomButton from "../../components/CustomButton";
import cardstyle from '../../styles/cardstyle';

const ProfileScreen = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  return (
  
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.fullcontainer}>
        <View style={styles.headcontainer}>
          <Image source={require("../../assets/images/Frame.png")} style={styles.logoImage} />
          <TouchableOpacity style={styles.logout} onPress={() => setLogoutVisible(true)}>
            <Image source={require("../../assets/icons/Logout/logOut.png")} />
            <CustomText text={"Logout"} customstyle={TextStyle.logouttext} />
          </TouchableOpacity>
        </View>

        <View style={styles.middleContainer}>
          <TouchableOpacity style={styles.profilepicContainer}>
            <Image source={require("../../assets/icons/profilePic.png")} style={styles.profilepic} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <CustomText text={"Daniel Austin"} customstyle={TextStyle.DanielName} />
            <CustomText text={"daniel_austin@gmail.com"} customstyle={TextStyle.gmailText} />
            <CustomText text={"+91 9876543210"} customstyle={TextStyle.gmailText} />
            <CustomText text={"Male"} customstyle={TextStyle.gmailText} />
            <CustomText text={"01/01/1992"} customstyle={TextStyle.gmailText} />
          </View>
        </View>

        <View style={styles.line} />
        <TouchableOpacity>
          <CustomButton title={"Add UDC Service"} />
        </TouchableOpacity>

        {/* Services Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <CustomText text={"Services"} customstyle={TextStyle.serviceText} />
            <TouchableOpacity>
              <Image source={require("../../assets/icons/Edit/edit3x.png")} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.badgesContainer}>
            <View style={cardstyle.green1}><CustomText text={"Insurance"} customstyle={TextStyle.InsuranceTextt} /></View>
            <View style={cardstyle.blue1}><CustomText text={"Mutual Funds"} customstyle={TextStyle.InsuranceTextt} /></View>
            <View style={cardstyle.red1}><CustomText text={"Demat"} customstyle={TextStyle.InsuranceTextt} /></View>
          </View>
        </View>

        {/* Occupation Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <CustomText text={"Occupation"} customstyle={TextStyle.serviceText} />
            <TouchableOpacity>
              <Image source={require("../../assets/icons/Edit/edit3x.png")} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.badgesContainer}>
            <View style={cardstyle.blue2}><CustomText text={"Job"} customstyle={TextStyle.InsuranceTextt} /></View>
            <View style={cardstyle.green2}><CustomText text={"Business"} customstyle={TextStyle.InsuranceTextt} /></View>
            <View style={cardstyle.yellow2}><CustomText text={"Professionals"} customstyle={TextStyle.InsuranceTextt} /></View>
          </View>
          <View style={cardstyle.red2}><CustomText text={"Other"} customstyle={TextStyle.InsuranceTextt} /></View>
        </View>
      </View>

{/* Logout Modal */}
<Modal visible={logoutVisible} animationType="slide" transparent={true}>
<View style={styles.modalContainer}>
  <View style={styles.modalContent}>
    <CustomText text={"Logout"} customstyle={TextStyle.modalText} />
    <CustomText text={"Are you sure you want to log out?"} customstyle={TextStyle.modalText} />
    <TouchableOpacity style={styles.logoutButton} onPress={() => setLogoutVisible(false)}>
      <CustomText text={"Yes, Logout"} customstyle={TextStyle.logoutButtonText} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.cancelButton} onPress={() => setLogoutVisible(false)}>
      <CustomText text={"Cancel"} customstyle={TextStyle.cancelButtonText} />
    </TouchableOpacity>
  </View>
</View>
</Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    gap: 28,
  },
  scrollContent: {
    flexGrow: 1,
  },
  fullcontainer: {
    flex: 1,
    padding: '5%',
  },
  headcontainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    flex: 0.3,
    aspectRatio: 86.17 / 50,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profilepicContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  profilepic: {
    flex: 1,
    height : 170,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    gap: 10,
    marginTop: 15,
    alignItems: "center",
  },
  line: {
    flex: 0.01,
    backgroundColor: '#ccc',
    marginVertical: '5%',
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: '4%',
    shadowColor: "#04060F",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 60,
    marginBottom: '5%',
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editIcon: {
    flex: 0.1,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    marginTop: '5%',
  },
modalContainer: {
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0,0,0,0.5)',
},




modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  alignItems: 'center',
},
logoutButton: {
  backgroundColor: '#2E1A47',
  paddingVertical: 12,
  width: '90%',
  alignItems: 'center',
  borderRadius: 10,
  marginTop: 10,
},
cancelButton: {
  backgroundColor: '#E5E5E5',
  paddingVertical: 12,
  width: '90%',
  alignItems: 'center',
  borderRadius: 10,
  marginTop: 10,
},
});

export default ProfileScreen;


