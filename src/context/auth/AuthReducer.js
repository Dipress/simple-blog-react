import {
  REGISTER_SUCCES,
  REGISTER_ERROR,
  AUTH_SUCCES,
  AUTH_ERROR,
  AUTH_CANCEL
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCES:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    case REGISTER_ERROR:
      localStorage.clear("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    case AUTH_SUCCES:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    case AUTH_ERROR:
      localStorage.clear("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    case AUTH_CANCEL:
      localStorage.clear("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
