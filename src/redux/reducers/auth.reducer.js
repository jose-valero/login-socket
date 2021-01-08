import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  USER_AUTH,
  USER_REG,
  RESET_APP,
} from '../types/userTypes';

const initialState = {
  currentUser: null,
  isReg:null,
  isRegError: null,
  isLoading: false,
  errorAuth: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
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
        isReg: null,
      };
    case `${USER_REG}_SUCCESS`:
      return {
        ...state,
        isReg: action.payload.user,
        isLoading: false,
        currentUser: null
      };
    case `${USER_REG}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isRegError: action.error,
      };

    case RESET_APP:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
