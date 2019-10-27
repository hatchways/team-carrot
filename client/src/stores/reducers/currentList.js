import { GET_CURRENT_USER_SHOPPING_LIST } from "../actionTypes";

// the purpose of this reducer is to know is the user logged in and who that user is

const DEFAULT_STATE = {
  list: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_SHOPPING_LIST:
      return Object.assign({}, state, {
        list: action.list
      });
    default:
      return state;
  }
};
