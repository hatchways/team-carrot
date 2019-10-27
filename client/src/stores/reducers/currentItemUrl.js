import { SAVE_ITEM_URL } from "../actionTypes";

const DEFAULT_STATE = {
  link: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SAVE_ITEM_URL: {
      return Object.assign({}, state, {
        link: action.link
      });
    }
    default:
      return state;
  }
};
