import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {
  setNewPassword,
  setConfirmNewPassword,
  setAuthenticated,
} from "../../redux/actions/createPassAction";
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import ButtonStyles from '../../styles/ButtonStyles';
import CustomTextInput from '../../components/CustomTextInput';
import TextStyle from '../../styles/TextStyle';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import { useDispatch, useSelector } from "react-redux";
import { submitPassword } from '../../redux/actions/createPassAction';

const CreatePassword = props => {
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const {
    newPassword,
    confirmNewPassword,
  } = useSelector((state) => state.createPass);

  const {
    newPasswordPlaceholder,
    confirmNewPasswordPlaceholder,
  } = useSelector((state) => state.createPass);

  const validatePasswords = (newPassword, confirmNewPassword) => { 
    if (!newPassword || !confirmNewPassword) {
        alert("Both password fields are required.");
        return false;
    }

    if (newPassword.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (!/[A-Z]/.test(newPassword)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }

    if (!/[a-z]/.test(newPassword)) {
        alert("Password must contain at least one lowercase letter.");
        return false;
    }

    if (!/\d/.test(newPassword)) {
        alert("Password must contain at least one number.");
        return false;
    }

    if (!/[@$!%*?&]/.test(newPassword)) {
        alert("Password must contain at least one special character (@, $, !, %, *, ?, &).");
        return false;
    }

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match.");
        return false;
    } 

    return true; 
};

  const handleContinue = () =>{
    if (validatePasswords(newPassword, confirmNewPassword)) {
      console.log("Password successfully set!");
      // Proceed with next steps (e.g., API call)
      dispatch(submitPassword());
    }
  }
  
  const [modalVisible, setModalVisible] = useState(false);
  const goBackCall = () => {
    props.navigation.goBack();
  };
 
  const closeModel = () => {
    setModalVisible(false);
    props.navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <NavigationHeaderBack text="Create New Password" onPress={goBackCall} />
      </View>
      <View style={{flex: 8}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/images/Shield/Shield.png')}
                  style={styles.sheildImage}
                />
              </View>

              <View style={styles.inputContainer}>
                <CustomText
                  text="Create Your New Password"
                  customstyle={TextStyle.InstructionText}
                />
                <View style={styles.inputBox}>
                  <CustomTextInput
                    icon={require('../../assets/icons/Exclude.png')}
                    value={newPassword}
                    placeholder={newPasswordPlaceholder}
                    onChangeText={(text) => dispatch(setNewPassword(text))}
                    secureTextEntry
                  />
                  <CustomTextInput
                    icon={require('../../assets/icons/Exclude.png')}
                    value={confirmNewPassword}
                    placeholder={confirmNewPasswordPlaceholder}
                    onChangeText={(text) => dispatch(setConfirmNewPassword(text))}
                    secureTextEntry
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Continue"
                  customStyle={[ButtonStyles.blueButton]}
                  textStyles={ButtonStyles.blueButtonText}
                  onPress={() => setModalVisible(true)}
                  // onPress={handleContinue}
                />
              </View>

              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                    <Image
                      source={require('../../assets/images/Done.png')}
                      style={styles.doneImage}
                    />
                    <CustomText
                      text="Congratulations!"
                      customstyle={TextStyle.modalText}
                    />
                    <CustomText
                      text="Your account is ready to use"
                      customstyle={TextStyle.modalText2}
                    />
                    <View style={{margin: 20, width: '80%'}}>
                      <CustomButton
                        title="Go to Homepage"
                        customStyle={[ButtonStyles.blueButton, {padding: 5}]}
                        textStyles={ButtonStyles.blueButtonText}
                        onPress={closeModel}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    flex: 3,
    resizeMode:'contain',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
    flex: 2,
  },
  inputBox: {
    width: '100%',
    gap: 20,
  },
  buttonContainer: {
    flex: 0.7,
    marginBottom:10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 340,
    paddingTop: 40,
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
