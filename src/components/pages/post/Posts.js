import React, {Fragment, useEffect, useContext} from "react";
import BlogContext from "../../../context/blog/BlogContext";
import {GET_POSTS_SUCCESS, GET_POSTS_ERROR} from "../../../context/types";
import PostItem from "./PostItem";
import axios from "axios";

const Posts = props => {
  const {state, dispatch} = useContext(BlogContext);

  const getPosts = async () => {
    await axios
      .get("http://localhost:8080/posts")
      .then(data => {
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: data.data.posts
        });
      })
      .catch(error => {
        dispatch({type: GET_POSTS_ERROR});
      });
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {state.loading ? (
        <div>Loading</div>
      ) : (
        state.posts.map(post => <PostItem post={post} key={post.id} />)
      )}
    </Fragment>
  );
};

export default Posts;
