import { combineReducers } from "redux";
import currentUser from "../reducers/currentUser";
import errors from "../reducers/errors";
import shoppingList from "../reducers/shoppingListRed";

const rootReducer = combineReducers({
  currentUser: currentUser,
  errors: errors,
  shoppingList: shoppingList // left side is being sent out from redux while right side is being called from the reducer
});

export default rootReducer;
