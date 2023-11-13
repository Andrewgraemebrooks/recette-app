/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import log from 'loglevel';
import * as SecureStore from 'expo-secure-store';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/auth/LoginScreen';
import RegisterScreen from './src/components/auth/RegisterScreen';

log.setLevel(process.env.EXPO_PUBLIC_LOG_LEVEL);

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in AsyncStorage
    SecureStore.getItemAsync('token')
      .then((token) => {
        if (token) {
          // Token exists, user is logged in
          setIsLoggedIn(true);
        } else {
          // Token doesn't exist, user is not logged in
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error('Error checking token:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
