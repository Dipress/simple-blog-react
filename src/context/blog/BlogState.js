import React, { useReducer } from "react";
import BlogContext from "./BlogContext";
import BlogReducer from "./BlogReducer";

const BlogState = props => {
  const initialState = {
    posts: [],
    post: {},
    loading: true
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  return (
    <BlogContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
