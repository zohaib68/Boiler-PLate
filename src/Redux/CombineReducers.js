import { combineReducers } from "redux";
import { logInReducer } from "../Modules/Users/Redux/Reducers/Users.reducers";

export const rootReducer = combineReducers({
  login: logInReducer,
});
