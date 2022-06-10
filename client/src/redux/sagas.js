import { takeLatest } from 'redux-saga/effects';
import { LOGIN_USER, REGISTER_USER } from './actions';
import { loginSaga, registerSaga } from './auth/saga';


export default function* watchUserAuthentication() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, loginSaga);
}