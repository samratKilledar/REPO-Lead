import React, { useState } from "react";
import { 
  View, Image, StyleSheet, Text, Pressable, 
  TouchableWithoutFeedback, Keyboard, useWindowDimensions, 
  KeyboardAvoidingView, Platform 
} from "react-native";
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from "../../styles/TextStyle";
import ButtonStyles from "../../styles/ButtonStyles";

const LoginScreen = () => {
  const [customerId, setCustomerId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image source={require("../../assets/images/Logo.png")} style={styles.logo} />
          </View>

         
          <View style={{ flex: 0.4 }}>
            <CustomText text="Login to your Account" customstyle={TextStyle.heading} />
          </View>

          <View style={styles.box}>
            <CustomTextInput 
              icon={require('../../assets/icons/Profile/profile3x.png')}
              type={customerId}
              value={customerId}
              placeholder="Customer Id"
              onChangeText={setCustomerId}
            />
            <CustomTextInput 
              icon={require('../../assets/icons/Message/message3x.png')}
              type={email}
              value={email}
              placeholder="Email"
              onChangeText={setEmail}
            />
            <CustomTextInput 
              icon={require('../../assets/icons/Exclude.png')}
              type={password}
              value={password}
              placeholder="Password"
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={{ flex: 3, alignItems: "center" }}>
            <View style={styles.checkboxContainer}>
              <Pressable style={[styles.checkbox, isChecked && styles.checked]} onPress={() => setIsChecked(!isChecked)}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
              <Text style={styles.rememberMe}>Remember me</Text>
            </View>

            
            <CustomButton title="Sign in" customStyle={{ width: width - 30 }} textStyles={ButtonStyles.blueButtonText} />

            <CustomText text="Forgot the password?" customstyle={TextStyle.forgotPasswordLogin} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  inner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 380,
    height: 81.23,
    marginBottom: 10,
  },
  box: {
    flex: 1.6,
    alignItems: "center",
    gap: 20,
    justifyContent: "flex-end",
    padding: 20
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  rememberMe: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: "#2B2162",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#2B2162",
  },
  checkmark: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
