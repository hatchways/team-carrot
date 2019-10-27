import { CLEAR_ITEM_DETAILS } from "../actionTypes";

export const clearItemDetails = () => {
  console.log("This is clearItemDetails");
  return {
    type: CLEAR_ITEM_DETAILS
  };
};
