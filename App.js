/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import log from 'loglevel';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
import LoginScreen from './src/components/auth/LoginScreen';
import RegisterScreen from './src/components/auth/RegisterScreen';

log.setLevel(process.env.EXPO_PUBLIC_LOG_LEVEL);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
