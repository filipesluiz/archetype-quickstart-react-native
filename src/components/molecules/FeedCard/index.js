/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import FeedCard from './FeedCard';
import { useTheme } from '../../../hooks';

const molecule = (props) => {
  const { style } = props;
  const { theme } = useTheme();
  return <FeedCard {...props} style={{ ...theme.feedCard, ...style }} />;
};

export default molecule;
