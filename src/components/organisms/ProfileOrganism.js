import React from 'react';
import { View, FlatList } from 'react-native';
import AvatarForm from '../molecules/AvatarForm';
import ListForm from '../molecules/ListForm';

const ProfileOrganism = (props) => {
  const { theme, avatar, avatarSize, avatarText, avatarTitle, data } = props;
  const { containerTheme, profileContainerTheme } = theme;

  return (
    <View style={containerTheme}>
      <View style={profileContainerTheme}>
        <AvatarForm
          theme={theme}
          avatar={avatar}
          text={avatarText}
          title={avatarTitle}
          size={avatarSize}
        />
      </View>
      <View>
        <FlatList
          data={data}
          bounces={false}
          renderItem={({ item }) => (
            <ListForm
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              type={item.type}
              onPress={item.onPress}
              containerStyle={{ height: 100 }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default ProfileOrganism;
