import * as React from 'react';
import routesName from '../constants/routes';
import { SignInScreen } from '../scenes/Authentication';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={routesName.SignIn}>
      <Stack.Screen name={routesName.SignIn} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
