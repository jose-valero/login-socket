import { auth } from '../../firebase/firebase.config';
import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  USER_AUTH,
  USER_REG,
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
