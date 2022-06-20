import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import authUser, { addEmployeeReducer, cartReducer } from "./auth/reducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from "./orders/reducer";

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  addEmployeeReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
});

export default reducers;
