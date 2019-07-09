import React from "react";
import "semantic-ui-css/semantic.min.css";
import AuthState from "./context/auth/AuthState";
import BlogState from "./context/blog/BlogState";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Create from "./components/pages/Create";
import Edit from "./components/pages/Edit";
import NotFound from "./components/pages/NotFound";

// UI
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Navbar from "./components/layout/Navbar";

// Hoc
import AppRoute from "./components/hoc/AppRoute";
import ProtectedRoute from "./components/hoc/ProtectedRoute";

import jwtDecode from "jwt-decode";

if (localStorage.getItem("token")) {
  const decodedToken = jwtDecode(localStorage.getItem("token"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
  }
}

function App() {
  return (
    <AuthState>
      <BlogState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <AppRoute exact path="/" component={Home} layout={MainLayout} />
              <AppRoute
                exact
                path="/register"
                component={Register}
                layout={MainLayout}
              />
              <AppRoute
                exact
                path="/login"
                component={Login}
                layout={MainLayout}
              />
              <ProtectedRoute
                exact
                path="/dashboard"
                layout={DashboardLayout}
                component={Dashboard}
              />
              <ProtectedRoute
                exact
                path="/dashboard/post/new"
                layout={DashboardLayout}
                component={Create}
              />
              <ProtectedRoute
                exact
                path="/dashboard/post/:id/update"
                layout={DashboardLayout}
                component={Edit}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </BlogState>
    </AuthState>
  );
}

export default App;
