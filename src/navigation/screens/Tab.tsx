import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trailer from '../../features/settings/Trailer';
import ProfileScreen from '../../features/settings/ProfileScreen';
import Favorite from '../../features/settings/Favorite';
import HomeFilm from '../../features/settings/HomeFilm';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeFilm} />
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