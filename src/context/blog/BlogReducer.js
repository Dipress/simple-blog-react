import {
  POST_CREATE_SUCCESS,
  POST_CREATE_ERROR,
  GET_POST_SUCCESS,
  GET_POST_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
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
