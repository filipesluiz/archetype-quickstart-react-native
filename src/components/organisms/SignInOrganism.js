import React from 'react';
import { View } from 'react-native';
import SignInForm from '../molecules/SignInForm';
import LogoForm from '../molecules/LogoForm';

const SignInOrganism = (props) => {
  const { theme, onPress, buttonTitle, logoTitle, logo } = props;
  const { signInContainerTheme } = theme;
  return (
    <View style={signInContainerTheme}>
      <LogoForm theme={theme} title={logoTitle} logo={logo} />
      <SignInForm theme={theme} title={buttonTitle} onPress={onPress} />
    </View>
  );
};
export default SignInOrganism;
