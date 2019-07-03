import React, { Fragment, useState, useContext, useEffect } from "react";
import { Grid, Segment, Form, Button, Message } from "semantic-ui-react";
import { GET_POST_SUCCESS, GET_POST_ERROR } from "../../context/types";
import BlogContext from "../../context/blog/BlogContext";
import axios from "axios";

const Edit = props => {
  const { state, dispatch } = useContext(BlogContext);
  const [post, setPost] = useState({
    id: null,
    user_id: null,
    title: "",
    body: "",
    created_at: "",
    updated_at: ""
  });

  useEffect(() => {
    getPost(props.match.params.id);
  }, [props.match.params.id]);

  const [errors, setErrors] = useState({
    message: null,
    data: {}
  });

  const getPost = async id => {
    await axios
      .get(`http://localhost:8080/posts/${id}`)
      .then(data => {
        dispatch({ type: GET_POST_SUCCESS, payload: data.data });
        setPost({
          ...post,
          id: data.data.id,
          user_id: data.data.user_id,
          title: data.data.title,
          body: data.data.body,
          created_at: data.data.created_at,
          updated_at: data.data.updated_at
        });
      })
      .catch(error => {
        dispatch({ type: GET_POST_ERROR });
        setErrors({
          message: error.response ? error.response.data.message : error.message,
          data: error.response ? error.response.data.errors : ""
        });
      });
  };

  const onChange = e =>
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });

  const updatePost = async post => {
    await axios.put(
      `http://localhost:8080/posts/${post.id}`,
      { title, body },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  };

  const onSubmit = (e, post) => {
    e.preventDefault();
    updatePost(post);
  };

  const { title, body } = post;

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {errors.message && (
        <Message negative>
          <Message.Header style={{ textTransform: "capitalize" }}>
            {errors.message}:
          </Message.Header>
          <ul>
            {errors.data &&
              Object.keys(errors.data).map(key => (
                <li key={key}>
                  {key}: {errors.data[key]}
                </li>
              ))}
          </ul>
        </Message>
      )}
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 800 }}>
            <Form size="large" onSubmit={onSubmit} noValidate>
              <Segment stacked>
                <h1>Edit Post</h1>
                <Form.Input
                  onChange={onChange}
                  fluid
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  error={errors.data && errors.data.title ? true : false}
                />
                <Form.TextArea
                  onChange={onChange}
                  rows={12}
                  name="body"
                  placeholder="Content"
                  value={body}
                  error={errors.data && errors.data.body ? true : false}
                />
                <Button type="submit" color="teal" fluid size="large">
                  Edit
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Edit;
