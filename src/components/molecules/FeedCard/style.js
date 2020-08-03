import { fontSize } from '../../../styles/fonts';
import { marginSize, paddingSize } from '../../../styles/metrics';
import Colors from '../../../styles/colors';

export default {
  baseStyle: {
    alignItems: 'center',
    paddingHorizontal: paddingSize.large,
    paddingVertical: paddingSize.normal,
  },
  buttonContainerStyle: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  buttonTouchableStyle: {
    paddingHorizontal: paddingSize.large,
    paddingVertical: paddingSize.normal,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIconStyle: {
    height: 15,
    aspectRatio: 1,
    marginRight: marginSize.normal,
  },
  shadowStyle: {
    shadowColor: Colors.black,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 2,
  },
  newsContainerStyle: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  newsImageStyle: {
    width: '100%',
    aspectRatio: 2.5,
  },
  newsInfoContainerStyle: {
    paddingHorizontal: paddingSize.large,
  },
  newsTitleTextStyle: {
    marginTop: marginSize.large,
    fontSize: fontSize.h2,
  },
  newsMessageTextStyle: {
    marginTop: marginSize.normal,
    fontSize: fontSize.h4,
  },
  newsBottomContainerStyle: {
    padding: paddingSize.large,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsBottomIconStyle: {
    height: 20,
    aspectRatio: 1,
    marginRight: marginSize.normal,
  },
  newsBottomTextStyle: {
    fontSize: fontSize.p,
  },
};
