import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_REQUEST_SUCCESS,
  ADD_EMPLOYEE_REQUEST_FAILURE,
} from "../actions";

const INIT_STATE = {
  user: localStorage.getItem("user_id"),
  forgotUserMail: "",
  newPassword: "",
  resetPasswordCode: "",
  loading: false,
  error: "",
};

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return { loading: false, authUser: action.payload };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        error: action.payload.message,
      };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: "" };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotUserMail: action.payload,
        error: "",
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        forgotUserMail: "",
        error: action.payload.message,
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: "" };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
        resetPasswordCode: "",
        error: "",
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        newPassword: "",
        resetPasswordCode: "",
        error: action.payload.message,
      };
    case REGISTER_USER:
      return { ...state, loading: true, error: "" };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, error: "" };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        error: action.payload.message,
      };
    case LOGOUT_USER:
      return { ...state, user: null, error: "" };
    default:
      return { ...state };
  }
};

export const addEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_REQUEST:
      return { loading: true };
    case ADD_EMPLOYEE_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ADD_EMPLOYEE_REQUEST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
