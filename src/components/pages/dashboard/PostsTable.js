import React, {useContext, useEffect, Fragment} from "react";
import {Table} from "semantic-ui-react";
import PostCell from "../dashboard/PostCell";
import BlogContext from "../../../context/blog/BlogContext";
import {GET_POSTS_SUCCESS, GET_POSTS_ERROR} from "../../../context/types";
import axios from "axios";

const PostTable = props => {
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
        <span>Loading...</span>
      ) : (
        <Table compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {state.posts.map(post => (
              <PostCell post={post} key={post.id} />
            ))}
          </Table.Body>
        </Table>
      )}
    </Fragment>
  );
};

export default PostTable;
