import * as React from 'react';
import routesName from '../constants/routes';
import { SettingsScreen } from '../scenes/Settings';
import { ProfileScreen } from '../scenes/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routesName.Settings} component={SettingsScreen} />
      <Stack.Screen name={routesName.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
