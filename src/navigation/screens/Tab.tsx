import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../../features/signup/SignUpScreen';
import Trailer from '../../features/settings/Trailer';
import ProfileScreen from '../../features/settings/ProfileScreen';
import HomeScreen from '../../features/home/HomeScreen';
import Favorite from '../../features/settings/Favorite';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Trailer" component={Trailer} />
      <Tab.Screen name="Favorite" component={Favorite} />
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