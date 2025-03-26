import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {navigationRef} from './navigationService';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import {darkColors, lightColors} from '../config/theme';
import {Platform, useColorScheme} from 'react-native';
import Profile from '@screens/profile';
import Search from '@screens/search';
import Event from '@screens/event';
import Favourite from '@screens/favourites';

const NavStart = () => {
  const Stack = createNativeStackNavigator();
  const IOS = Platform.OS === 'ios';

  const scheme = useColorScheme(); // Automatically detects system theme

  const MyLightTheme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, ...lightColors},
  };

  const MyDarkTheme = {
    ...DarkTheme,
    colors: {...darkColors},
  };

  const config = {
    animation: 'timing',
    config: {
      stiffness: 800,
      damping: 400,
      mass: 2,
      duration: 400,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const appTheme = scheme === 'dark' ? MyDarkTheme : MyLightTheme;

  let navOptions = {headerShown: false};

  if (!IOS) {
    navOptions = {
      ...navOptions,
      transitionSpec: {
        open: config,
        close: config,
      },
    };
  }

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Event" component={Event} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef} theme={appTheme}>
      <Stack.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: IOS,
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={navOptions}
        />
        <Stack.Screen name="Search" component={MyTabs} options={navOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStart;
