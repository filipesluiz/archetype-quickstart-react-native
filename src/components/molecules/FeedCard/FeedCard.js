import React from 'react';
import { View, Image, Text } from 'react-native';
// import Button from '../../atoms/Button';
import Touchable from '../../commons/Touchable';

const FeedCard = ({ item, style, onClick }) => {
  const {
    baseStyle,
    // buttonContainerStyle,
    // buttonTouchableStyle,
    // buttonIconStyle,
    shadowStyle,
    newsContainerStyle,
    newsInfoContainerStyle,
    newsImageStyle,
    newsTitleTextStyle,
    newsMessageTextStyle,
    newsBottomContainerStyle,
    newsBottomIconStyle,
    newsBottomTextStyle,
  } = style;

  return (
    <View style={baseStyle}>
      {/* <Button
        text={item.tag}
        icon={item.icon}
        containerStyle={buttonContainerStyle}
        touchableStyle={buttonTouchableStyle}
        iconStyle={buttonIconStyle}
        onPress={onTagPress}
      /> */}
      <View style={shadowStyle}>
        <View style={newsContainerStyle}>
          <Touchable onPress={() => onClick(item)}>
            <View>
              <Image
                style={newsImageStyle}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
              <View style={newsInfoContainerStyle}>
                <Text style={newsTitleTextStyle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={newsMessageTextStyle} numberOfLines={2}>
                  {item.message}
                </Text>
              </View>
            </View>
            <View style={newsBottomContainerStyle}>
              <Image
                style={newsBottomIconStyle}
                resizeMode="contain"
                source={{ uri: item.sourceIcon }}
              />
              <Text style={newsBottomTextStyle}>{item.sourceName}</Text>
            </View>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;
