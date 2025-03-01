import React, { useState,useEffect } from 'react';
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
  Alert, 
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';
import Loader from '../../styles/Loader';
import { useDispatch } from 'react-redux';
import { getReadAllLead,updateCredential,loginUser } from '../../redux/actions/authActions'; 
import { useSelector } from "react-redux";
import { getItem } from '../../api/storageServices';
import { PermissionsAndroid } from 'react-native';
const { width, height } = Dimensions.get('window');

const LoginScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginPlaceHolder = useSelector(state => state.auth.loginPlaceHolder);
  const loginValue = useSelector(state => state.auth.loginValue);

  useEffect(() => {
    dispatch(getReadAllLead);
  
    const checkAuthToken = async () => {
      try {
        const user = await getItem('authToken');
        if (user) {
          navigation.replace('HomeStack');
        }
      } catch (error) {
        console.error("Error retrieving auth token:", error);
      }
    };
  
    const requestPermissions = async () => {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES, 
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
  
        if (
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] !== PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] !== PermissionsAndroid.RESULTS.GRANTED || // Check for Android 13+
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] !== PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] !== PermissionsAndroid.RESULTS.GRANTED
        ) {
          Alert.alert("Permissions Required", "Please enable Camera and Gallery permissions from settings.");
        }
      } catch (err) {
        console.warn(err);
      }
    };
  
    checkAuthToken();
    requestPermissions();
  }, []);
  
  
  // alert(JSON.stringify(loginPlaceHolder))
  // Validation and Login Handler
  const handleLogin = () => {
    if (!loginValue.customerId || !loginValue.email || !loginValue.password) {
      Alert.alert('Lead', 'All fields are required!');
      return;
    } else if (!/\S+@\S+\.\S+/.test(loginValue.email)) {
      Alert.alert('Error', 'Enter a valid email address!');
      return;
    } else {
      setLoading(true);
      dispatch(loginUser());

      setTimeout(() => {
        setLoading(false); 
        navigation.navigate('Main'); 
      }, 3000);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>

              {/* Logo */}
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
              </View>

              {/* Login Header */}
              <View style={{ flex: 0.7 }}>
                <CustomText text="Login to your Account" customstyle={TextStyle.heading} />
              </View>

              {/* Input & Button Box */}
              <View style={styles.box}>
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
                  <Pressable style={[styles.checkbox, isChecked && styles.checked]} onPress={() => setIsChecked(!isChecked)}>
                    {isChecked && (
                      <Image source={require("../../assets/icons/check.png")} style={styles.checkIcon} />
                    )}
                  </Pressable>
                  <CustomText customstyle={styles.rememberMe} text="Remember me" />
                </View>

                {/* Sign In Button */}
                <View style={{ paddingRight: 10, paddingLeft: 10 }}>
                  <CustomButton
                    title="Sign in"
                    customStyle={{ width: width - 30 }}
                    textStyles={ButtonStyles.blueButtonText}
                    onPress={handleLogin}
                  />
                </View>

                {/* Forgot Password */}
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <CustomText text="Forgot the password?" customstyle={TextStyle.forgotPasswordLogin} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Lottie Full-Screen Animation (Displayed when loading is true) */}
      {loading && <Loader />}
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
    alignItems: 'center',
    width: width * 0.9,
  },
  logo: {
    width: width * 0.9,
    height: 81.23,
    resizeMode: 'contain'
  },
  box: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
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
});

export default LoginScreen;
