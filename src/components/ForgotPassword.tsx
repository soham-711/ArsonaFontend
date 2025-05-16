
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';
type NavigationProp = {
  navigate: (
    screen: 'Register' | 'Login' | 'ForgotPassword' | 'Dashboard' | 'OtpVerification',
  ) => void;
  reset: (state: { index: number; routes: { name: string }[] }) => void; // ✅ Added reset method
};

const ForgotPassword = ({navigation}: {navigation: NavigationProp}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = () => {
    if (!email) {
      Alert.alert('Error', 'Email is required');
      return;
    }

    setIsLoading(true);

    axios
      .post('https://arsona-backend.onrender.com/arsona/otp-verification/forget-password', {
        email,
      })
      .then(res => {
        Toast.show({
          type: 'success',
          text1: 'OTP sent successfully to registered email',
        });
        navigation.reset({
      index: 0,
      routes: [{ name: 'OtpVerification' },],
    }); // ✅ Redirect to Dashboard
      })
      .catch(error => {
        const backendError =
          error?.response?.data?.message ||
          error?.message ||
          'Something went wrong. Please try again later.';
        Alert.alert('Error', backendError);
        
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.sectionContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../public/forgotpass.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.ForgetPassTextContainer}>
          <Text style={styles.ForgetPassTitle}>Forget Password?</Text>
          <Text style={styles.ForgetPassText}>
            Don’t worry! It occurs. Please enter the email address linked with
            your account.
          </Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLebel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          style={[styles.sendCodeBtn, isLoading && {opacity: 0.7}]}
          onPress={handleSendCode}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.sendCodeText}>Send Code</Text>
          )}
        </TouchableOpacity>
      </View>

      <Toast />
    </SafeAreaView>
  );
};

export default ForgotPassword;



const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  imageContainer: {
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
    height: 262,
    width: 262,
  },
  ForgetPassTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 48,
    letterSpacing: -0.16,
    color: '#BE2323',
    textAlign: 'center',
  },
  ForgetPassTextContainer: {
    height: 48,
    marginTop: 30,
  },
  ForgetPassText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
  },
  inputSection: {
    marginTop: '30%',
  },
  inputLebel: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 19.5,
    lineHeight: 48,
    letterSpacing: -0.16,
  },
  input: {
    width: 350,
    fontSize: 19.5,
    height: 60,
    borderRadius: 9.17,
    borderWidth: 1.15,
    borderColor: '#ECCB9B',
    padding: 16,
  },
  sendCodeBtn: {
    width: 350,
    height: 62,
    borderRadius: 9.17,
    paddingTop: 18.35,
    paddingRight: 27.52,
    paddingBottom: 18.35,
    paddingLeft: 27.52,
    backgroundColor: '#5B5957',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  sendCodeText: {
    color: '#FFFFFF',
  },
});
