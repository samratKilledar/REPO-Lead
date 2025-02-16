import React from 'react';
import { View,Image, StyleSheet, TouchableOpacity } from 'react-native';
import Navigation from '../../components/Navigation';
import CustomText from '../../components/CustomText'; // Custom Text Component
import CustomTextInput from '../../components/CustomTextInput'; // Custom TextInput Component
import CustomButton from '../../components/CustomButton'; // Custom Button Component
import TextStyle from '../../styles/TextStyle';
import ButtonStyles from '../../styles/ButtonStyles';

const ForgotPassword = (props) => {
  const [email, setEmail] = React.useState('');
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Navigation Header */}
        <Navigation text="Forgot Password"/>
      {/* Lock Image */}
      <Image 
        source={require('../../assets/images/Lock/LockImage2x.png')} // Ensure this file exists
        style={styles.lockImage}
      />
     <View style={styles.instrucontainer}>
      {/* Instruction Text */}
      <CustomText 
        text="Select which contact details should we use to reset your password" 
        customstyle={TextStyle.InstructionText}
      />

      {/* Email Input Field */}
      <View>

        <CustomTextInput 
          icon={require('../../assets/icons/Message/message2x.png')}
          type={email}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <CustomButton 
          title="Continue" 
          customStyle={ButtonStyles.blueButton} 
          textStyles={ButtonStyles.blueButtonText} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 48,
    paddingLeft: 24,
    justifyContent: 'space-between',
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    gap: 12,
  },
  instrucontainer:{
    //width: 380,
   // height: 128,
    gap: 24,
    
  },
   
  arrowIcon:{
    width: 30,
    height: 30,
  },

  lockImage: {
    width: 240,
    height: 240,
    alignSelf: 'center',
  },

  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
});

export default ForgotPassword;