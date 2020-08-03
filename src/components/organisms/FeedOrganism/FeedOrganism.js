import React from 'react';
import { FlatList } from 'react-native';
import FeedCard from '../../molecules/FeedCard';
import { useTheme } from '../../../hooks/useTheme';

const FeedOrganism = (props) => {
  const { data, style, onClick } = props;
  const { theme } = useTheme();
  const { baseStyle } = style;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      style={baseStyle}
      contentContainerStyle={theme.homeBackgroundStyle.contentContainerStyle}
      renderItem={({ item, index }) => (
        <FeedCard onClick={onClick} item={item} index={index} />
      )}
    />
  );
};

export default FeedOrganism;
