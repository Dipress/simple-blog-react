import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const ProtectedRoute = ({component: Component, layout: Layout, ...rest}) => {
  const {state} = useContext(AuthContext);
  return (
    <Route
      render={props =>
        state.isAuthenticated ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
