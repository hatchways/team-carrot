import { SET_ITEM_DETAILS } from "../actionTypes";

// the purpose of this reducer is to know is the user logged in and who that user is

const DEFAULT_STATE = {
  details: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ITEM_DETAILS:
      return {
        details: action.itemDetail
      };
    default:
      return state;
  }
};
