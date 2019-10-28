import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
// import { Link } from "react-router-dom";
import "./style.css";
import NavAdmin from '../Navadmin/index'
import { Link } from "react-router-dom";

const Nav = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });
  return (
    <nav className="navbar navbar-expand-md theme-color-dark navbar-dark sticky-top">
      <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News and  Announcements</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>  
          <li className="nav-item">
            <Link className="nav-link"  
              to={{
                pathname: "/booknow",
                state: user
                }}
            >Book Hotel</Link>
          </li>
          {isAuthenticated && (
          <li className="nav-item">
              <Link to="/profile" className="nav-link" >Profile</Link>
          </li>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
        {!isAuthenticated && (
        <li  className="nav-item">
        <button
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
        </li>
      )}

      
  {isAuthenticated && <li  className="nav-item"><button onClick={() => logoutWithRedirect()}>Log out</button></li>}
        </ul>
      </div>  
      </div>
      <div className="decor_semicircle"></div>
    </nav>

  );
}

export default Nav;
