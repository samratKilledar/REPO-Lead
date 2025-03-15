import React, { useState, useEffect } from 'react';
import { 
  View, TextInput, StyleSheet, KeyboardAvoidingView, 
  ScrollView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity
} from 'react-native';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import ButtonStyles from '../../styles/ButtonStyles';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import { useDispatch, useSelector } from 'react-redux';

const ResetPassword = props => {
  const dispatch = useDispatch();
  const emailValue = useSelector(state => state.forgotPassReducer.emailValue);
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [resendVisible, setResendVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      setResendVisible(false);
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setResendVisible(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleInputChange = (text, index) => {
    if (text.length > 1) return;
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Check if all OTP fields are filled
    setIsButtonDisabled(newCode.includes(''));
  };

  const handleResendOTP = () => {
    setTimer(60); 
  };

  const goBackCall = () => {
    props.navigation.goBack();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <View style={{flex: 1, justifyContent: "flex-start"}}>
        <NavigationHeaderBack text="Forgot Password" onPress={goBackCall}/>
      </View>
      <View style={{flex: 8}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>

              {/* Center Content */}
              <View style={styles.centerContainer}>
                <CustomText 
                  text="Code has been sent to" 
                  customstyle={styles.instructionText} 
                />
                <CustomText 
                  text={emailValue.email} 
                  customstyle={styles.emailText} 
                />

                {/* OTP Input Fields */}
                <View style={styles.otpContainer}>
                  {code.map((digit, index) => (
                    <TextInput
                      key={index}
                      style={styles.otpInput}
                      value={digit}
                      onChangeText={text => handleInputChange(text, index)}
                      keyboardType="numeric"
                      maxLength={1}
                      textAlign="center"
                    />
                  ))}
                </View>

                {/* Resend OTP Timer */}
                {resendVisible ? (
                  <TouchableOpacity onPress={handleResendOTP}>
                    <CustomText 
                      text="Resend OTP" 
                      customstyle={[styles.resendText, { color: 'blue' }]} 
                    />
                  </TouchableOpacity>
                ) : (
                  <CustomText 
                    text={`Resend code in ${timer} s`} 
                    customstyle={styles.resendText} 
                  />
                )}
              </View>

              {/* Verify Button (Disabled until OTP is entered) */}
              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Verify"
                  customStyle={[ButtonStyles.blueButton, { opacity: isButtonDisabled ? 0.5 : 1 }]}  
                  textStyles={ButtonStyles.blueButtonText}
                  onPress={() => props.navigation.navigate('CreatePassword')}
                  disabled={isButtonDisabled}
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
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  centerContainer: {
    flex: 5.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  instructionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  resendText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flex: 0.4,
  },
});

export default ResetPassword;
