import React from 'react';
import { View, Switch } from 'react-native';
import { useTheme } from '../../hooks';
import colors from '../../styles/colors';

export const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <View>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        // trackColor="blue"
        thumbColor={isDark ? colors.white : colors.dark}
        ios_backgroundColor={colors.white}
      />
    </View>
  );
};
