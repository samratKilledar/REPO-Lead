import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Navigation from '../../components/Navigation';
import ButtonStyles from '../../styles/ButtonStyles';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';

const ResetPassword = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleInputChange = (text, index) => {
    if (text.length > 1) return;
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <Navigation text="Forgot Password" />

      <View style={styles.centerContainer}>
        <CustomText
          text="Code has been sent to"
          customstyle={styles.instructionText}
        />
        <CustomText
          text="daniel_austin@yourdomain.com"
          customstyle={styles.emailText}
        />

        <View style={styles.otpContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <CustomText
          text="Resend code in 53 s"
          customstyle={styles.resendText}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Verify"
          customStyle={ButtonStyles.blueButton}
          textStyles={ButtonStyles.blueButtonText}
        />
      </View>
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

  centerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'conter',

  },

  instructionText: {
    fontFamily: "Urbanist",
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },

  emailText: {
    fontFamily:"Urbanist",
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 8,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },

  resendText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default ResetPassword;
