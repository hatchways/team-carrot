import { ADD_INVALID_CRED, REMOVE_INVALID_CRED } from "../actionTypes";

export default (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_INVALID_CRED:
      return { ...state, message: action.error };
    case REMOVE_INVALID_CRED:
      return { ...state, message: null };
    default:
      return state;
  }
};
