import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addInvalidCred, removeInvalidCred } from "./error";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `http://localhost:3001/user/${type}`, userData)
        .then(({ token, ...payload }) => {
          localStorage.setItem("jwtToken", token);
          console.log("When login");
          console.log(token);
          dispatch(setCurrentUser(payload));
          dispatch(removeInvalidCred());
          resolve();
        })
        .catch(err => {
          dispatch(addInvalidCred(err.data.message));
          reject();
        });
    });
  };
}
