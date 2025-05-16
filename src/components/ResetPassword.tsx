

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
type NavigationProp = {
  navigate: (
    screen: 'Register' | 'Login' | 'ForgotPassword' | 'Dashboard' | 'ResetPassword',
  ) => void;
  reset: (state: { index: number; routes: { name: string }[] }) => void; // ✅ Added reset method
};


const ResetPassword = ({navigation}: {navigation: NavigationProp}) => {


const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
   return null;
  }
};
// Assuming email is passed as route params
  // State for password and confirm password fields
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    const value=await getData()
       console.log(value)
       console.log(value.userData.email)
       if(!value?.userData?.email){
        return Alert.alert('Internal server error')
       }
 const email= value.userData.email;
    // Validation checks
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      // Call backend API to reset the password
      const response = await axios.post('https://arsona-backend.onrender.com/arsona/otp-verification/new_password', {
        newPassword:newPassword,
        confirmPassword: confirmPassword,
        email:email,
      });

      // Handle success
      if (response.status === 200) {
        Toast.show({
                type: 'success',
                text1: 'Password reset successfully!',
              });
        // Optionally navigate to login page or other screen
      }
         navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    }); // ✅ Redirect to Dashboard

    } catch (error: any) {
      // Handle error
      const errMsg = error?.response?.data?.message || 'Password reset failed';
      Alert.alert('Error', errMsg);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be unique from those previously used.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <Toast/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Inter',
    fontWeight: 700,
    color: '#020617',
    lineHeight: 48,
    letterSpacing: -0.16,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
    color: '#838798',
    lineHeight: 20,
    letterSpacing: 0,
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
    marginTop: 30,
  },
  label: {
    fontSize: 19.5,
    marginBottom: 6,
    fontWeight: 500,
    lineHeight: 27.52,
    letterSpacing: 0,
    color: '#000000',
  },
  input: {
    borderWidth: 1.15,
    borderColor: '#90A7C6',
    borderRadius: 9.17,
    padding: 16,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 27.52,
    letterSpacing: 0,
    fontFamily: 'Inter',
    color: '#64748B',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 9.17,
    paddingTop: 18.35,
    paddingRight: 27.52,
    paddingLeft: 27.52,
    paddingBottom: 18.35,
    alignItems: 'center',
    marginTop: 285,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27.52,
    letterSpacing: 0,
  },
});

export default ResetPassword;
