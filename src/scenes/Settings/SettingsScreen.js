import React from 'react';
import { Alert } from 'react-native';
import routesName from '../../constants/routes';
import SettingsTemplate from '../../components/templates/SettingsTemplate';
import {
  getNameTitle,
  getProfileText,
  getSettingsText,
  getLogoutText,
} from '../../constants/labels';
import { ThemeSwitch } from '../../components/molecules/ThemeSwitch';
import { useAuthentication } from '../../hooks/useAuthentication';

const avatar = {
  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
};

const SettingsScreen = ({ navigation }) => {
  const { signOut } = useAuthentication();

  const signOutAsync = async () => {
    signOut();
  };

  const navigateToProfile = () => {
    navigation.navigate(routesName.Profile);
  };

  const list = [
    {
      title: getProfileText(),
      icon: 'person',
      onPress: () => navigateToProfile(),
    },
    {
      title: getSettingsText(),
      icon: 'cogs',
      type: 'font-awesome',
      onPress: () => Alert.alert('Ir pra página Settings'),
    },
    {
      title: 'Dark Mode',
      icon: 'moon',
      type: 'feather',
      rightElement: ThemeSwitch,
    },
    {
      title: getLogoutText(),
      icon: 'log-out',
      type: 'feather',
      onPress: () => signOutAsync(),
    },
  ];

  return (
    <SettingsTemplate
      avatar={avatar}
      avatarSize="xlarge"
      avatarTitle={getNameTitle()}
      data={list}
    />
  );
};
export default SettingsScreen;
