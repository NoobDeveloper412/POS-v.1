import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import authUser, { addEmployeeReducer, cartReducer } from "./auth/reducer";

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  addEmployeeReducer,
  cart: cartReducer,
});

export default reducers;
