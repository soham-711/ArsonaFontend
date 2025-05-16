import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

// All screens
import HeatMapScreen from './src/components/HeatMapScreen';
import FireLogsScreen from './src/components/FireLogsScreen';
import ResetPassword from './src/components/ResetPassword';
import OtpVerification from './src/components/OtpVerification';
import Register from './src/components/Register';
import ForgotPassword from './src/components/ForgotPassword';
import Login from './src/components/Login';
import ManualControlScreen from './src/components/ManualControlScreen';
import Dashboard from './src/components/Dashboard';
import BotHealth from './src/components/Bot-Health';
import Setting from './src/components/Setting';
import LandingPage from './src/components/LandingPage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="HeatMap" component={HeatMapScreen} />
        <Stack.Screen name="FireLogs" component={FireLogsScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ManualControl" component={ManualControlScreen} />
        <Stack.Screen name="BotHealth" component={BotHealth} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
}

export default App;
