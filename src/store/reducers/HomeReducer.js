import {
  HOME_FETCH_PENDING,
  HOME_FETCH_SUCCESS,
  HOME_FETCH_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  pending: false,
  data: [],
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case HOME_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case HOME_FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
