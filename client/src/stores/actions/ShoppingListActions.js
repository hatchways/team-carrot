import { ADD_LIST } from "../actionTypes";

export function addList(text) {
  return {
    type: ADD_LIST,
    text
  };
}
