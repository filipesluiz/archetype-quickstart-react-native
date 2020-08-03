import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

const Touchable = (props) => {
  const { type } = props;
  let ChosenTouchable = TouchableOpacity;

  switch (type) {
    case 'native':
      ChosenTouchable =
        Platform.OS === 'ios'
          ? TouchableWithoutFeedback
          : TouchableNativeFeedback;
      break;
    case 'highlight':
      ChosenTouchable = TouchableHighlight;
      break;
    case 'nofeedback':
      ChosenTouchable = TouchableWithoutFeedback;
      break;
    default:
      ChosenTouchable = TouchableOpacity;
  }

  return <ChosenTouchable {...props} />;
};

export default Touchable;
