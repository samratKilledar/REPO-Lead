import React, { useState } from 'react';
import { View, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Navigation from '../../components/Navigation';
import ButtonStyles from '../../styles/ButtonStyles';
import CustomTextInput from '../../components/CustomTextInput';
import TextStyle from '../../styles/TextStyle';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
const CreatePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Navigation text="Create New Password" />

            <Image
                source={require('../../assets/images/Shield.png')}
                style={styles.SheildImage}
            />
            <View style={styles.inputcontainer} >
                <CustomText
                    text="Create Your New Password"
                    customstyle={TextStyle.InstructionText}
                />
                <View style={styles.inputbox}>
                    <View style={{ marginBottom: 20 }}>
                        <CustomTextInput
                            icon={require('../../assets/icons/Exclude.png')}
                            type={password}
                            value={password}
                            placeholder="Password"
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <CustomTextInput
                        icon={require('../../assets/icons/Exclude.png')}
                        type={confirmPassword}
                        value={confirmPassword}
                        placeholder="Password"
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Continue"
                    customStyle={ButtonStyles.blueButton}
                    textStyles={ButtonStyles.blueButtonText}
                    onPress={() => setModalVisible(true)}
                />
            </View>

            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Image
                            source={require('../../assets/images/Done.png')} 
                            style={styles.doneImage}
                        />
                        <CustomText text="Congratulations!" customstyle={TextStyle.modalText} />
                        <CustomText text="Your account is ready to use" customstyle={TextStyle.modalText2} />

                        <CustomButton
                            title="Go to HomePage"
                            onPress={() => setModalVisible(false)}
                            customStyle={ButtonStyles.modalButton}
                            textStyles={ButtonStyles.blueButtonText}
                        />

                    </View>
                </View>
            </Modal>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingRight: 24,
        paddingBottom: 48,
        paddingLeft: 24,
        justifyContent: 'space-between',
    },
    SheildImage: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    inputBox: {
        width: '100%',
        gap: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
    },

    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 340,
        height: 446,
        paddingTop: 40,
        paddingHorizontal: 32,
        paddingBottom: 32,
        gap: 32,
        borderRadius: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    doneImage: {
        width: 186,
        height: 180,
    },

});

export default CreatePassword;
