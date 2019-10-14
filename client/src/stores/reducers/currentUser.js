import { SET_CURRENT_USER } from "../actionTypes";

// the purpose of this reducer is to know is the user logged in and who that user is

const DEFAULT_STATE = {
  isAuthenticated: false, //will be true when the user is logged in
  user: {} // all the user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length > 0,
        user: action.user
      };
    default:
      return state;
  }
};
