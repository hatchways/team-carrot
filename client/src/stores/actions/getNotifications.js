import { GET_NOTIFICATIONS } from "../actionTypes";
import { apiCallWithHeader } from "../../services/apiHeaders";

export function setCurrentNotifications(notifications) {
  console.log("setCurrentNotification is being hit");
  return {
    type: GET_NOTIFICATIONS,
    notifications
  };
}

export function loadNotifications(headers) {
  return dispatch => {
    console.log("loadNotifications is hit");
    return new Promise((resolve, reject) => {
      return apiCallWithHeader(
        "get",
        `http://localhost:4000/notification/all`,
        headers
      )
        .then(res => {
          console.log("The current notifications should come here");
          console.log(res);
          dispatch(setCurrentNotifications(res.data));
          resolve();
        })
        .catch(err => {
          console.log("The current notifications should come here");
          console.log(err);
          reject();
        });
    });
  };
}
