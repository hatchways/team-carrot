import { PRE_SELECTED_LIST, CLEAR_PRE_SELECTED_LIST } from "../actionTypes";

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
    case CLEAR_PRE_SELECTED_LIST: {
      return state;
    }
    default:
      return state;
  }
};
