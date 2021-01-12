import { auth } from '../../firebase/firebase.config';
import {
  USER_AUTH,
  USER_REG,
  RESET_APP,
  USERS_STORE,
  SET_JANUARY_LOGS,
  SET_JANUARY_REGS
} from '../types/userTypes';

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

export const setJanuaryLogs = (logs) => ({
  type: SET_JANUARY_LOGS,
  logs,
});
export const setJanuaryRegs = (regs) => ({
  type: SET_JANUARY_REGS,
  regs,
});


// export const updateLog = (day) => ({
//   type: 'UPDATE_LOG',
//   day,
// });
