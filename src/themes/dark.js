import Colors from '../styles/colors';
import { paddingSize, marginSize } from '../styles/metrics';
import { fontSize } from '../styles/fonts';

export const dark = {
  statusBarTheme: {
    barStyle: 'light-content',
  },
  safeAreaTheme: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  keyboardViewTheme: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  containerTheme: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  defaultNavOptTheme: {
    headerStyle: {
      backgroundColor: Colors.dark,
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  avatarTextTheme: {
    color: '#FFF',
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9,
  },
  avatarTitleTheme: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9,
    marginLeft: 8,
    fontSize: 18,
  },
  signInContainerTheme: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTheme: {
    height: 100,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  logoContainerTheme: {
    maxWidth: 200,
    alignItems: 'center',
  },
  logoTextTheme: {
    color: '#FFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  iconTheme: {
    iconStyle: {
      color: 'white',
      opacity: 0.8,
    },
    size: 24,
    type: 'feather',
    resizeMode: 'contain',
  },
  formContainerTheme: {
    padding: 20,
    width: '100%',
  },
  inputTheme: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    paddingHorizontal: -10,
    height: 40,
  },
  inputContainerTheme: {
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
    inputStyle: {
      color: '#fff',
      marginHorizontal: 10,
    },
    placeholderTextColor: 'rgba(255,255,255,0.7)',
  },
  buttonTheme: {
    backgroundColor: '#2b2b2b',
    paddingVertical: 15,
  },
  buttonContainerTheme: {},
  buttonTitleTheme: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  avatarContainerTheme: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h4Style: {
    color: '#FFF',
  },
  profileContainerTheme: {
    flex: 1,
    padding: 20,
  },
  homeBackgroundStyle: {
    contentContainerStyle: {
      backgroundColor: Colors.dark,
    },
  },
  tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: '#888888',
    gesturesEnabled: false,
    style: {
      backgroundColor: Colors.dark,
    },
  },
  feedCard: {
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
      backgroundColor: Colors.darker,
      borderRadius: 10,
      overflow: 'hidden',
    },
    newsImageStyle: {
      width: '100%',
      aspectRatio: 2.5,
    },
    newsInfoContainerStyle: {
      paddingHorizontal: paddingSize.large,
      color: Colors.white,
    },
    newsTitleTextStyle: {
      color: Colors.white,
      marginTop: marginSize.large,
      fontSize: fontSize.h2,
    },
    newsMessageTextStyle: {
      color: Colors.white,
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
      color: Colors.white,
      fontSize: fontSize.p,
    },
  },

  iconColor: {
    color: '#fff',
  },
  listItem: {
    titleStyle: {
      color: Colors.white,
    },
    subtitleStyle: {
      color: Colors.white,
    },
    containerStyle: {
      backgroundColor: Colors.darker,
    },
  },
};
