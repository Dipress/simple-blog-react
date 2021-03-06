import React, { Fragment, useState, useContext } from "react";
import { Grid, Segment, Form, Button, Message } from "semantic-ui-react";
import { POST_CREATE_SUCCESS, POST_CREATE_ERROR } from "../../context/types";
import BlogContext from "../../context/blog/BlogContext";
import axios from "axios";

const Create = props => {
  const { dispatch } = useContext(BlogContext);

  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const [errors, setErrors] = useState({
    message: null,
    data: {}
  });

  const onChange = e =>
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });

  const createPost = async post => {
    await axios
      .post(
        "http://localhost:8080/posts",
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(data => {
        dispatch({ type: POST_CREATE_SUCCESS, payload: data.data });
        props.history.push("/dashboard");
      })
      .catch(error => {
        dispatch({ type: POST_CREATE_ERROR });
        setErrors({
          message: error.response ? error.response.data.message : error.message,
          data: error.response ? error.response.data.errors : ""
        });
      });
  };

  const onSubmit = (e, post) => {
    e.preventDefault();
    createPost(post);
  };

  const { title, body } = post;
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
                <h1>Create Post</h1>
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
                  Create
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Create;
