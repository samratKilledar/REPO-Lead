import React, {useState} from 'react';
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
  Alert,TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions/authActions'; // Import your login action

const LoginScreen = (props) => {
  const [customerId, setCustomerId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Validation and Login Handler
  const handleLogin = () => {
    //props.navigation.navigate('Main'); // Navigate to Dashboard after successful login
    dispatch(loginSuccess()); // This should set isAuthenticated to true in Redux
    if (!customerId || !email || !password) {
      Alert.alert('Lead', 'All fields are required!');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Enter a valid email address!');
      return;
    }

    console.log('Logging in...');
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              {/* Logo */}
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/Logo.png')}
                  style={styles.logo}
                />
              </View>

              {/* Login Header */}
              <View style={{flex: 0.7}}>
                <CustomText
                  text="Login to your Account"
                  customstyle={TextStyle.heading}
                />
              </View>

              {/* Input & Button Box */}
              <View style={[styles.box, {}]}>
                <CustomTextInput
                  icon={require('../../assets/icons/Profile/profile.png')}
                  value={customerId}
                  placeholder="Customer Id"
                  onChangeText={setCustomerId}
                  keyboardType="numeric"
                />
                <CustomTextInput
                  icon={require('../../assets/icons/Message/message.png')}
                  value={email}
                  placeholder="Email"
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <CustomTextInput
                  icon={require('../../assets/icons/Lock/lock.png')}
                  value={password}
                  placeholder="Password"
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <View style={{flex: 3, alignItems: 'center'}}>
                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                  <Pressable
                    style={[styles.checkbox, isChecked && styles.checked]}
                    onPress={() => setIsChecked(!isChecked)}>
                    {isChecked && <CustomText customstyle={styles.checkmark} text="✓"></CustomText>}
                  </Pressable>
                  <CustomText customstyle={styles.rememberMe} text="Remember me"></CustomText>
                </View>

                {/* Sign In Button */}
                <CustomButton
                  title="Sign in"
                  customStyle={{width: width - 30}}
                  textStyles={ButtonStyles.blueButtonText}
                  onPress={handleLogin}
                />

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
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
