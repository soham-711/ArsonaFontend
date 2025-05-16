import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'; // ✅ Toast import
// type restype={
//   SoredToken:Object,
//   data:Object
// }
type NavigationProp = {
  navigate: (
    screen: 'Register' | 'Login' | 'ForgotPassword' | 'Dashboard',
  ) => void;
  reset: (state: {index: number; routes: {name: string}[]}) => void; // ✅ Added reset method
};

const Login = ({navigation}: {navigation: NavigationProp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSpine, setIsSpine] = useState(false);

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('myData', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setIsSpine(true); 

    try {
      const response = await axios.post(
        'https://arsona-backend.onrender.com/arsona/auth/login',
        {
          email,
          password,
        },
      );
       if (response.data.success) {
              Toast.show({
                type: 'success',
                text1: 'Login Successful',
                text2: 'Enjoy this app',
                position: 'top',
              });
      const value = {
        Token: response.data?.Token,
        userData: response.data?.data,
      };
      
      await storeData(value);
      console.log(response);
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      }, 3000);
      // ✅ Redirect to Dashboard
   } } catch (error: any) {
        Alert.alert(
          'Error',
          error?.response?.data?.message || 'Something went wrong',
        );
    }finally {
      setIsSpine(false); // Hide spinner after API completes
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.sectionContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Log in to your account</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.inputBox}
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.inputBox}
            secureTextEntry={true}
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomContainer}>
       <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isSpine}>
          {isSpine ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.loginButtonText}>Log In</Text>
          )}
        </TouchableOpacity>

        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

// styles (same as before)
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    paddingTop: 60,
    paddingBottom: 24,
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 36,
    color: '#1F2937',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 8,
    color: '#374151',
  },
  inputBox: {
    width: '100%',
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginBottom: 32,
  },
  forgotText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#3B82F6',
    textDecorationLine: 'underline',
  },
  bottomContainer: {
    borderColor: '#E5E7EB',
    position: 'relative',
    top: 280,
  },
  loginButton: {
    backgroundColor: '#000000',
    borderRadius: 10,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
   
  },
  loginButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  signupTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
});
