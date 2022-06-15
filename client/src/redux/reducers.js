import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import authUser, { addEmployeeReducer } from "./auth/reducer";

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  addEmployeeReducer,
});

export default reducers;
