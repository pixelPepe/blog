import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchPostsSuccess, fetchPostsError } from './actions';
import { FETCH_POSTS_REQUEST } from './actionTypes';
import services from 'services/apiService';

function* fetchPosts() {
  try {
    const response: AxiosResponse = yield call(services.getPosts);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsError(error));
  }
}

export function* fetchPostsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
}
