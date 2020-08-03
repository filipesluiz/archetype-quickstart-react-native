import React from 'react';
import TemplateOrganism from '../organisms/TemplateOrganism';
import FeedOrganism from '../organisms/FeedOrganism';
import SimpleButton from '../atoms/SimpleButton';
import { useTheme } from '../../hooks';

const HomeTemplate = ({ data, onClick }) => {
  const { theme } = useTheme();

  return (
    <TemplateOrganism theme={theme} testID="Home">
      <FeedOrganism onClick={onClick} data={data} />
    </TemplateOrganism>
  );
};

export default HomeTemplate;
