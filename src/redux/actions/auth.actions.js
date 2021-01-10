import { auth } from '../../firebase/firebase.config';
import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  USER_AUTH,
  USER_REG,
  RESET_APP,
  USERS_STORE,
  INCREMENT_LOG,
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

export const storeUsers = (listUsers) => ({
  type: USERS_STORE,
  listUsers,
});

export const incrementLog = () => ({
  type: INCREMENT_LOG,
});

export const incrementReg = (params) => {};

//firebase admin
// export const getUsers = () => ({
//   type: GET_USERS,
//   payload: adm.listUsers(maxResults=30),
// });
