import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navbar (props) {

  function logout () {
    props.logout()
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} height="30" width="30" alt="Logo"/>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/home">
            Home
          </Link>
          <Link className="navbar-item" to="/add">
            Add Todo
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </div>
          
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link id="login-button" className="button is-primary" to="/">Log In</Link>
              <a id="logout-button" className="button is-light" onClick={logout}>Log Out</a>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar
