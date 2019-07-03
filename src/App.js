import React from "react";
import "semantic-ui-css/semantic.min.css";
import AuthState from "./context/auth/AuthState";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Create from "./components/pages/Create";
import Update from "./components/pages/Update";
import NotFound from "./components/pages/NotFound";

// UI
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Navbar from "./components/layout/Navbar";

// Hoc
import AppRoute from "./components/hoc/AppRoute";
import ProtectedRoute from "./components/hoc/ProtectedRoute";

function App() {
  return (
    <AuthState>
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
              component={Update}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
