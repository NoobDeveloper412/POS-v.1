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
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
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
  (title, brand, description, alertStock, price, count_in_stock, image) =>
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
          product_description: description,
          alert_stock: alertStock,
          price: price,
          count_in_stock: count_in_stock,
          image: image,
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

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`http://localhost:8000/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product_name: data.product_name,
      id: data.id,
      product_brand: data.product_brand,
      product_tagline: data.product_tagLine,
      product_description: data.product_description,
      product_instructions: data.product_instructions,
      product_quantity: qty,
      count_in_stock: data.count_in_stock,
      alert_stock: data.alert_stock,
      price: data.price,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  console.log(id);
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
