import Axios from "axios";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_REQUEST_SUCCESS,
  ADD_EMPLOYEE_REQUEST_FAILURE,
  ADD_PRODUCT_REQUEST_SUCCESS,
  ADD_PRODUCT_REQUEST_FAILURE,
  ADD_PRODUCT_REQUEST,
} from "../actions";

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  payload: { email: email, password: password },
});
export const loginUserSuccess = (authUser) => ({
  type: LOGIN_USER_SUCCESS,
  payload: authUser,
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const forgotPassword = (forgotUserMail, history) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, history },
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ resetPasswordCode, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword,
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

export const addEmployees =
  (name, email, password, isAdmin, phoneNumber) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_EMPLOYEE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await Axios.post(
        "http://localhost:8000/users",
        { name, email, password, isAdmin, phoneNumber },
        config
      );
      console.log(data);
      dispatch({
        type: ADD_EMPLOYEE_REQUEST_SUCCESS,
        payload: data,
      });

      // localStorage.setItem("userInfo", JSON.stringify(reponse));
    } catch (error) {
      dispatch({
        type: ADD_EMPLOYEE_REQUEST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const addProduct =
  (
    title,
    // tagLine,
    brand,
    description,
    //  instructions,
    quantity,
    alertStock,
    // price,
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ADD_PRODUCT_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await Axios.post(
        "http://localhost:8000/products",
        {
          product_name: title,
          product_brand: brand,
          // product_tagline:tagLine,
          product_description: description,
          // product_instructions:instructions,
          product_quantity: quantity,
          alert_stock: alertStock,
          // price:price,
        },
        config
      );
      console.log(data);
      dispatch({
        type: ADD_PRODUCT_REQUEST_SUCCESS,
        payload: data,
      });

      // localStorage.setItem("userInfo", JSON.stringify(reponse));
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_REQUEST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
