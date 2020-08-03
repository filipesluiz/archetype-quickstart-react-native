import React from 'react';
import SignInTemplate from '../../components/templates/SignInTemplate';
import { getSignInText } from '../../constants/buttons';
import { getLogoMessage } from '../../constants/labels';
import Images from '../../assets/images';
import { useAuthentication } from '../../hooks/useAuthentication';

const { react } = Images;

export const SignInScreen = () => {
  const { signIn } = useAuthentication();

  const signInAsync = async () => {
    signIn({ token: 'dummyToken' });
  };

  return (
    <SignInTemplate
      buttonTitle={getSignInText()}
      onPress={signInAsync}
      logoTitle={getLogoMessage()}
      logo={react}
    />
  );
};
