import { LOGIN } from "../Types/users.types";

const initialState = {
  isLoggedIn: false,
};
export const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.payLoad,
      };
    default:
      return state;
  }
};
