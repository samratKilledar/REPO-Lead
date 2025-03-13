import React, { useState, lazy, Suspense } from "react";
import { View, StyleSheet, Image, TextInput, Platform, ScrollView, Alert, ActivityIndicator } from "react-native";
// import Dropdown from "../../components/Dropdown";
// import CustomTextInput from "../../components/CustomTextInput";
// import CustomButton from "../../components/CustomButton";
import ButtonStyles from "../../styles/ButtonStyles";
//import NavigationHeaderBack from "../../components/NavigationHeaderBack";
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

// Lazy Load Components
const Dropdown = lazy(() => import("../../components/Dropdown"));
const CustomTextInput = lazy(() => import("../../components/CustomTextInput"));
const CustomButton = lazy(() => import("../../components/CustomButton"));
const NavigationHeaderBack = lazy(() => import("../../components/NavigationHeaderBack"));

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

        Alert.alert("Success", "Profile updated successfully!");

    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, marginLeft: 5 }}>
                 <Suspense fallback={<NavigationHeaderBack/>}>
                <NavigationHeaderBack text="Edit Profile" onPress={goBackCall} />  
                </Suspense> 
            </View>

            <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
                <View style={styles.centerContainer}>
                     <Suspense fallback={<CustomTextInput/>}>
                    <CustomTextInput value={firstname} placeholder={firstnamePlaceholder} onChangeText={(text) => dispatch(updateFirstname(text))} />
                    </Suspense>
                     <Suspense fallback={<CustomTextInput/>}>
                    <CustomTextInput value={lastname} placeholder={lastnamePlaceholder} onChangeText={(text) => dispatch(updateLastname(text))} />
                    </Suspense>
                    <Suspense fallback={<CustomTextInput/>}>
                    <CustomTextInput followupicon={require('../../assets/icons/Message.png')} value={email} placeholder={emailPlaceholder} onChangeText={(text) => dispatch(updateEmail(text))} />
                    </Suspense>
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

                    <Suspense fallback={<Dropdown/>}>
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
                     </Suspense>
                   <Suspense fallback={<CustomTextInput/>}>
                    <CustomTextInput
                        followupicon={require('../../assets/icons/Calendar/calendar.png')}
                        value={date}
                        placeholder={datePlaceholder}
                        onIconPress={() => setShowDatePicker(true)}
                    />
                    </Suspense>
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display={Platform.OS === "ios" ? "spinner" : "default"}
                            onChange={handleDateChange}
                        />
                    )}
                    <Suspense fallback={<CustomTextInput/>}>
                    <CustomTextInput
                        followupicon={require('../../assets/icons/Scan/scan.png')}
                        type={attachment} 
                        value={attachment ? "Photo Selected" : ""}
                        placeholder="Profile Photo"
                        onIconPress={handleImagePick}
                    />
                    </Suspense>
                    <Suspense fallback={<CustomButton/>}>
                    <CustomButton
                        title="Update"
                        customStyle={ButtonStyles.blueButton} 
                        textStyles={ButtonStyles.blueButtonText} 
                        onPress={handleUpdateProfile} 
                    />
                    </Suspense>
                   
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