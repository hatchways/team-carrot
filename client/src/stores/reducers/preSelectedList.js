import { PRE_SELECTED_LIST } from "../actionTypes";

const DEFAULT_STATE = {
  preSelectedList: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case PRE_SELECTED_LIST: {
      return Object.assign({}, state, {
        preSelectedList: action.preSelectedList
      });
    }
    default:
      return state;
  }
};
