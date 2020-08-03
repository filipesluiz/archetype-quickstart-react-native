import {
  HOME_FETCH_SUCCESS,
  HOME_FETCH_PENDING,
  HOME_FETCH_ERROR,
} from './types';
import API from '../../utils/api';

function homeFetchPending() {
  return {
    type: HOME_FETCH_PENDING,
  };
}

function homeFetchSuccess(data) {
  return {
    type: HOME_FETCH_SUCCESS,
    payload: data,
  };
}

function homeFetchError(error) {
  return {
    type: HOME_FETCH_ERROR,
    error,
  };
}

const homeFetch = (userId) => (dispatch) => {
  dispatch(homeFetchPending());

  API.get(`/home/${userId}`)
    .then(
      (data) => {
        dispatch(homeFetchSuccess(data));
        return data;
      },
      (err) => dispatch(homeFetchError(err)),
    )
    .catch((error) => {
      dispatch(homeFetchError(error));
    });
};

export default homeFetch;
