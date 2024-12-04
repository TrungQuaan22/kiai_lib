import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { registerUser, registerUserSuccess, registerUserFailure } from './../slices/authSlice';

function* handleRegisterUser(action: ReturnType<typeof registerUser>) {
  try {
    const response = yield call(axios.post, 'https://example.com/api/register', action.payload);
    yield put(registerUserSuccess());
    console.log('Register success:', response.data);
  } catch (error: any) {
    yield put(registerUserFailure(error.response?.data?.message || 'Failed to register'));
  }
}

export default function* authSaga() {
  yield takeLatest(registerUser.type, handleRegisterUser);
}
