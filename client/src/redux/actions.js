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

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET'

export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET'

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST'
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
export const USER_LIST_FAIL = 'USER_LIST_FAIL'
export const USER_LIST_RESET = 'USER_LIST_RESET'

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_FAIL = 'USER_DELETE_FAIL'

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL'
export const USER_UPDATE_RESET = 'USER_UPDATE_RESET'

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
