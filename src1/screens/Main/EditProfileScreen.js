import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
// import Dropdown from "../../components/DropDown";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";

const EditProfileScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState(null);
    const [attachment, setAttachment] = useState('');
    const [date, setDate] = useState('');
    const [surName, setSurName] = useState('');
    const goBackCall = () => {
        props.navigation.goBack();
      };
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, marginLeft: 5 }}>
                <NavigationHeaderBack text="Edit Profile"  onPress={goBackCall}/>
            </View>

            <View style={styles.centerContainer}>
                <CustomTextInput type={name} value={name} placeholder="Daniel" onChangeText={setName}/>
                <CustomTextInput type={surName} value={surName} placeholder="Austin" onChangeText={setSurName} />
                <CustomTextInput followupicon={require('../../assets/icons/Message.png')} type={email} value={email} placeholder="daniel_austin@gmail.com" onChangeText={setEmail} />

                <View style={styles.phoneInputContainer}>
                    <Image source={require('../../assets/icons/Country.png')} style={styles.flagIcon} />
                    <Image source={require('../../assets/icons/arrowDownblack.png')} style={styles.dropdownIcon} />
                    <TextInput
                        style={styles.phoneInput}
                        value={phone}
                        placeholder="+91 98765 43210"
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                </View>

                {/* <Dropdown label="Male" selectedValue={type} onValueChange={setType} options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                    { label: "Other", value: "Other" },]} zIndex={2000} /> */}

                <CustomTextInput followupicon={require('../../assets/icons/Calendar/calendar.png')} type={date} value={date} placeholder="12/27/1995" onChangeText={setDate} />
                <CustomTextInput followupicon={require('../../assets/icons/Scan/scan.png')} type={attachment} value={attachment} placeholder="Profile Photo" onChangeText={setAttachment} />

                <CustomButton title="Update" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 5,
        paddingTop: 10,
        backgroundColor: "#FFFFFF",
        gap: 20,
    },
    centerContainer: {
        flex: 0.7,
        gap: 12,
        zIndex: 1,
        paddingRight: 5,
        paddingLeft: 12,
    },
    phoneInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F7F7",
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 50,
        justifyContent: "flex-start", // Align items to the start
        gap: 5, // Space between flag & dropdown icon
    },
    flagIcon: {
        width: 30,
        height: 20,
        resizeMode: "contain",
    },
    dropdownIcon: {
        width: 15, // Smaller dropdown icon
        height: 15,
        resizeMode: "contain",
        marginLeft: 5, // Ensure it’s next to the flag
    },
    phoneInput: {
        fontSize: 14,
        fontFamily: "Urbanist",
        fontWeight: "600",
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#212121",
        marginLeft: 10, // Space between input & icons
    },
    input: {
        color: "pink",
    },

});

export default EditProfileScreen;

