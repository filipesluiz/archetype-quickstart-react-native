import React from 'react';
import { Alert } from 'react-native';
import { withTheme } from 'react-native-elements';
import ProfileTemplate from '../../components/templates/ProfileTemplate';
import {
  getNameTitle,
  getGenderText,
  getBirthText,
  getEmailText,
  getCountryText,
  getNameText,
} from '../../constants/labels';

const avatar = {
  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
};

class ProfileScreen extends React.Component {
  render() {
    const list = [
      {
        title: getNameTitle(),
        subtitle: getNameText(),
        icon: 'person',
        onPress: () => Alert.alert('Ir para tela de edição'),
      },
      {
        title: 'Female',
        subtitle: getGenderText(),
        icon: 'venus-mars',
        type: 'font-awesome',
        onPress: () => Alert.alert('Ir para tela de edição'),
      },
      {
        title: '17/02/1985',
        subtitle: getBirthText(),
        icon: 'birthday-cake',
        type: 'font-awesome',
        onPress: () => Alert.alert('Ir para tela de edição'),
      },
      {
        title: 'amy@fowler.com',
        subtitle: getEmailText(),
        icon: 'envelope',
        type: 'font-awesome',
        onPress: () => Alert.alert('Ir para tela de edição'),
      },
      {
        title: 'United States',
        subtitle: getCountryText(),
        icon: 'globe',
        type: 'font-awesome',
        onPress: () => Alert.alert('Ir para tela de edição'),
      },
    ];

    return (
      <ProfileTemplate
        avatar={avatar}
        avatarSize="large"
        data={list}
        avatarText={getNameTitle()}
      />
    );
  }
}
export default ProfileScreen;
