import React, {useState, useContext} from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import {AUTH_CANCEL} from "../../context/types";

const NavBar = props => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, {name}) => setActiveItem(name);

  const {state, dispatch} = useContext(AuthContext);

  const handleClick = e => {
    e.preventDefault();
    dispatch({
      type: AUTH_CANCEL
    });
  };

  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      {state.isAuthenticated && (
        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          onClick={handleItemClick}
          as={Link}
          to="/dashboard"
        />
      )}
      {!state.isAuthenticated && (
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      )}
      {state.isAuthenticated && (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            as={Link}
            to="/login"
            onClick={handleClick}
          />
        </Menu.Menu>
      )}
    </Menu>
  );
};

export default NavBar;
