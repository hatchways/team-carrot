import { SAVE_ITEM_URL } from "../actionTypes";

export function saveItemUrl(link) {
  console.log("This is saveItemUrl");
  return {
    type: SAVE_ITEM_URL,
    link
  };
}
