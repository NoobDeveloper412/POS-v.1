import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

export function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

// import { createStore, combineReducers, applyMiddleware } from "redux";
// // import { composeWithDevTools } from "redux-devtools-extension";
// import { userLoginReducer, userRegisterReducer } from "./auth/reducer";


// const reducer = combineReducers({
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
// });

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : {};

// const initialState = {
// //   cart: {
// //     cartItems: cartItemsFromStorage,
// //     shippingAddress: shippingAddressFromStorage,
// //   },
//   userLogin: { userInfo: userInfoFromStorage },
// };

// // const middleware = [thunk];

// export const configureStore = createStore(
//   reducer,
//   initialState,
// //   composeWithDevTools(applyMiddleware(...middleware))
// );


