import {
  USER_AUTH,
  USER_REG,
  GET_USERS,
  RESET_APP,
  USERS_STORE,
  SET_JANUARY_LOGS,
  SET_JANUARY_REGS,
} from '../types/userTypes';

const initialState = {
  currentUser: null,
  isReg: null,
  isRegError: null,
  isLoading: false,
  errorAuth: null,
  getUsers: null,
  error: null,
  allUsers: [],
  januaryLogs: {},
  januaryRegs: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_AUTH}_START`:
      return {
        ...state,
        isLoading: true,
        errorAuth: null,
      };
    case `${USER_AUTH}_SUCCESS`:
      return {
        ...state,
        currentUser: action.payload.user,
        isLoading: false,
      };
    case `${USER_AUTH}_ERROR`:
      return {
        ...state,
        isLoading: false,
        errorAuth: action.error,
      };
    case `${USER_REG}_START`:
      return {
        ...state,
        isLoading: true,
        isRegError: null,
      };
    case `${USER_REG}_SUCCESS`:
      return {
        ...state,
        isReg: action.payload.user,
        isLoading: false,
        currentUser: null,
      };
    case `${USER_REG}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isRegError: action.error,
      };

    //firebase admin
    case `${GET_USERS}_START`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_USERS}_SUCCESS`:
      return {
        ...state,
        getUsers: action.payload,
        isLoading: false,
      };
    case `${GET_USERS}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case `${USERS_STORE}`:
      return {
        ...state,
        allUsers: action.listUsers,
        error: true,
      };

    case SET_JANUARY_LOGS:
      return {
        ...state,
        januaryLogs: action.logs,
      };
    case SET_JANUARY_REGS:
      return {
        ...state,
        januaryRegs: action.regs,
      };

    case RESET_APP:
      return {
        ...state,
        currentUser: null,
        isReg: null,
        isRegError: null,
        isLoading: false,
        errorAuth: null,
        getUsers: null,
        error: null,
        // allUsers: [],
        januaryLogs: state.januaryLogs,
        januaryRegs: state.januaryRegs,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
