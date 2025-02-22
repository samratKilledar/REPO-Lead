import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity, Modal, TextInput, Dimensions } from 'react-native';
import TextStyle from '../../styles/TextStyle';
import CustomText from '../../components/CustomText';
import CustomButton from "../../components/CustomButton";
import cardstyle from '../../styles/cardstyle';
import Dropdown from '../../components/Dropdown';
import CustomTextInput from '../../components/CustomTextInput';
import ButtonStyles from '../../styles/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const LogoutPage = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State for Add UDC Service modal
  const [Services, setServices] = useState(null); // State for dropdown selection
  const [serviceName, setServiceName] = useState(''); // State for service name input
  const [editModalVisible, setEditModalVisible] = useState(false);

  const GradientCard = ({ style, colors, start, end, children }) => (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[style, { justifyContent: 'center', alignItems: 'center' }]}
    >
      {children}
    </LinearGradient>
  );

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

        <View style={{ marginBottom: 19 }}>
          <View style={styles.line} />
          <CustomButton title={"Add UDC Service"} onPress={() => setModalVisible(true)} />
        </View>

        {/* Services Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <CustomText text={"Services"} customstyle={TextStyle.serviceText} />
            <TouchableOpacity onPress={() => setEditModalVisible(true)}>
              <Image source={require("../../assets/icons/Edit/edit3x.png")} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.badgesContainer}>
            <GradientCard
              style={cardstyle.green1}
              colors={['#4ADE80', '#73FFA6']}
              start={{ x: 0.8, y: 0 }}
              end={{ x: 0.2, y: 1 }}
            >
              <CustomText text={"Insurance"} customstyle={TextStyle.InsuranceTextt} />
            </GradientCard>
            <GradientCard
              style={cardstyle.blue1}
              colors={['#246BFD', '#6F9EFF']}
              start={{ x: 0.8, y: 0 }}
              end={{ x: 0.2, y: 1 }}
            >
              <CustomText text={"Mutual Funds"} customstyle={TextStyle.InsuranceTextt} />
            </GradientCard>
            <GradientCard
              style={cardstyle.red1}
              colors={['#FF4D67', '#FF8A9B']}
              start={{ x: 0.8, y: 0 }}
              end={{ x: 0.2, y: 1 }}
            >
              <CustomText text={"Demat"} customstyle={TextStyle.InsuranceTextt} />
            </GradientCard>
          </View>
        </View>

        {/* Occupation Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <CustomText text={"Occupation"} customstyle={TextStyle.serviceText} />
            <TouchableOpacity onPress={() => setEditModalVisible(true)}>
              <Image source={require("../../assets/icons/Edit/edit3x.png")} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.badgesContainer}>
            <GradientCard
              style={cardstyle.blue2}
              colors={['#246BFD', '#6F9EFF']}
              start={{ x: 0.8, y: 0 }}
              end={{ x: 0.2, y: 1 }}
            >
              <CustomText text={"Job"} customstyle={TextStyle.InsuranceTextt} />
            </GradientCard>
            <GradientCard
              style={cardstyle.green2}
              colors={['#4ADE80', '#73FFA6']}
              start={{ x: 0.8, y: 0 }}
              end={{ x: 0.2, y: 1 }}
            >
              <CustomText text={"Business"} customstyle={TextStyle.InsuranceTextt} />
            </GradientCard>
            <GradientCard
              style={cardstyle.yellow2}
              colors={['#FACC15', '#FFE580']}
              start={{ x: 0.8, y: 0 }}
              end={{ x: 0.2, y: 1 }}
            >
              <CustomText text={"Professionals"} customstyle={TextStyle.InsuranceTextt} />
            </GradientCard>
          </View>
          <GradientCard
            style={cardstyle.red2}
            colors={['#FF4D67', '#FF8A9B']}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.2, y: 1 }}
          >
            <CustomText text={"Other"} customstyle={TextStyle.InsuranceTextt} />
          </GradientCard>
        </View>

        {/* Logout Modal (Bottom Modal) */}
        <Modal visible={logoutVisible} animationType="slide" transparent={true}>
          <View style={styles.bottomModalOverlay}>
            <View style={styles.bottomModalContainer}>
              <CustomText text={"Logout"} customstyle={TextStyle.modallText} />
              <Image source={require("../../assets/icons/Line.png")} style={styles.line} />
              <CustomText text={"Are you sure you want to log out?"} customstyle={TextStyle.logoutText} />
              <CustomButton title={"Yes, logout"} customStyle={{ width: width - 30 }} onPress={() => setLogoutVisible(false)} />
              <View style={{ width: width - 30 }}>
                <CustomButton title={"Cancel"} customStyle={ButtonStyles.cancelbutton} textStyles={ButtonStyles.cancelButtonText} onPress={() => setLogoutVisible(false)} />
              </View>
            </View>
          </View>
        </Modal>

        {/* Add UDC Service Modal (Bottom Modal) */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.bottomModalOverlay}>
            <View style={styles.bottomModalContainer}>
              <CustomText text={"UDC Service"} customstyle={TextStyle.modallText2} />
              <Image source={require("../../assets/icons/Line.png")} style={styles.line} />
              {/* Dropdown for Services */}
              <Dropdown
                label="Services"
                selectedValue={Services}
                onValueChange={setServices}
                options={[
                  { label: "Services", value: "Services" },
                  { label: "Occupation", value: "Occupation" },
                  { label: "Lead Source", value: "Lead Source" },
                  { label: "Lead Status", value: "Lead Status" }
                ]}
              />

              {/* Input for Service Name */}
              <CustomTextInput
                style={styles.input}
                placeholder="Service Name"
                value={serviceName}
                onChangeText={setServiceName}
              />

              {/* Submit Button */}
              <CustomButton title={"Add"} customStyle={{ width: width - 30 }} onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        {/* Edit Services Modal (Bottom Modal) */}
        <Modal visible={editModalVisible} animationType="slide" transparent={true}>
          <View style={styles.bottomModalOverlay}>
            <View style={styles.bottomModalContainer}>
              <CustomText text={"Services"} customstyle={TextStyle.modallText2} />
              <Image source={require("../../assets/icons/Line.png")} style={styles.line} />
              <View style={{ gap: width * 0.01 }}>
                {/* Insurance Section */}
                <View style={styles.serviceItem}>
                  <CustomText text={"Insurance"} customstyle={TextStyle.serviceText} />
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => { /* Handle edit action */ }}>
                      <Image source={require("../../assets/icons/Edit/edit3x.png")} style={styles.smallIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { /* Handle delete action */ }}>
                      <Image source={require("../../assets/icons/cross.png")} style={styles.smallIcon} />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Mutual Fund Section */}
                <View style={styles.serviceItem}>
                  <CustomText text={"Mutual Fund"} customstyle={TextStyle.serviceText} />
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => { /* Handle edit action */ }}>
                      <Image source={require("../../assets/icons/Edit/edit3x.png")} style={styles.smallIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { /* Handle delete action */ }}>
                      <Image source={require("../../assets/icons/cross.png")} style={styles.smallIcon} />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Service Name Input */}
                <CustomTextInput
                  style={styles.input}
                  placeholder="Service Name"
                  value={serviceName}
                  onChangeText={setServiceName}
                />
              </View>

              {/* Add Button */}
              <CustomButton title={"Add"} customStyle={{ width: width - 30 }} onPress={() => setEditModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    marginTop: height * 0.03,
    gap: height * 0.02,
  },
  scrollContent: {
    flexGrow: 1,
  },
  fullcontainer: {
    flex: 1,
    padding: width * 0.05,
  },
  headcontainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    width: width * 0.3,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profilepicContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilepic: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: "contain",
    marginTop: 40,
  },
  textContainer: {
    gap: height * 0.02,
    marginTop: height * 0.04,
    alignItems: "center",
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: height * 0.02,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: width * 0.04,
    shadowColor: "#04060F",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 60,
    marginBottom: height * 0.02,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editIcon: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: "contain",
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    gap: 10,
    marginTop: height * 0.02,
  },
  bottomModalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomModalContainer: {
    height: height * 0.4,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: width * 0.05,
    alignItems: 'center',
    gap: 19,
  },
  input: {
    width: '90%',
    height: height * 0.06,
    borderBottomWidth: 1,
    marginVertical: height * 0.01,
  },
  submitButton: {
    backgroundColor: '#2E1A47',
    paddingVertical: height * 0.015,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: height * 0.02,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: height * 0.01,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallIcon: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: 'contain',
    marginHorizontal: width * 0.01,
  },
});

export default LogoutPage;