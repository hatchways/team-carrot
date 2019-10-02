import { combineReducers } from "redux";
import currentUser from "../reducers/currentUser";
import errors from "../reducers/errors";

const rootReducer = combineReducers({
  currentUser: currentUser,
  errors: errors
});

export default rootReducer;
