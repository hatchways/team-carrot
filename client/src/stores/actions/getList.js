import { GET_CURRENT_USER_SHOPPING_LIST } from "../actionTypes";
import { apiCallWithHeader } from "../../services/apiHeaders";

export function setCurrentUserShoppingList(list) {
  return {
    type: GET_CURRENT_USER_SHOPPING_LIST,
    list
  };
}

export function loadShoppingList(headers) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCallWithHeader("get", `http://localhost:4000/list`, headers)
        .then(res => {
          console.log("The current list should come here");
          console.log(res);
          dispatch(setCurrentUserShoppingList(res.data));
          resolve();
        })
        .catch(err => {
          reject();
        });
    });
  };
}
