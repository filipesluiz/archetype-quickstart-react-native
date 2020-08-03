import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import SignInReducer from './SignInReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  home: HomeReducer,
  signin: SignInReducer,
  profile: ProfileReducer,
});
