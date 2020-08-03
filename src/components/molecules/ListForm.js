import React from 'react';
import { ListItem } from 'react-native-elements';
import { useTheme } from '../../hooks';

const ListForm = (props) => {
  const { theme } = useTheme();
  const { key, title, subtitle, icon, type, onPress, rightElement } = props;

  return (
    <ListItem
      chevron={!rightElement}
      topDivider
      key={key}
      title={title}
      titleStyle={theme.listItem.titleStyle}
      subtitleStyle={theme.listItem.subtitleStyle}
      subtitle={subtitle}
      leftIcon={{ name: icon, type, color: theme.iconColor.color }}
      onPress={onPress}
      containerStyle={theme.listItem.containerStyle}
      rightElement={rightElement || null}
    />
  );
};
export default ListForm;
