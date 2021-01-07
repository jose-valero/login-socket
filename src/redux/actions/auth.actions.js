// import { auth } from '../../firebase/firebase.config';

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  };
};
export const clearCurrentUser = () => ({
  type: "CLEAR_CURRENT_USER"
});