import { PRE_SELECTED_LIST, CLEAR_PRE_SELECTED_LIST } from "../actionTypes";

export function saveListName(preSelectedList) {
  console.log("This is saveListName");
  return {
    type: PRE_SELECTED_LIST,
    preSelectedList
  };
}

export function clearListName() {
  console.log("This is clearListName");
  return {
    type: CLEAR_PRE_SELECTED_LIST
  };
}
