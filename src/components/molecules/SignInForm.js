import React, { Component } from 'react';
import { View } from 'react-native';
import EmailInput from '../atoms/EmailInput';
import PasswordInput from '../atoms/PasswordInput';
import SimpleButton from '../atoms/SimpleButton';

class SignInForm extends Component {
  render() {
    const { theme, onPress, title } = this.props;
    const { formContainerTheme } = theme;
    return (
      <View style={formContainerTheme}>
        <EmailInput onSubmitEditing={() => this.passwordInput.focus()} />
        <PasswordInput
          theme={theme}
          inputRef={(passwordInput) => {
            this.passwordInput = passwordInput;
          }}
        />
        <SimpleButton
          theme={theme}
          title={title}
          onPress={onPress}
          testID="LoginButton"
        />
      </View>
    );
  }
}
export default SignInForm;
