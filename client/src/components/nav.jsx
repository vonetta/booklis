import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
                <NavLink className="navbar-brand" to="/">{new Date().getFullYear()} BookList Tracker </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        {/* <li className="nav-item"> */}
                        <NavLink to="/book-list" className="nav-link">Home</NavLink>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                        <NavLink to="/new-book" className="nav-link">New Book</NavLink>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                        <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        {/* </li> */}
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Nav;

