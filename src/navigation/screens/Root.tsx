import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../../features/signup/SignUpScreen';
import LoginScreen from '../../features/authenticate/LoginScreen';
import SettingScreen from '../../features/settings/SettingScreen';
import ProfileScreen from '../../features/settings/ProfileScreen';


export type RootStackParamList = Record<string, any>;
const MainStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
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
    // <MyTabs/>
  )
}

export default Root

const styles = StyleSheet.create({})