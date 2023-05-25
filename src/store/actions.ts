import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from './actionTypes';

export const fetchUserRequest = (id: number) => ({
  type: FETCH_USER_REQUEST,
  payload: id,
});

export const fetchUserSuccess = (user: any) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserError = (error: any) => ({
  type: FETCH_USER_ERROR,
  payload: error,
});

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: any) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error: any) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});
