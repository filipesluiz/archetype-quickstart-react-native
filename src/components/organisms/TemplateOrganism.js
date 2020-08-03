import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

const TemplateOrganism = (props) => {
  const { children, theme, testID } = props;
  const { safeAreaTheme, keyboardViewTheme, statusBarTheme } = theme;

  return (
    <KeyboardAvoidingView
      testID={testID}
      behavior={Platform.OS === 'android' ? undefined : 'padding'}
      style={keyboardViewTheme}>
      <StatusBar {...statusBarTheme} />
      {children}
    </KeyboardAvoidingView>
  );
};

export default TemplateOrganism;
