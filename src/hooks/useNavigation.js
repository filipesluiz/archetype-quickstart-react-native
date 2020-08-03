/** @format */

import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

export const useNavigation = () => {
  return useContext(NavigationContext);
};
