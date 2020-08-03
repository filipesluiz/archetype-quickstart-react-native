import React from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { useTheme } from '../hooks';

export const ThemedBottomTab = (props) => {
  const { theme } = useTheme();
  return <BottomTabBar {...props} {...theme.tabBarOptions} />;
};
