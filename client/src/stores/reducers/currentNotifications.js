import { GET_NOTIFICATIONS } from "../actionTypes";

// the purpose of this reducer is to know is the user logged in and who that user is

const DEFAULT_STATE = {
  notifications: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return Object.assign({}, state, {
        notifications: action.notifications
      });
    default:
      return state;
  }
};
