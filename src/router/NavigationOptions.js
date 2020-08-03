import React from 'react';
import { Image } from 'react-native';
import routesName from './routes';
import Images from '../assets/images';

const { home, settings } = Images;

const createTabNavigationOptions = (name, theme) => ({
  tabBarIcon: ({ horizontal, tintColor }) => {
    const { isDark } = theme;

    // todo carregar imagens para o tema escuro e claro.

    const mapping = {
      [routesName.Home]: home,
      [routesName.Settings]: settings,
    };

    const iconName = mapping[name] || home;

    const style = {
      width: horizontal ? 20 : 25,
      aspectRatio: 1,
    };

    return (
      <Image
        style={[style, { tintColor }]}
        resizeMode="contain"
        source={iconName}
        tintColor={tintColor}
      />
    );
  },
});

export const navigationOptions = createTabNavigationOptions;
