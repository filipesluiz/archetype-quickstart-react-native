import React from 'react';
import { Input, Icon } from 'react-native-elements';
import { getEmailPlaceholder } from '../../constants/placeholders';
import { useTheme } from '../../hooks/useTheme';

const EmailInput = (props) => {
  const { theme } = useTheme();
  const { iconTheme, inputContainerTheme, inputTheme } = theme;
  const { onSubmitEditing } = props;

  return (
    <Input
      testID={'EmailInput'}
      placeholder={getEmailPlaceholder()}
      returnKeyType="next"
      onSubmitEditing={onSubmitEditing}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      leftIcon={
        <Icon
          name="mail"
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
    />
  );
};
export default EmailInput;
