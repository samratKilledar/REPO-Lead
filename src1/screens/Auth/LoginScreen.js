import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { loginSuccess } from '../../redux/actions/authActions'; 
=======
import { loginSuccess,updateCredential,loginUser } from '../../redux/actions/authActions'; // Import your login action
import { useSelector } from "react-redux";
>>>>>>> UATLead

const LoginScreen = (props) => {
  const [customerId, setCustomerId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginPlaceHolder = useSelector(state => state.auth.loginPlaceHolder);
  const loginValue = useSelector(state => state.auth.loginValue);

  // alert(JSON.stringify(loginPlaceHolder))
  // Validation and Login Handler
  const handleLogin = () => {
    //props.navigation.navigate('Main'); // Navigate to Dashboard after successful login
    //dispatch(loginSuccess()); // This should set isAuthenticated to true in Redux
    if (!loginValue.customerId || !loginValue.email || !loginValue.password) {
      Alert.alert('Lead', 'All fields are required!');
      return;
    }else if (!/\S+@\S+\.\S+/.test(loginValue.email)) {
      Alert.alert('Error', 'Enter a valid email address!');
      return;
    }else{
      dispatch(loginUser())
    }
    // console.log('Logging in...');
  };

const updateCustomerId=(ele)=>{
  dispatch(updateCredential()); // This should set isAuthenticated to true in Redux
}


  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              {/* Logo */}
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/images/Logo.png')}
                  style={styles.logo}
                />
              </View>

              {/* Login Header */}
              <View style={{ flex: 0.7 }}>
                <CustomText
                  text="Login to your Account"
                  customstyle={TextStyle.heading}
                />
              </View>

              {/* Input & Button Box */}
              <View style={[styles.box, {}]}>
                <CustomTextInput
                  icon={require('../../assets/icons/Profile/profile.png')}
                  value={loginValue.customerId}
                  placeholder={loginPlaceHolder.customerId}
                  onChangeText={(text) => dispatch(updateCredential({ customerId: text }))}
                  keyboardType="numeric"
                />
                <CustomTextInput
                  icon={require('../../assets/icons/Message/message.png')}
                  value={loginValue.email}
                  placeholder={loginPlaceHolder.email}
                  onChangeText={(text) => dispatch(updateCredential({ email: text }))}
                  keyboardType="email-address"
                />
                <CustomTextInput
                  icon={require('../../assets/icons/Lock/lock.png')}
                  value={loginValue.password}
                  placeholder={loginPlaceHolder.password}
                  onChangeText={(text) => dispatch(updateCredential({ password: text }))}
                  secureTextEntry
                />
              </View>

              <View style={{ flex: 3, alignItems: 'center' }}>
                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                  <Pressable
                    style={[styles.checkbox, isChecked && styles.checked]}
                    onPress={() => setIsChecked(!isChecked)}>
                    {isChecked && (
                      <Image
                        source={require("../../assets/icons/check.png")} // Use your checked icon here
                        style={styles.checkIcon}
                      />
                    )}
                  </Pressable>
                  <CustomText customstyle={styles.rememberMe} text="Remember me"></CustomText>
                </View>

                {/* Sign In Button */}
                <View style={{paddingRight:10 , paddingLeft:10}}>
                <CustomButton
                  title="Sign in"
                  customStyle={{ width: width - 30 }}
                  textStyles={ButtonStyles.blueButtonText}
                  onPress={handleLogin}
                />
                </View>
                

                {/* Forgot Password */}
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <CustomText
                      text="Forgot the password?"
                      customstyle={TextStyle.forgotPasswordLogin}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inner: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 380,
    height: 81.23,
    marginBottom: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  rememberMe: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: '#2B2162',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#2B2162',
  },
  checkIcon: {
    width: 14,
    height: 10,
    tintColor: "#fff", // Optional: Adjust icon color
    resizeMode: "contain",
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
