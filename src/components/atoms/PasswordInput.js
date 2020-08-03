import React from 'react';
import { Input, Icon } from 'react-native-elements';
import { getPasswordPlaceholder } from '../../constants/placeholders';

import { useTheme } from '../../hooks/useTheme';

const PasswordInput = (props) => {
  const { theme } = useTheme();

  const { inputRef } = props;
  const { iconTheme, inputContainerTheme, inputTheme } = theme;

  return (
    <Input
      testID="PasswordInput"
      placeholder={getPasswordPlaceholder()}
      returnKeyType="go"
      ref={inputRef}
      leftIcon={
        <Icon
          name="lock"
          iconStyle={iconTheme.iconStyle}
          type={iconTheme.type}
          size={iconTheme.size}
        />
      }
      containerStyle={inputTheme}
      inputContainerStyle={inputContainerTheme.inputContainerStyle}
      inputStyle={inputContainerTheme.inputStyle}
      placeholderTextColor={inputContainerTheme.placeholderTextColor}
      shake
      secureTextEntry
    />
  );
};
export default PasswordInput;
