import React from 'react';
import SettingsOrganism from '../organisms/SettingsOrganism';
import TemplateOrganism from '../organisms/TemplateOrganism';
import { useTheme } from '../../hooks/useTheme';

const SettingsTemplate = (props) => {
  const { avatar, avatarSize, avatarTitle, data } = props;

  const { theme } = useTheme();

  return (
    <TemplateOrganism theme={theme}>
      <SettingsOrganism
        theme={theme}
        avatar={avatar}
        avatarSize={avatarSize}
        avatarTitle={avatarTitle}
        data={data}
      />
    </TemplateOrganism>
  );
};

export default SettingsTemplate;
