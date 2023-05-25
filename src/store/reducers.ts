import { combineReducers } from 'redux';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from './actionTypes';

interface UserState {
  id: number | null;
  loading: boolean;
  user: any;
  error: any;
}

interface PostsState {
  loading: boolean;
  posts: any[];
  error: any;
}

const initialUserState: UserState = {
  id: null,
  loading: false,
  user: [],
  error: null,
};

const initialPostsState: PostsState = {
  loading: false,
  posts: [],
  error: null,
};

const userReducer = (state = initialUserState, action: any) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const postsReducer = (state = initialPostsState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default rootReducer;
