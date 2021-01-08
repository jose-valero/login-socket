import { auth } from '../../firebase/firebase.config';
import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  USER_AUTH,
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
