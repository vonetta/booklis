import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { getUser, logoutCurrentUser } from "../utils/userStorage";

const Nav = props => {
  const [login, setLogin] = useState();
  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await getUser();
      await setLogin(currentUser);
      if (!currentUser) {
        props.history.push("/");
      } else {
        props.history.push("/books");
      }
    }
    getCurrentUser();
  }, []);

  const logout = async () => {
    await logoutCurrentUser();
    setLogin();
    props.history.push("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg flex-column flex-md-row navbar-light">
        <NavLink className="navbar-brand" to="/">
          {new Date().getFullYear()} Book Challenge
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            {login !== undefined && (
              <>
                <NavLink to="/new-book" className="nav-link">
                  New Book
                </NavLink>
                <NavLink to="/books" className="nav-link">
                  Book List
                </NavLink>
                <p className="nav-link">|</p>
                <p className="nav-link"> Welcome {login.firstName} </p>
                <p onClick={logout} className="nav-link">
                  Logout
                </p>
              </>
            )}

            {!login && (
              <>
                <NavLink to="/sign-up" className="nav-link ">
                  Sign Up
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>{" "}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Nav);
