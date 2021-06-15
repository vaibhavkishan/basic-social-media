import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/logging';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarBtn">
      <NavLink className="navbar-brand" to="/">
        <img
          className="logo"
          src={require('../services/images/logo.png').default}
          alt=""
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink className="nav-item navbarLink" to="/">
        Home <span className="sr-only"></span>
      </NavLink>
      <NavLink className="nav-item navbarLink" to="/users">
        Users
      </NavLink>
      {localStorage.getItem('currentUser') ? (
        <NavLink className="nav-item navbarLink" onClick={logout} to="/">
          Logout
        </NavLink>
      ) : (
        <NavLink className="nav-item navbarLink" to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
