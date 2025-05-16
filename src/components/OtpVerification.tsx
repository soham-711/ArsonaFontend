

import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  TextInput as RNTextInput,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
type NavigationProp = {
  navigate: (
    screen: 'Register' | 'Login' | 'ForgotPassword' | 'Dashboard' | 'ResetPassword',
  ) => void;
  reset: (state: { index: number; routes: { name: string }[] }) => void; // ✅ Added reset method
};


const { width } = Dimensions.get('window');


interface OtpVerificationProps {
  navigation: NavigationProp;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ navigation }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const inputs = useRef<RNTextInput[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
   return null;
  }
};
  const handleVerify = async () => {
    const fullOtp = otp.join('');

    if (fullOtp.length !== 4) {
      Alert.alert('Error', 'Please enter the full 4-digit OTP.');
      return;
    }

    try {
      const value=await getData()
   console.log(value)
   console.log(value.userData.email)
   const email=value.userData.email;
   if(!value?.userData?.email){
    return Alert.alert('Internal server error')
   }
     await axios.post(
  'https://arsona-backend.onrender.com/arsona/otp-verification/verification',
   {Data: {fullOtp,email}},
  { withCredentials: true }
);

      Toast.show({
        type: 'success',
        text1: 'OTP verified successfully!',
      });

      navigation.reset({
      index: 0,
      routes: [{ name: 'ResetPassword' }],
    }); // ✅ Redirect to Dashboard
    
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || 'Verification failed';
      console.log(errMsg);
      
      Alert.alert('Error', errMsg);
    }
  };

  const handleResendOtp = async () => {
  try {
   const value=await getData()
   console.log(value)
   console.log(value.userData.email)
   if(!value?.userData?.email){
    return Alert.alert('Internal server error')
   }
   const email=value.userData.email;

    await axios.post(
  'https://arsona-backend.onrender.com/arsona/otp-verification/password',
  {email},
  { withCredentials: true }
);


    Toast.show({
      type: 'success',
      text1: 'OTP resent successfully!',
    });
  } catch (error: any) {
    const errMsg = error?.response?.data?.message || 'Failed to resend OTP';
    Alert.alert('Error', errMsg);
  }
};


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../public/otpimage.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the verification code we just sent.
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref: RNTextInput | null) => {
              inputs.current[index] = ref!;
            }}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleVerify}>
        <Text style={styles.sendButtonText}>Verify OTP</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn’t receive code? <Text style={styles.resendLink} onPress={handleResendOtp}>Resend</Text>
      </Text>

      <Toast />
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: width * 0.9,
    height: width * 0.9,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 48,
    letterSpacing: -0.16,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'center',
    color: '#020617',
    marginBottom: 30,
    lineHeight: 20,
    letterSpacing: 0,
    paddingHorizontal: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderColor: '#15DE83',
    borderWidth: 1.15,
    borderRadius: 9.17,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27.52,
    color: '#64748B',
  },
  sendButton: {
    backgroundColor: '#5B5957',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: '10%',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 27.52,
  },
  resendText: {
    fontSize: 14,
    color: '#333',
  },
  resendLink: {
    color: 'green',
    fontWeight: 'bold',
  },
});
