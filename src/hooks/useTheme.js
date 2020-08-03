import React, { useState, useEffect } from 'react';
import { themes } from '../themes';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';

export const ThemeContext = React.createContext({
  toggleTheme: () => null,
  isDark: false,
  theme: themes.blue,
  loading: false,
});

export const useTheme = () => React.useContext(ThemeContext);

export const CustomTheme = ({ children }) => {
  const [isDark, toggle] = useState(false);
  const [loading, setLoadingTheme] = useState(true);

  const loadThemeFromAsyncStorage = () => {
    AsyncStorage.getItem('darkMode').then((data) => {
      let value = data === 'true';
      toggle(value);
      setLoadingTheme(false);
    });
  };

  useEffect(() => {
    loadThemeFromAsyncStorage();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    toggle((prev) => {
      return !prev;
    });
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: 'center' }}
      />
    );
  }
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        theme: isDark ? themes.dark : themes.blue,
        loading,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
