// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Pressable,
//   TouchableWithoutFeedback,
//   Keyboard,
//   useWindowDimensions,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import CustomText from '../../components/CustomText';
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import TextStyle from '../../styles/TextStyle';
// import ButtonStyles from '../../styles/ButtonStyles';
// import {
//   getReadAllLead,
//   updateCredential,
//   loginUser,
// } from '../../redux/actions/authActions'; // Import your login action
// import {getItem} from '../../api/storageServices';
// import {useDispatch, useSelector} from 'react-redux';
// import Loader from '../../styles/Loader';
// import {state} from '../../api/mainApi';

// const LoginScreen = props => {
//   const [loading, setLoading] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const {width} = useWindowDimensions();
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const loginPlaceHolder = useSelector(state => state.auth.loginPlaceHolder);
//   const loginValue = useSelector(state => state.auth.loginValue);

//   useEffect(() => {
//     const checkAuthToken = async () => {
//       try {
//         const user = await getItem('authToken');
//         if (
//           user != 'Network request failed' &&
//           user != null &&
//           user != 'null' &&
//           user != '' &&
//           user != undefined
//         ) {
//           navigation.navigate('Main');
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error retrieving auth token:', error);
//       }
//     };

//     checkAuthToken();
//   }, []); // Ensure dependencies are correct

//   // alert(JSON.stringify(loginPlaceHolder))
//   // Validation and Login Handler
//   const handleLogin = () => {
//     if (!loginValue.customerId || !loginValue.email || !loginValue.password) {
//       Alert.alert('Lead', 'All fields are required!');
//       return;
//     } else if (!/\S+@\S+\.\S+/.test(loginValue.email)) {
//       Alert.alert('Error', 'Enter a valid email address!');
//       return;
//     } else {
//       setLoading(true);
//       dispatch(loginUser());
//     }
//   };

//   return (
//     <View style={{flex: 1}}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}>
//         <ScrollView contentContainerStyle={{flexGrow: 1}}>
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={styles.inner}>
//               {/* Logo */}
//               <View style={{flex: 1, justifyContent: 'center'}}>
//                 <Image
//                   source={require('../../assets/images/Logo.png')}
//                   style={styles.logo}
//                 />
//               </View>

//               {/* Login Header */}
//               <View style={{flex: 0.7}}>
//                 <CustomText
//                   text="Login to your Account"
//                   customstyle={TextStyle.heading}
//                 />
//               </View>

//               {/* Input & Button Box */}
//               <View style={styles.box}>
//                 <CustomTextInput
//                   icon={require('../../assets/icons/Profile/profile.png')}
//                   value={loginValue.customerId}
//                   placeholder={loginPlaceHolder.customerId}
//                   onChangeText={text =>
//                     dispatch(updateCredential({customerId: text}))
//                   }
//                   keyboardType="numeric"
//                 />
//                 <CustomTextInput
//                   icon={require('../../assets/icons/Message/message.png')}
//                   value={loginValue.email}
//                   placeholder={loginPlaceHolder.email}
//                   onChangeText={text =>
//                     dispatch(updateCredential({email: text}))
//                   }
//                   keyboardType="email-address"
//                 />
//                 <CustomTextInput
//                   icon={require('../../assets/icons/Lock/lock.png')}
//                   value={loginValue.password}
//                   placeholder={loginPlaceHolder.password}
//                   onChangeText={text =>
//                     dispatch(updateCredential({password: text}))
//                   }
//                   secureTextEntry
//                 />
//               </View>

//               <View style={{flex: 3, alignItems: 'center'}}>
//                 {/* Checkbox */}
//                 <View style={styles.checkboxContainer}>
//                   <Pressable
//                     style={[styles.checkbox, isChecked && styles.checked]}
//                     onPress={() => setIsChecked(!isChecked)}>
//                     {isChecked && (
//                       <Image
//                         source={require('../../assets/icons/check.png')}
//                         style={styles.checkIcon}
//                       />
//                     )}
//                   </Pressable>
//                   <CustomText
//                     customstyle={styles.rememberMe}
//                     text="Remember me"
//                   />
//                 </View>

//                 {/* Sign In Button */}
//                 <View style={{paddingRight: 10, paddingLeft: 10}}>
//                   <CustomButton
//                     title="Sign in"
//                     customStyle={{width: width - 30}}
//                     textStyles={ButtonStyles.blueButtonText}
//                     onPress={handleLogin}
//                   />
//                 </View>

//                 {/* Forgot Password */}
//                 <View>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('ForgotPassword')}>
//                     <CustomText
//                       text="Forgot the password?"
//                       customstyle={TextStyle.forgotPasswordLogin}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Lottie Full-Screen Animation (Displayed when loading is true) */}
//       {loading && <Loader />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   inner: {
//     flex: 1,
//     // width: '100%',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 380,
//     height: 81.23,
//     // marginBottom: 10,
//   },
//   box: {
//     flex: 1,
//     alignItems: 'center',
//     gap: 20,
//     justifyContent: 'flex-start',
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 20,
//   },
//   rememberMe: {
//     fontWeight: '600',
//     fontSize: 14,
//     lineHeight: 19.6,
//     letterSpacing: 0.2,
//   },
//   checkbox: {
//     width: 24,
//     height: 24,
//     borderWidth: 3,
//     borderColor: '#2B2162',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checked: {
//     backgroundColor: '#2B2162',
//   },
//   checkIcon: {
//     width: 14,
//     height: 10,
//     tintColor: '#fff', // Optional: Adjust icon color
//     resizeMode: 'contain',
//   },
//   checkmark: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;


import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Added AsyncStorage
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';
import {
  getReadAllLead,
  updateCredential,
  loginUser,
} from '../../redux/actions/authActions';
import { getItem } from '../../api/storageServices';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../styles/Loader';

const LoginScreen = props => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginPlaceHolder = useSelector(state => state.auth.loginPlaceHolder);
  const loginValue = useSelector(state => state.auth.loginValue);

  useEffect(() => {
    const checkAuthToken = async () => {
      try {
        const user = await getItem('authToken');
        if (
          user != 'Network request failed' &&
          user != null &&
          user != 'null' &&
          user != '' &&
          user != undefined
        ) {
          navigation.navigate('Main');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error retrieving auth token:', error);
      }
    };

    checkAuthToken();
    loadRememberedCredentials(); // Load stored credentials when the screen loads
  }, []);

  // Load saved login credentials if "Remember Me" was checked
  const loadRememberedCredentials = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('loginCredentials');
      console.log("🔍 Saved Credentials in Storage:", storedCredentials);
      if (storedCredentials) {
        const { customerId, email, password } = JSON.parse(storedCredentials);
        dispatch(updateCredential({ customerId, email, password }));
        setIsChecked(true); // Set checkbox to checked if credentials exist
      }
    } catch (error) {
      console.error('Error loading stored credentials:', error);
    }
  };

  // Save login credentials if "Remember Me" is checked
  const saveCredentials = async () => {
    try {
      if (isChecked) {
        const credentials = JSON.stringify({
          customerId: loginValue.customerId,
          email: loginValue.email,
          password: loginValue.password,
        });
        await AsyncStorage.setItem('loginCredentials', credentials);
        console.log("✅ Credentials Saved in Storage:", credentials); 
      } else {
        await AsyncStorage.removeItem('loginCredentials'); // Clear saved data if unchecked
        console.log("❌ Credentials Removed from Storage"); 
      }
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  // Handle Login
  const handleLogin = () => {
    if (!loginValue.customerId || !loginValue.email || !loginValue.password) {
      Alert.alert('Lead', 'All fields are required!');
      return;
    } else if (!/\S+@\S+\.\S+/.test(loginValue.email)) {
      Alert.alert('Error', 'Enter a valid email address!');
      return;
    } else {
      setLoading(true);
      saveCredentials(); // Save credentials before logging in
      dispatch(loginUser());
    }
  };

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
              <View style={styles.box}>
                <CustomTextInput
                  icon={require('../../assets/icons/Profile/profile.png')}
                  value={loginValue.customerId}
                  placeholder={loginPlaceHolder.customerId}
                  onChangeText={text =>
                    dispatch(updateCredential({ customerId: text }))
                  }
                  keyboardType="numeric"
                />
                <CustomTextInput
                  icon={require('../../assets/icons/Message/message.png')}
                  value={loginValue.email}
                  placeholder={loginPlaceHolder.email}
                  onChangeText={text =>
                    dispatch(updateCredential({ email: text }))
                  }
                  keyboardType="email-address"
                />
                <CustomTextInput
                  icon={require('../../assets/icons/Lock/lock.png')}
                  value={loginValue.password}
                  placeholder={loginPlaceHolder.password}
                  onChangeText={text =>
                    dispatch(updateCredential({ password: text }))
                  }
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
                        source={require('../../assets/icons/check.png')}
                        style={styles.checkIcon}
                      />
                    )}
                  </Pressable>
                  <CustomText
                    customstyle={styles.rememberMe}
                    text="Remember me"
                  />
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
  },
  logo: {
    width: 380,
    height: 81.23,
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
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});

export default LoginScreen;

