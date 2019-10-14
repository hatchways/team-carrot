import { PRE_SELECTED_LIST } from "../actionTypes";

export function saveListName(preSelectedList) {
  console.log("This is saveListName");
  return {
    type: PRE_SELECTED_LIST,
    preSelectedList
  };
}
