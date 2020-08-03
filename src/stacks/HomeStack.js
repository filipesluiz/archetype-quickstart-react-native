import * as React from 'react';
import routesName from '../constants/routes';
import { HomeScreen } from '../scenes/Home';
import { DetailsScreen } from '../scenes/Details';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={routesName.Home}>
      <Stack.Screen name={routesName.Home} component={HomeScreen} />
      <Stack.Screen name={routesName.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
