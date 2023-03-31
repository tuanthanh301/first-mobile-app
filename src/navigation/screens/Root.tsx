import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../../features/signup/SignUpScreen';
import LoginScreen from '../../features/authenticate/LoginScreen';
import SettingScreen from '../../features/settings/Trailer';
import ProfileScreen from '../../features/settings/ProfileScreen';
import HomeScreen from '../../features/home/HomeScreen';
import MyTabs from './Tab';


export type RootStackParamList = Record<string, any>;
const MainStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen" 
    >
      <MainStack.Screen name='BottomTab' component={MyTabs}/>
    </MainStack.Navigator>
  )
};
const Root = () => {
  return (
    <AppStack />
  )
}

export default Root

const styles = StyleSheet.create({})