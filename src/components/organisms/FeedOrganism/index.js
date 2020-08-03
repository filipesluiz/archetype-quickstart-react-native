import React from 'react';
import FeedOrganism from './FeedOrganism';
import Style from './style';

const organism = (props) => {
  const { style } = props;
  return <FeedOrganism {...props} style={Object.assign({}, Style, style)} />;
};

export default organism;
