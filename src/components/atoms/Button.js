import React from 'react';
import { View, Text, Image } from 'react-native';
import Touchable from '../commons/Touchable';

const Button = (props) => {
  const {
    icon,
    text,
    containerStyle,
    touchableStyle,
    iconStyle,
    textStyle,
    onPress,
  } = props;

  return (
    <View style={containerStyle}>
      <Touchable style={touchableStyle} onPress={onPress}>
        {icon && <Image style={iconStyle} source={{ uri: icon }} />}
        <Text style={textStyle}>{text}</Text>
      </Touchable>
    </View>
  );
};

export default Button;
