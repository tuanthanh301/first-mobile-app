import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../../features/signup/SignUpScreen';
import SettingScreen from '../../features/settings/SettingScreen';
import ProfileScreen from '../../features/settings/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SignUp" component={SignUpScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const Tabs = () => {
  return (
    <MyTabs/>
  );
};
export default Tabs;

const styles = StyleSheet.create({})