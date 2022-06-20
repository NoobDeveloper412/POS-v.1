/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const ADD_EMPLOYEE_REQUEST = "ADD_EMPLOYEE_REQUEST";
export const ADD_EMPLOYEE_REQUEST_SUCCESS = "ADD_EMPLOYEE_REQUEST_SUCCESS";
export const ADD_EMPLOYEE_REQUEST_FAILURE = "ADD_EMPLOYEE_REQUEST_FAILURE";
export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_REQUEST_SUCCESS = "ADD_PRODUCT_REQUEST_SUCCESS";
export const ADD_PRODUCT_REQUEST_FAILURE = "ADD_PRODUCT_REQUEST_FAILURE";
export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_CLEAR_ITEMS = "CART_RESET";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_PAY_FAI = "ORDER_PAY_FAIL";
export const ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS";
export const ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST";
export const ORDER_LIST_MY_REQUEST = "ORDER_LIST_MY_REQUEST";
export const ORDER_LIST_MY_SUCCESS = "ORDER_LIST_MY_SUCCESS";
export const ORDER_LIST_MY_FAIL = "ORDER_LIST_MY_FAIL";
export const ORDER_LIST_FAIL = "ORDER_LIST_FAIL";
export const ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS";
export const ORDER_LIST_REQUEST = "ORDER_LIST_REQUEST";
export const ORDER_DELIVER_FAIL = "ORDER_DELIVER_FAIL";
export const ORDER_DELIVER_SUCCESS = "ORDER_DELIVER_SUCCESS";
export const ORDER_DELIVER_REQUEST = "ORDER_DELIVER_REQUEST";
export const ORDER_PAY_FAIL = "ORDER_PAY_FAIL";
export const ORDER_CREATE_RESET = "ORDER_CREATE_RESET";
export const ORDER_DELIVER_RESET = "ORDER_DELIVER_RESET";
export const ORDER_LIST_MY_RESET = "ORDER_LIST_MY_RESET";
export const ORDER_PAY_RESET = "ORDER_PAY_RESET";

/* MENU */
export const MENU_SET_CLASSNAMES = "MENU_SET_CLASSNAMES";
export const MENU_CONTAINER_ADD_CLASSNAME = "MENU_CONTAINER_ADD_CLASSNAME";
export const MENU_CLICK_MOBILE_MENU = "MENU_CLICK_MOBILE_MENU";
export const MENU_CHANGE_DEFAULT_CLASSES = "MENU_CHANGE_DEFAULT_CLASSES";
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  "MENU_CHANGE_HAS_SUB_ITEM_STATUS";

export * from "./menu/actions";
export * from "./settings/actions";
export * from "./auth/actions";
