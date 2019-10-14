import { SET_ITEM_DETAILS, CLEAR_ITEM_DETAILS } from "../actionTypes";

const DEFAULT_STATE = {
  details: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ITEM_DETAILS:
      return {
        details: action.itemDetail
      };
    case CLEAR_ITEM_DETAILS:
      console.log("This is hit here");
      return {
        details: {}
      };
    default:
      return state;
  }
};
