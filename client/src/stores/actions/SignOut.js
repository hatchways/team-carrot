const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

export const SignOutAction = () => {
  console.log("This is SignOut");
  return {
    type: REMOVE_CURRENT_USER
  };
};
