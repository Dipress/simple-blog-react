import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import BlogContext from "../../../context/blog/BlogContext";
import { DELETE_POST_SUCCESS } from "../../../context/types";
import axios from "axios";

const PostCell = props => {
  const { dispatch } = useContext(BlogContext);

  const deletePost = async id => {
    await axios
      .delete(`http://localhost:8080/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(dispatch({ type: DELETE_POST_SUCCESS, payload: id }));
  };

  const onClick = () => {
    deletePost(props.post.id)
  }
  return (
    <Table.Row>
      <Table.Cell>{props.post.id}</Table.Cell>
      <Table.Cell>{props.post.title}</Table.Cell>
      <Table.Cell textAlign="right">
        <Button.Group>
          <Button color="blue">Show</Button>
          <Button
            color="yellow"
            as={Link}
            to={`/dashboard/post/${props.post.id}/update`}
          >
            Update
          </Button>
          <Button onClick={onClick} color="red">
            Delete
          </Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  );
};

export default PostCell;
