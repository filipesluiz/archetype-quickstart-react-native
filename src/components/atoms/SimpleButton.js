import React from 'react';
import { Button } from 'react-native-elements';
import { useTheme } from '../../hooks';

const SimpleButton = (props) => {
  const { theme } = useTheme();
  const { title, onPress, testID } = props;
  const { buttonTheme, buttonContainerTheme, buttonTitleTheme } = theme;

  return (
    <Button
      testID={testID}
      title={title}
      onPress={onPress}
      raised={buttonTheme.raised}
      titleStyle={buttonTitleTheme}
      buttonStyle={buttonTheme}
      type={buttonTheme.type}
      containerStyle={buttonContainerTheme}
    />
  );
};
export default SimpleButton;
