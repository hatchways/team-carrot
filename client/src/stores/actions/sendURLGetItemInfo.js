import { apiCallWithHeader } from "../../services/apiHeaders";
import { SET_ITEM_DETAILS } from "../actionTypes";

export function setItemDetails(itemDetail) {
  return {
    type: SET_ITEM_DETAILS,
    itemDetail
  };
}

export function sendUrl(userData, headers) {
  console.log("send URL is hit");
  return dispatch => {
    console.log("send URL is hit");
    return new Promise((resolve, reject) => {
      return apiCallWithHeader(
        "post",
        `http://localhost:4000/item/scrapeItem`,
        userData,
        headers
      )
        .then(res => {
          console.log("These are the details");
          console.log(res);
          dispatch(setItemDetails(res));
          resolve();
        })
        .catch(err => {
          reject();
        });
    });
  };
}

// import { apiCallWithHeader } from "../../services/apiHeaders";
// import { HOLD_ITEM_DETAILS } from "../actionTypes";

// export function holdItemDetails(itemDetails) {
//   return {
//     type: HOLD_ITEM_DETAILS,
//     itemDetails
//   };
// }

// export function sendNewItemUrl(userData, headers) {
//   console.log("Hits sends new Item");
//   return dispatch => {
//     console.log("Hits sends new Item");
//     return new Promise((resolve, reject) => {
//       return apiCallWithHeader(
//         "post",
//         `http://localhost:4000/item/scrapeItem`,
//         userData,
//         headers
//       )
//         .then(res => {
//           console.log("These are the item details");
//           console.log(res);

//           dispatch(holdItemDetails(res));
//           resolve();
//         })
//         .catch(err => {
//           reject();
//         });
//     });
//   };
// }
