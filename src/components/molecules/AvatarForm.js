import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const AvatarForm = (props) => {
  const { theme, avatar, size, text, title } = props;
  const { avatarTextTheme, avatarTitleTheme } = theme;
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar rounded source={avatar} size={size} />
        {text && <Text style={avatarTitleTheme}>{text}</Text>}
      </View>
      {title && <Text style={avatarTextTheme}>{title}</Text>}
    </View>
  );
};
export default AvatarForm;
