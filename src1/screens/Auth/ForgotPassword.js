import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import NavigationHeaderBack from '../../components/NavigationHeaderBack';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';
// import {useNavigation} from '@react-navigation/native';

const ForgotPassword = props => {
  const [email, setEmail] = useState('');
  // const navigation = useNavigation();
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
            {/* NavigationHeaderBack Header */}

            {/* Lock Image Container */}
            <View style={styles.lockImageContainer}>
              <Image
                source={require('../../assets/images/Lock/LockImage.png')}
                style={styles.lockImage}
              />
            </View>

            {/* Instruction Text & Input */}
            <View style={styles.instructionContainer}>
              <CustomText
                text="Select which contact details should we use to reset your password"
                customstyle={TextStyle.InstructionText}
              />
              <CustomTextInput
                icon={require('../../assets/icons/Message/message.png')}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
              />
            </View>

            {/* Continue Button */}
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Continue"
                customStyle={[ButtonStyles.blueButton]}
                textStyles={ButtonStyles.blueButtonText}
                onPress={() => props.navigation.navigate('ResetPassword')}
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
    justifyContent: 'center', // Push the image to the bottom
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
