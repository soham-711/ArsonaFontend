
import React, {useEffect} from 'react';
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = {
  navigate: (
    screen:
      | 'Dashboard'
      | 'ManualControl'
      | 'BotHealth'
      | 'Setting'
      | 'HeatMap'
      | 'FireLogs'
      | 'Register'
      | 'Login',
  ) => void;
};

type LandingPageProps = {
  navigation: NavigationProp;
};

const LandingPage: React.FC<LandingPageProps> = ({navigation}) => {


  useEffect(() => {
 const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
   return null;
  }
};


    const checkUser = async () => {
      try {
        const value=await getData()
        console.log(value.Token.token);
       const Token=value?.Token.token
        const res = await axios.post(
          'https://arsona-backend.onrender.com/validate/validationCheck',{Token}  );

        if (res.data?.success && value?.Token.token) {
          navigation.navigate('Dashboard');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(
            'Validation error:',
            error.response?.data?.message || error.message,
          );
        } else {
          console.log('Validation error:', (error as Error).message);
        }
        navigation.navigate('Login'); // Default to login on any error
      }
    };

    const timer = setTimeout(() => {
      checkUser();
    }, 1500); // Short delay to show splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../public/Landing.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#ff5722" style={styles.spinner} />
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
  spinner: {
    marginTop: 20,
  },
});
