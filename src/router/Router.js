import React from 'react';

import { HomeStack, SettingsStack, AuthStack } from '../stacks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routesName from '../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthentication } from '../hooks/useAuthentication';
import { ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { useTheme } from '../hooks';
import { navigationOptions } from './NavigationOptions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routesName.Home}
        component={HomeStack}
        options={navigationOptions(routesName.Home, theme)}
      />
      <Tab.Screen
        name={routesName.Settings}
        component={SettingsStack}
        options={navigationOptions(routesName.Settings, theme)}
      />
    </Tab.Navigator>
  );
};

export const Router = () => {
  const { userToken, isLoading } = useAuthentication();
  const { isDark } = useTheme();

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: 'center' }}
      />
    );
  }

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routesName.App}>
        {userToken ? (
          <Stack.Screen name={routesName.App} component={TabNavigator} />
        ) : (
          <Stack.Screen name={routesName.Auth} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
