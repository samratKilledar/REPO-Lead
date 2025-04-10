import React, {useState} from 'react';
import {
  View,Alert,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ToastAndroid
} from 'react-native';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';
import {  updateForgotPassEmail,forgotPassUser } from '../../redux/actions/forgotPassAction';
import { useDispatch, useSelector } from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
 

const ForgotPassword = props => {

  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const [email, setEmail] = useState('');
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const emailPlaceHolder = useSelector(state => state.forgotPassReducer.emailPlaceHolder);
  const emailValue = useSelector(state => state.forgotPassReducer.emailValue);
  const handleEmail = () => { 
    if (!emailValue?.email || emailValue.email.trim() === "") {
      showToast('Email is required');
        return ;
    } else if (!/\S+@\S+\.\S+/.test(emailValue.email)) {
      showToast('Enter a valid email address!');
        return ;
    }

   
    dispatch(forgotPassUser())
        .then((response) => {
            if (response.success) {
                Alert.alert('Success', response.message, [
                    {
                        text: 'OK',
                        onPress: () => props.navigation.navigate('ResetPassword') // ✅ Navigate on success
                    }
                ]);
            } else {
                Alert.alert('Something went wrong!');
            }
        })
        .catch((error) => {
            Alert.alert('Error', error.message || 'An error occurred!');
        });
};


  const goBackCall=()=>{
    props.navigation.goBack();
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={{flex: 1,justifyContent:"flex-start"}}>
      <NavigationHeaderBack text="Forgot Password" onPress={goBackCall}/>
      </View>
      <View style={{flex:8}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>

            <View style={styles.lockImageContainer}>
              <Image
                source={require('../../assets/images/Lock/LockImage.png')}
                style={styles.lockImage}
              />
            </View>

            <View style={styles.instructionContainer}>
              <CustomText
                text="Select which contact details should we use to reset your password"
                customstyle={TextStyle.InstructionText}
              />
              <CustomTextInput
                icon={require('../../assets/icons/Message/message.png')}
                value={emailValue.email}
                onChangeText={(text)=> dispatch(updateForgotPassEmail({ email: text }))}
                placeholder={emailPlaceHolder.email}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                title="Continue"
                customStyle={[ButtonStyles.blueButton]}
                textStyles={ButtonStyles.blueButtonText}
                 onPress={() => props.navigation.navigate('ResetPassword')}
               // onPress={handleEmail}
              />
            </View>
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
  lockImageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  instructionContainer: {
    flex: 1.5,
    gap: 24,
  },
  buttonContainer: {
    flex: 0.5,
  },
});

export default ForgotPassword;
