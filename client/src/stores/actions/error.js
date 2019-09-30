import { ADD_INVALID_CRED, REMOVE_INVALID_CRED } from "../actionTypes";

export const addInvalidCred = error => ({
  type: ADD_INVALID_CRED,
  error
});

export const removeInvalidCred = () => ({
  type: REMOVE_INVALID_CRED
});
