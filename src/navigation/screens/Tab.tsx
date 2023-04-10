import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../../features/settings/ProfileScreen';
import Favorite from '../../features/settings/Favorite';
import HomeFilm from '../../features/settings/HomeFilm';
import Images from '../../assests';
import StyledTabBar from '../../components/common/StyledTabBar';
import SearchScreen from '../../features/settings/SearchScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const Tabs = [
    {
      name: 'HOME',
      title: 'Home Screen',
      component: HomeFilm,
      icon: Images.icons.tab.home,
    },
    {
      name: 'TRAILER',
      title: 'Search Screen',
      component: SearchScreen,
      icon: Images.icons.tab.search,
    },
    {
      name: 'FAVORITE',
      title: 'Favorites Screen',
      component: Favorite,
      icon: Images.icons.tab.favorite,
    },
    {
      name: 'Profile',
      title: 'Profile Screen',
      component: ProfileScreen,
      icon: Images.icons.tab.profile,
    },
  ];
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false }} 
      tabBar={(props: BottomTabBarProps) => {
        return <StyledTabBar {...props}/>
      }}
      >
      {Tabs.map((item, index) => {
        return (
          <Tab.Screen 
            key={item.name} 
            name={item.name} 
            component={item.component} 
            options={({navigation}) => {
              return {
                title: item.title,
                icon: item.icon
              };
            }}
          />
        );
      })}
      {/* <Tab.Screen name="Trailer" component={Trailer} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};
// const Tabs = () => {
//   return (
//     <MyTabs/>
//   );
// };
export default MyTabs;

const styles = StyleSheet.create({})