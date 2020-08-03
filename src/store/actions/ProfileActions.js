import { PROFILE_UPDATE, PROFILE_FETCH_SUCCESS } from './types';

export const profileUpdate = ({ prop, value }) => ({
  type: PROFILE_UPDATE,
  payload: { prop, value },
});

export const profileFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .firestore()
      .collection(`users/${currentUser.uid}/employees`)
      .onSnapshot((snapshot) => {
        const employees = {};
        snapshot.forEach((employee) => {
          employees[employee.id] = employee.data();
        });
        dispatch({ type: PROFILE_FETCH_SUCCESS, payload: employees });
      });
  };
};
