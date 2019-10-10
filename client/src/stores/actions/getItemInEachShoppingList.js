import { GET_ITEMS_IN_EACH_SHOPPING_LIST } from "../actionTypes";
import { apiCallWithHeader } from "../../services/apiHeaders";

export function setItemsInCurrentUserShoppingList(items) {
  return {
    type: GET_ITEMS_IN_EACH_SHOPPING_LIST,
    items
  };
}

export function loadEachItemInShoppingList(headers, listName) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCallWithHeader(
        "get",
        `http://localhost:4000/item/${listName}`,
        headers
      )
        .then(res => {
          console.log("This is the list name");
          console.log(listName);
          console.log("The current items should come here");
          console.log(res);

          dispatch(setItemsInCurrentUserShoppingList(res.data));
          resolve();
        })
        .catch(err => {
          reject();
        });
    });
  };
}
