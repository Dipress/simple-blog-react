import {
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  POST_CREATE_SUCCESS,
  POST_CREATE_ERROR,
  GET_POST_SUCCESS,
  GET_POST_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case GET_POSTS_ERROR: {
      return {
        ...state,
        posts: [],
        loading: true,
      }
    }
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case POST_CREATE_ERROR:
      return state;
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    case GET_POST_ERROR:
      return {
        ...state,
        loading: true,
        post: {}
      };
    default:
      return state;
  }
};
