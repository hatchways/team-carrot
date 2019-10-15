import { combineReducers } from "redux";
import currentUser from "../reducers/currentUser";
import errors from "../reducers/errors";
import shoppingList from "../reducers/shoppingListRed";
import currentShoppingList from "../reducers/currentList";
import currentItemsInShoppingList from "../reducers/currentItemInList";
import itemInfoScrapped from "../reducers/itemInfoScrapped";
import currentItemUrl from "../reducers/currentItemUrl";
import saveListName from "../reducers/preSelectedList";
import currentNotifications from "../reducers/currentNotifications";

const rootReducer = combineReducers({
  currentUser: currentUser,
  errors: errors,
  shoppingList: shoppingList, // left side is being sent out from redux while right side is being called from the reducer
  currentShoppingList: currentShoppingList,
  currentItemsInEachShoppingList: currentItemsInShoppingList,
  itemInfoScrapped: itemInfoScrapped,
  currentItemUrl: currentItemUrl,
  currentListName: saveListName,
  currentNotifications: currentNotifications
});

export default rootReducer;
