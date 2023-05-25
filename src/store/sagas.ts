import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './userSaga';
import { fetchPostsSaga } from './postsSaga';

export default function* rootSaga() {
  yield all([fetchUserSaga(), fetchPostsSaga()]);
}
