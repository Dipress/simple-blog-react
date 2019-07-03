import React, {useReducer} from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: localStorage.getItem("token") ? true : false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
