import { auth } from '../../firebase/firebase.config';
import { adm } from '../../firebase/firebase.admin';
import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  USER_AUTH,
  USER_REG,
  GET_USERS,
  RESET_APP,
} from '../types/userTypes';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
export const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER,
});

export const userAuth = (email, password) => ({
  type: USER_AUTH,
  payload: auth.signInWithEmailAndPassword(email, password),
});

export const userReg = (email, password) => ({
  type: USER_REG,
  payload: auth.createUserWithEmailAndPassword(email, password),
});

export const resetApp = () => ({
  type: RESET_APP,
});

//firebase admin
// export const getUsers = () => ({
//   type: GET_USERS,
//   payload: adm.listUsers(maxResults=30),
// });


