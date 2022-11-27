import React from 'react'

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import OnBoarding from './src/screens/OnBoarding';
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
        
      }}>
        <Stack.Screen name="OnBoarding"  component={OnBoarding} />
        <Stack.Screen name="LandingScreen"  component={LandingScreen} />
        <Stack.Screen name="LoginScreen"  component={LoginScreen} />
        <Stack.Screen name="SignUpScreen"  component={SignUpScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
