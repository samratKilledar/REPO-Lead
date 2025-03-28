// import React, { useState, useEffect } from 'react';
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
//   Dimensions,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomText from '../../components/CustomText';
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import TextStyle from '../../styles/TextStyle';
// import ButtonStyles from '../../styles/ButtonStyles';
// import Loader from '../../styles/Loader';
// import { useDispatch } from 'react-redux';
// import { getReadAllLead,updateCredential,loginUser } from '../../redux/actions/authActions'; 
// import { useSelector } from "react-redux";
// import { getItem } from '../../api/storageServices';
// import { PermissionsAndroid } from 'react-native';
// const { width, height } = Dimensions.get('window');

// const LoginScreen = props => {
//   const [loading, setLoading] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const { width } = useWindowDimensions();
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const loginPlaceHolder = useSelector(state => state.auth.loginPlaceHolder);
//   const loginValue = useSelector(state => state.auth.loginValue);

//   useEffect(() => {
//     dispatch(getReadAllLead);
  
//     const checkAuthToken = async () => {
//       try {
//         const user = await getItem('authToken');
//         if (user) {
//           navigation.replace('HomeStack');
//         }
//       } catch (error) {
//         console.error('Error retrieving auth token:', error);
//       }
//     };
  

//     requestPermissions();
//     checkAuthToken();
//     loadRememberedCredentials();
//   }, []);

//   const requestPermissions = async () => {
//     try {
//       if (Platform.OS === 'android') {
//         const permissions = [];
//         permissions.push(PermissionsAndroid.PERMISSIONS.CAMERA);
  
//         if (Platform.Version >= 33) {
//           // Android 13+ (API 33+)
//           permissions.push(
//             PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//             PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
//             PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
//           );
//         } else {
//           // Android 12 and below
//           permissions.push(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
//         }

//         const grantedPermissions = await PermissionsAndroid.requestMultiple(permissions);
//         let allPermissionsGranted = true;
//         for (const permission of permissions) {
//           if (grantedPermissions[permission] !== PermissionsAndroid.RESULTS.GRANTED) {
//             console.log(`❌ Permission NOT granted: ${permission}`);
//             allPermissionsGranted = false;
//           } else {
//             console.log(`✅ Permission granted: ${permission}`);
//           }
//         }
  
//         if (allPermissionsGranted) {
//           console.log("🎉 All permissions successfully granted!");
//         } else {
//           Alert.alert("Permissions Required", "Some permissions were denied. Please enable them in settings.");
//         }
//       }
//     } catch (err) {
//       console.warn("Error requesting permissions:", err);
//     }
//   };
  
//   const loadRememberedCredentials = async () => {
//     try {
//       const storedCredentials = await AsyncStorage.getItem('loginCredentials');
//       console.log("🔍 Saved Credentials in Storage:", storedCredentials);
//       if (storedCredentials) {
//         const { customerId, email, password } = JSON.parse(storedCredentials);
//         dispatch(updateCredential({ customerId, email, password }));
//         setIsChecked(true);
//       }
//     } catch (error) {
//       console.error('Error loading stored credentials:', error);
//     }
//   };

//   const saveCredentials = async () => {
//     try {
//       if (isChecked) {
//         const credentials = JSON.stringify({
//           customerId: loginValue.customerId,
//           email: loginValue.email,
//           password: loginValue.password,
//         });
//         await AsyncStorage.setItem('loginCredentials', credentials);
//         console.log("✅ Credentials Saved in Storage:", credentials); 
//       } else {
//         await AsyncStorage.removeItem('loginCredentials'); 
//         console.log("❌ Credentials Removed from Storage"); 
//       }
//     } catch (error) {
//       console.error('Error saving credentials:', error);
//     }
//   };
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
//       saveCredentials();
//       dispatch(loginUser());
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={styles.inner}>
            
//               <View style={{ flex: 1, justifyContent: 'center' }}>
//                 <Image
//                   source={require('../../assets/images/Logo.png')}
//                   style={styles.logo}
//                 />
//               </View>

//               <View style={{ flex: 0.7 }}>
//                 <CustomText
//                   text="Login to your Account"
//                   customstyle={TextStyle.heading}
//                 />
//               </View>

//               <View style={styles.box}>
//                 <CustomTextInput
//                   icon={require('../../assets/icons/Profile/profile.png')}
//                   value={loginValue.customerId}
//                   placeholder={loginPlaceHolder.customerId}
//                   onChangeText={text =>
//                     dispatch(updateCredential({ customerId: text }))
//                   }
//                   keyboardType="numeric"
//                 />
//                 <CustomTextInput
//                   icon={require('../../assets/icons/Message/message.png')}
//                   value={loginValue.email}
//                   placeholder={loginPlaceHolder.email}
//                   onChangeText={text =>
//                     dispatch(updateCredential({ email: text }))
//                   }
//                   keyboardType="email-address"
//                 />
//                 <CustomTextInput
//                   icon={require('../../assets/icons/Lock/lock.png')}
//                   value={loginValue.password}
//                   placeholder={loginPlaceHolder.password}
//                   onChangeText={text =>
//                     dispatch(updateCredential({ password: text }))
//                   }
//                   secureTextEntry
//                 />
//               </View>

//               <View style={{ flex: 3, alignItems: 'center' }}>
               
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

//                 <View>
//                   <CustomButton
//                     title="Sign in"
//                     customStyle={{width: width * 0.9, alignSelf: 'center'}}
//                     textStyles={ButtonStyles.blueButtonText}
//                     onPress={handleLogin}
//                   />
//                 </View>

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
//     alignItems: 'center',
//     width: width * 0.9,
//   },
//   logo: {
//     width: width * 0.9,
//     height: 81.23,
//     resizeMode: 'contain'
//   },
//   box: {
//     flex: 1,
//     alignItems: 'center',
//     gap: 20,
//     width: '100%',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 20,
//   },
//     rememberMe: {
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
//         backgroundColor: '#2B2162',
//       },
//       checkIcon: {
//         width: 14,
//         height: 10,
//         tintColor: '#fff',
//         resizeMode: 'contain',
//       },
//       checkmark: {
//         color: '#fff',
//         fontSize: 14,
//         fontWeight: 'bold',
//       },
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
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const LoginScreen = props => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginPlaceHolder = useSelector(state => state.auth.loginPlaceHolder);
  const loginValue = useSelector(state => state.auth.loginValue);

  useEffect(() => {
    //dispatch(getReadAllLead);
  
    // const checkAuthToken = async () => {
    //   try {
    //     const user = await getItem('authToken');
    //     if (user) {
    //       navigation.replace('HomeStack');
    //     }
    //   } catch (error) {
    //     console.error('Error retrieving auth token:', error);
    //   }
    // };
  

    requestPermissions();
    //checkAuthToken();
    loadRememberedCredentials();
  }, []);

  const requestPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const permissions = [];
        permissions.push(PermissionsAndroid.PERMISSIONS.CAMERA);
  
        if (Platform.Version >= 33) {
          // Android 13+ (API 33+)
          permissions.push(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
             PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
          );
        } else {
          // Android 12 and below
          permissions.push(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        }

        const grantedPermissions = await PermissionsAndroid.requestMultiple(permissions);
        let allPermissionsGranted = true;
        for (const permission of permissions) {
          if (grantedPermissions[permission] !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log(`❌ Permission NOT granted: ${permission}`);
            allPermissionsGranted = false;
          } else {
            console.log(`✅ Permission granted: ${permission}`);
          }
        }
  
        if (allPermissionsGranted) {
          console.log("🎉 All permissions successfully granted!");
        } else {
          Alert.alert("Permissions Required", "Some permissions were denied. Please enable them in settings.");
        }
      }
    } catch (err) {
      console.warn("Error requesting permissions:", err);
    }
  };
  
  const loadRememberedCredentials = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('loginCredentials');
      console.log("🔍 Saved Credentials in Storage:", storedCredentials);
      if (storedCredentials) {
        const { customerId, email, password } = JSON.parse(storedCredentials);
        dispatch(updateCredential({ customerId, email, password }));
        setIsChecked(true);
      }
    } catch (error) {
      console.error('Error loading stored credentials:', error);
    }
  };

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
        await AsyncStorage.removeItem('loginCredentials'); 
        console.log("❌ Credentials Removed from Storage"); 
      }
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };
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
      saveCredentials();
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
            
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/images/Logo.png')}
                  style={styles.logo}
                />
              </View>

              <View style={{ flex: 0.7 }}>
                <CustomText
                  text="Login to your Account"
                  customstyle={TextStyle.heading}
                />
              </View>

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

                <View>
                  <CustomButton
                    title="Sign in"
                    customStyle={{width: width * 0.9, alignSelf: 'center'}}
                    textStyles={ButtonStyles.blueButtonText}
                    onPress={handleLogin}
                  />
                </View>

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
      checkmark: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },
});
export default LoginScreen;