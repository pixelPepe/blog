import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserSuccess, fetchUserError } from './actions';
import { FETCH_USER_REQUEST } from './actionTypes';

function* commentsSaga(action: any) {
  try {
    const { data } = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    yield put(fetchUserSuccess(data));
  } catch (error: any) {
    yield put(fetchUserError(error.message));
  }
}

export function* fetchUserSaga() {
  yield takeEvery(FETCH_USER_REQUEST, commentsSaga);
}
