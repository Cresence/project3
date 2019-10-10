import React from "react";

function Navadmin() {
  return (
    
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <div className="container">
      <a className="navbar-brand" href="/admin">Admin Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbaradmin">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbaradmin">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/admin">Manage Testimonial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/news">Manage News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/booking">Manage Booking</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="/admin">Add Services</a>
          </li>
           
        </ul>
      </div>  
      </div>
    </nav>
  );
}

export default Navadmin;
