import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../../features/signup/SignUpScreen';
import LoginScreen from '../../features/authenticate/LoginScreen';
import SettingScreen from '../../features/settings/Trailer';
import ProfileScreen from '../../features/settings/ProfileScreen';
import MyTabs from './Tab';
import DetailFilm from '../../features/DetailFilm/DetailFilm';


export type RootStackParamList = Record<string, any>;
const MainStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen" 
    >
      <MainStack.Screen name='LoginScreen' component={LoginScreen}/>
      <MainStack.Screen name='SignUpScreen' component={SignUpScreen}/>
      <MainStack.Screen name='BottomTab' component={MyTabs}/>
      <MainStack.Screen name='DetailFilm' component={DetailFilm}/>
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