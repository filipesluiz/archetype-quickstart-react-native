import React from 'react';
import { View, Text, Image } from 'react-native';

const LogoForm = (props) => {
  const { theme, title, logo } = props;
  const { logoTheme, logoContainerTheme, logoTextTheme } = theme;
  return (
    <View style={logoContainerTheme}>
      <Image style={logoTheme} source={logo} />
      <Text style={logoTextTheme}>{title}</Text>
    </View>
  );
};
export default LogoForm;
