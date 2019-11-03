import { SET_CURRENT_USER } from "../actionTypes";
import { REMOVE_CURRENT_USER } from "../actionTypes";

// the purpose of this reducer is to know is the user logged in and who that user is

const DEFAULT_STATE = {
  isAuthenticated: false, //will be true when the user is logged in
  user: {} // all the user info when logged in
};

// let REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length > 0,
        user: action.user
      };
    case REMOVE_CURRENT_USER:
      console.log("This is hit here");
      return {
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
};
