import { GET_ITEMS_IN_EACH_SHOPPING_LIST } from "../actionTypes";

// the purpose of this reducer is to know is the user logged in and who that user is

const DEFAULT_STATE = {
  items: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_ITEMS_IN_EACH_SHOPPING_LIST:
      return Object.assign({}, state, {
        items: action.items
      });
    default:
      return state;
  }
};
