import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../../features/signup/SignUpScreen';
import LoginScreen from '../../features/authenticate/LoginScreen';
import SettingScreen from '../../features/settings/Trailer';
import ProfileScreen from '../../features/settings/ProfileScreen';
import HomeScreen from '../../features/home/HomeScreen';


export type RootStackParamList = Record<string, any>;
const MainStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      {/* <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      <MainStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    </MainStack.Navigator>
  )
};
const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       {/* <Tab.Screen name="LoginScreen" component={LoginScreen} /> */}
//       <Tab.Screen name="SignUpScreen" component={SignUpScreen} />
//       <Tab.Screen name="Settings" component={SettingScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

const Root = () => {
  return (
    <AppStack />
  )
}

export default Root

const styles = StyleSheet.create({})