import React, {useState, useContext, Fragment} from "react";
import {Grid, Segment, Form, Button, Message} from "semantic-ui-react";
import AuthContext from "../../context/auth/AuthContext";
import {REGISTER_SUCCES, REGISTER_ERROR} from "../../context/types";
import axios from "axios";

const Register = props => {
  const {dispatch} = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    message: null,
    data: {}
  });

  const onChange = e =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  const register = async user => {
    await axios
      .post("http://localhost:8080/signup", {username, email, password})
      .then(data => {
        dispatch({type: REGISTER_SUCCES, payload: data.data.token});
        props.history.push("/dashboard");
      })
      .catch(error => {
        dispatch({type: REGISTER_ERROR});
        setErrors({
          message: error.response ? error.response.data.message : error.message,
          data: error.response ? error.response.data.errors : ""
        });
      });
  };
  const onSubmit = (e, user) => {
    e.preventDefault();
    register(user);
  };

  const {username, email, password} = user;

  return (
    <Fragment>
      {errors.message && (
        <Message negative>
          <Message.Header style={{textTransform: "capitalize"}}>
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
      <Grid textAlign="center" style={{height: "100vh"}} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column style={{maxWidth: 450}}>
            <Form size="large" onSubmit={onSubmit} noValidate>
              <Segment stacked>
                <h1>Register</h1>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onChange}
                  error={errors.data && errors.data.username ? true : false}
                />
                <Form.Input
                  fluid
                  icon="envelope outline"
                  iconPosition="left"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  error={errors.data && errors.data.email ? true : false}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  error={errors.data && errors.data.password ? true : false}
                />
                <Button type="submit" color="teal" fluid size="large">
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Register;
