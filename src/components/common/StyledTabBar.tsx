import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import StyledText from '../../components/base/StyledText';
import StyledTouchable from '../../components/base/StyledTouchable';

const StyledTabBar = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <StyledTouchable
            accessibilityRole="button"
            // accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            customStyle={[styles.tabButton]}>
            {isFocused && <View style={styles.borderTop} />}
            <Image
              source={options?.icon}
              style={[
                styles.tabIcon,
                {
                  tintColor: isFocused ? '#ff6a00' : 'gray',
                },
              ]}
            />
            <StyledText value={options.title} />
          </StyledTouchable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
    paddingTop: 10,
    backgroundColor: 'black',
  },
  tabButton: {
    alignItems: 'center',
  },
  borderTop: {
    top: -10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 50,
  },
  tabIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  tabLabel: {
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 16,
  },
});

export default StyledTabBar;
