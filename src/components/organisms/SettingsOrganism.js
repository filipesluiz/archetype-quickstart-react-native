import React from 'react';
import { View, FlatList } from 'react-native';
import AvatarForm from '../molecules/AvatarForm';
import ListForm from '../molecules/ListForm';

const SettingsOrganism = (props) => {
  const { theme, avatar, avatarSize, avatarTitle, data } = props;
  const { containerTheme, avatarContainerTheme } = theme;
  return (
    <View style={containerTheme}>
      <View style={avatarContainerTheme}>
        <AvatarForm
          theme={theme}
          avatar={avatar}
          size={avatarSize}
          title={avatarTitle}
        />
      </View>
      <View>
        <FlatList
          data={data}
          bounces={false}
          renderItem={({ item }) => <ListForm {...item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default SettingsOrganism;
