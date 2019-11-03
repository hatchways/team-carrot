// const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
import { REMOVE_CURRENT_USER } from "../actionTypes";

export function SignOutAction() {
  console.log("This is SignOut");
  return {
    type: REMOVE_CURRENT_USER
  };
}
