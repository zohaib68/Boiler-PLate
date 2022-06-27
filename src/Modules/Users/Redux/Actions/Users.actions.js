import { LOGIN } from "../Types/users.types";

export const logIn = (payLoad) => {
  return {
    type: LOGIN,
    payLoad: payLoad,
  };
};
export const logInThunk = (payLoad, Navigate) => {
  return (dispatch) => {
    console.log("reachingLOg");
    dispatch(logIn(payLoad));
    payLoad ? Navigate("/") : Navigate("/login");
  };
};
export const logOutThunk = (payLoad, Navigate) => {
  return (dispatch) => {
    console.log("reachingLOg");
    dispatch(logIn(payLoad));
    Navigate("/login");
  };
};
