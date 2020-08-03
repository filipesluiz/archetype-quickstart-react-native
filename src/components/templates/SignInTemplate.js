import React from 'react';
import SignInOrganism from '../organisms/SignInOrganism';
import TemplateOrganism from '../organisms/TemplateOrganism';
import { useTheme } from '../../hooks';

const SignInTemplate = (props) => {
  const { onPress, buttonTitle, logoTitle, logo } = props;
  const { theme } = useTheme();
  return (
    <TemplateOrganism theme={theme}>
      <SignInOrganism
        theme={theme}
        onPress={onPress}
        buttonTitle={buttonTitle}
        logoTitle={logoTitle}
        logo={logo}
      />
    </TemplateOrganism>
  );
};
export default SignInTemplate;
