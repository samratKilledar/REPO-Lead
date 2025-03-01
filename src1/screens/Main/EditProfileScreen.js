// import React, { useState } from "react";
// import { View, StyleSheet, Image, TextInput, Platform, ScrollView, Alert } from "react-native";
// import Dropdown from "../../components/Dropdown";
// import CustomTextInput from "../../components/CustomTextInput";
// import CustomButton from "../../components/CustomButton";
// import ButtonStyles from "../../styles/ButtonStyles";
// import NavigationHeaderBack from "../../components/NavigationHeaderBack";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { useSelector } from "react-redux";

// const EditProfileScreen = (props) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [type, setType] = useState(null);
//     const [attachment, setAttachment] = useState('');
//     const [date, setDate] = useState('');
//     const [surName, setSurName] = useState('');
//     const editProfilePlaceHolder = useSelector(state => state.editProfile.editProfilePlaceHolder);
//     const editProfileValue = useSelector(state => state.editProfile.editProfileValue);
//     // Date Picker State
//     const [showDatePicker, setShowDatePicker] = useState(false);
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const goBackCall = () => {
//         props.navigation.goBack();
//     };

//     // Handle Date Selection
//     const handleDateChange = (event, date) => {
//         if (event.type === "set" && date) {
//             setSelectedDate(date);
//             setDate(date.toISOString().split("T")[0]); // Format YYYY-MM-DD
//         }
//         setShowDatePicker(false);
//     };

//     // Function to handle image selection
//     const handleImagePick = () => {
//         Alert.alert("Profile Photo", "Choose an option", [
//             { text: "Camera", onPress: openCamera },
//             { text: "Gallery", onPress: openGallery },
//             { text: "Cancel", style: "cancel" }
//         ]);
//     };

//     // Open Camera
//     const openCamera = () => {
//         launchCamera({ mediaType: "photo", quality: 1 }, (response) => {
//             if (!response.didCancel && !response.error) {
//                 setAttachment(response.assets[0].uri);
//             }
//         });
//     };

//     // Open Gallery
//     const openGallery = () => {
//         launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
//             if (!response.didCancel && !response.error) {
//                 setAttachment(response.assets[0].uri);
//             }
//         });
//     };

//     return (
//         <View style={styles.container}>
//             <View style={{ flex: 0.1, marginLeft: 5 }}>
//                 <NavigationHeaderBack text="Edit Profile" onPress={goBackCall} />
//             </View>

//             <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
//                 <View style={styles.centerContainer}>
//                     <CustomTextInput type={name} value={name} placeholder="Daniel" onChangeText={setName} />
//                     <CustomTextInput type={surName} value={surName} placeholder="Austin" onChangeText={setSurName} />
//                     <CustomTextInput followupicon={require('../../assets/icons/Message.png')} type={email} value={email} placeholder="daniel_austin@gmail.com" onChangeText={setEmail} />

//                     <View style={styles.phoneInputContainer}>
//                         <Image source={require('../../assets/icons/Country.png')} style={styles.flagIcon} />
//                         <Image source={require('../../assets/icons/arrowDownblack.png')} style={styles.dropdownIcon} />
//                         <TextInput
//                             style={styles.phoneInput}
//                             value={phone}
//                             placeholder="+91 98765 43210"
//                             onChangeText={setPhone}
//                             keyboardType="phone-pad"
//                         />
//                     </View>

//                     <Dropdown
//                         label="Male"
//                         selectedValue={type}
//                         onValueChange={setType}
//                         options={[
//                             { label: "Male", value: "Male" },
//                             { label: "Female", value: "Female" },
//                             { label: "Other", value: "Other" },
//                         ]}
//                         zIndex={2000}
//                     />

//                     {/* 📅 Date of Birth Picker */}
//                     <CustomTextInput
//                         followupicon={require('../../assets/icons/Calendar/calendar.png')}
//                         type={date}
//                         value={date}
//                         placeholder="Date"
//                         onChangeText={setDate}
//                         onIconPress={() => setShowDatePicker(true)} // Open Date Picker on icon click
//                     />
//                     {showDatePicker && (
//                         <DateTimePicker
//                             value={selectedDate}
//                             mode="date"
//                             display={Platform.OS === "ios" ? "spinner" : "default"}
//                             onChange={handleDateChange}
//                         />
//                     )}
//                     <CustomTextInput
//                         followupicon={require('../../assets/icons/Scan/scan.png')}
//                         type={attachment} 
//                         value={attachment ? "Photo Selected" : ""}
//                         placeholder="Profile Photo"
//                         onIconPress={handleImagePick} // Trigger Image Picker
//                     />
//                     <CustomButton title="Update" customStyle={ButtonStyles.blueButton} textStyles={ButtonStyles.blueButtonText} />
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingRight: 20,
//         paddingLeft: 5,
//         paddingTop: 10,
//         backgroundColor: "#FFFFFF",
//         gap: 25,
//     },
//     centerContainer: {
//         flex: 0.7,
//         gap: 25,
//         zIndex: 1,
//         paddingRight: 5,
//         paddingLeft: 12,
//         marginBottom: 70,
//     },
//     phoneInputContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "#F7F7F7",
//         borderRadius: 10,
//         paddingHorizontal: 10,
//         height: 50,
//         justifyContent: "flex-start",
//         gap: 5,
//     },
//     flagIcon: {
//         width: 30,
//         height: 20,
//         resizeMode: "contain",
//     },
//     dropdownIcon: {
//         width: 15,
//         height: 15,
//         resizeMode: "contain",
//         marginLeft: 5,
//     },
//     phoneInput: {
//         fontSize: 14,
//         fontFamily: "Urbanist",
//         fontWeight: "600",
//         lineHeight: 19.6,
//         letterSpacing: 0.2,
//         color: "#212121",
//         marginLeft: 10,
//     },
//     container1: {
//         flex: 1,
//     },
// });

// export default EditProfileScreen;



import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput, Platform, ScrollView, Alert } from "react-native";
import Dropdown from "../../components/Dropdown";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
import NavigationHeaderBack from "../../components/NavigationHeaderBack";
import DateTimePicker from "@react-native-community/datetimepicker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { 
    updateFirstname, 
    updateLastname, 
    updateEmail, 
    updatePhoneNumber, 
    updateGender,
    updateDate,
} from "../../redux/actions/editProfileActions";

const EditProfileScreen = (props) => {
    const dispatch = useDispatch();
    
    const firstname = useSelector(state => state.editProfile.firstname);
    const lastname = useSelector(state => state.editProfile.lastname);
    const email = useSelector(state => state.editProfile.email);
    const phonenumber = useSelector(state => state.editProfile.phonenumber);
    const gender = useSelector(state => state.editProfile.gender);
    const date = useSelector(state => state.editProfile.date);


    const firstnamePlaceholder = useSelector(state => state.editProfile.firstnamePlaceholder);
    const lastnamePlaceholder = useSelector(state => state.editProfile.lastnamePlaceholder);
    const emailPlaceholder = useSelector(state => state.editProfile.emailPlaceholder);
    const phonenumberPlaceholder = useSelector(state => state.editProfile.phonenumberPlaceholder);
    const genderPlaceholder = useSelector(state => state.editProfile.genderPlaceholder);
    const datePlaceholder = useSelector(state => state.editProfile.datePlaceholder);

    const [attachment, setAttachment] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const goBackCall = () => {
        props.navigation.goBack();
    };

    const handleDateChange = (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
            dispatch(updateDate(selectedDate.toISOString().split("T")[0]));
        }
        setShowDatePicker(false);
    };

    const handleImagePick = () => {
        Alert.alert("Profile Photo", "Choose an option", [
            { text: "Camera", onPress: openCamera },
            { text: "Gallery", onPress: openGallery },
            { text: "Cancel", style: "cancel" }
        ]);
    };

    const openCamera = () => {
        launchCamera({ mediaType: "photo", quality: 1 }, (response) => {
            if (!response.didCancel && !response.error) {
                setAttachment(response.assets[0].uri);
            }
        });
    };

    const openGallery = () => {
        launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
            if (!response.didCancel && !response.error) {
                setAttachment(response.assets[0].uri);
            }
        });
    };


    const handleUpdateProfile = () => {
        if (!firstname || !lastname || !email || !phonenumber || !gender || !date) {
            Alert.alert("Error", "All fields are required!");
            return;
        } else if (!/^[A-Za-z]+$/.test(firstname)) {
            Alert.alert("Error", "First name must contain only letters!");
            return;
        } else if (!/^[A-Za-z]+$/.test(lastname)) {
            Alert.alert("Error", "Last name must contain only letters!");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert("Error", "Enter a valid email address!");
            return;
        } else if (!/^[0-9]{10}$/.test(phonenumber)) {
            Alert.alert("Error", "Phone number must be 10 digits!");
            return;
        }
        
        // Proceed with update if validations pass
        Alert.alert("Success", "Profile updated successfully!");
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, marginLeft: 5 }}>
                <NavigationHeaderBack text="Edit Profile" onPress={goBackCall} />
            </View>

            <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
                <View style={styles.centerContainer}>
                    <CustomTextInput value={firstname} placeholder={firstnamePlaceholder} onChangeText={(text) => dispatch(updateFirstname(text))} />
                    <CustomTextInput value={lastname} placeholder={lastnamePlaceholder} onChangeText={(text) => dispatch(updateLastname(text))} />
                    <CustomTextInput followupicon={require('../../assets/icons/Message.png')} value={email} placeholder={emailPlaceholder} onChangeText={(text) => dispatch(updateEmail(text))} />

                    <View style={styles.phoneInputContainer}>
                        <Image source={require('../../assets/icons/Country.png')} style={styles.flagIcon} />
                        <Image source={require('../../assets/icons/arrowDownblack.png')} style={styles.dropdownIcon} />
                        <TextInput
                            style={styles.phoneInput}
                            value={phonenumber}
                            placeholder={phonenumberPlaceholder}
                            onChangeText={(text) => dispatch(updatePhoneNumber(text))}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <Dropdown
                        label={genderPlaceholder}
                        selectedValue={gender}
                        onValueChange={(value) => dispatch(updateGender(value))}
                        options={[
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" },
                            { label: "Other", value: "Other" },
                        ]}
                        zIndex={2000}
                    />

                    <CustomTextInput
                        followupicon={require('../../assets/icons/Calendar/calendar.png')}
                        value={date}
                        placeholder={datePlaceholder}
                        onIconPress={() => setShowDatePicker(true)}
                    />
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display={Platform.OS === "ios" ? "spinner" : "default"}
                            onChange={handleDateChange}
                        />
                    )}
                    <CustomTextInput
                        followupicon={require('../../assets/icons/Scan/scan.png')}
                        type={attachment} 
                        value={attachment ? "Photo Selected" : ""}
                        placeholder="Profile Photo"
                        onIconPress={handleImagePick}
                    />
                    <CustomButton 
                        title="Update" 
                        customStyle={ButtonStyles.blueButton} 
                        textStyles={ButtonStyles.blueButtonText} 
                        onPress={handleUpdateProfile} 
                    />
                </View>
            </ScrollView>
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
        gap: 25,
    },
    centerContainer: {
        flex: 0.7,
        gap: 25,
        zIndex: 1,
        paddingRight: 5,
        paddingLeft: 12,
        marginBottom: 70,
    },
    phoneInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F7F7",
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 50,
        justifyContent: "flex-start",
        gap: 5,
    },
    flagIcon: {
        width: 30,
        height: 20,
        resizeMode: "contain",
    },
    dropdownIcon: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        marginLeft: 5,
    },
    phoneInput: {
        fontSize: 14,
        fontFamily: "Urbanist",
        fontWeight: "600",
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#212121",
        marginLeft: 10,
    },
    container1: {
        flex: 1,
    },
});

export default EditProfileScreen;













