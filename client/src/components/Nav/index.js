import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <div className="container">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
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
        <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {/* NEW - add a link to the home and profile pages */}
      {
  isAuthenticated && (
    <span>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/profile">Profile</Link>&nbsp;
      {/* NEW - Add a link to the /external-api route */}
      <Link to="/external-api">External API</Link>
    </span>
  )}
    </div>
      </div>  
      </div>
    </nav>
  );
}

export default Nav;
