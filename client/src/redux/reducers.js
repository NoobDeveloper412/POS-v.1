import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import { userRegisterReducer, userLoginReducer } from "./auth/reducer";
import authUser  from "./auth/reducer";

const reducers = combineReducers({
  menu,
  settings,
  userLoginReducer,
  authUser,
  userRegisterReducer,
});

export default reducers;
