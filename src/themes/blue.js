import Colors from '../styles/colors';
import { paddingSize, marginSize } from '../styles/metrics';
import { fontSize } from '../styles/fonts';

export const blue = {
  statusBarTheme: {
    barStyle: 'light-content',
  },
  safeAreaTheme: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  keyboardViewTheme: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  containerTheme: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  defaultNavOptTheme: {
    headerStyle: {
      backgroundColor: '#3498db',
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
    backgroundColor: '#2980b9',
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
  profileContainerTheme: {
    flex: 1,
    padding: 20,
  },
  homeBackgroundStyle: {
    contentContainerStyle: {
      backgroundColor: '#f5f5f5',
    },
  },
  tabBarOptions: {
    activeTintColor: '#3498db',
    inactiveTintColor: '#888888',
    gesturesEnabled: false,
    style: {
      backgroundColor: '#f5f5f5',
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
  },
  iconColor: {
    color: Colors.darker,
  },
  listItem: {
    titleStyle: {
      color: Colors.dark,
    },
    subtitleStyle: {
      color: Colors.dark,
    },
    containerStyle: {
      backgroundColor: '#fff',
    },
  },
};
