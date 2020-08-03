import React from 'react';
import ProfileOrganism from '../organisms/ProfileOrganism';
import TemplateOrganism from '../organisms/TemplateOrganism';
import { useTheme } from '../../hooks/useTheme';

const ProfileTemplate = (props) => {
  const { theme } = useTheme();
  const { avatar, avatarSize, avatarText, avatarTitle, data } = props;

  return (
    <TemplateOrganism theme={theme}>
      <ProfileOrganism
        theme={theme}
        avatar={avatar}
        avatarSize={avatarSize}
        avatarText={avatarText}
        avatarTitle={avatarTitle}
        data={data}
      />
    </TemplateOrganism>
  );
};

export default ProfileTemplate;
