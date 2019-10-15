import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <div className="container">
      {/* <a className="navbar-brand" href="/">Home</a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/news">News and  Announcements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="/booknow">Book Hotel</a>
          </li>  
        </ul>
        <ul className="navbar-nav ml-auto">
        {!isAuthenticated && (
        <li  className="nav-item">
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
        </li>
      )}

      
      {
  isAuthenticated && (
    <React.Fragment>
       <li  className="nav-item"><Link to="/" className="nav-link">Home</Link> </li>
       <li  className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
       <li  className="nav-item"><Link to="/external-api" className="nav-link">External API</Link></li>
    </React.Fragment>
  )}
  {isAuthenticated && <li  className="nav-item"><button onClick={() => logout()}>Log out</button></li>}

        </ul>

      </div>  
      </div>
      <div className="decor_semicircle"></div>
    </nav>

  );
}

export default Nav;
