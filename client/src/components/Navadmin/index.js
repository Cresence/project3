import React from "react";

function Navadmin() {
  return (
    
    <div className="left-navigationbar">
        <ul>
          <li><a href="/admin/testimonial"><i className="fas fa-tasks"></i> Manage Testimonial</a></li>
          <li><a href="/admin/news"><i className="fas fa-newspaper"></i> Manage News</a></li>
          <li><a href="/admin/booking"><i className="fas fa-pen"></i> Manage Booking</a> </li>
          <li><a href="/admin"><i className="fas fa-paw"></i> Add Services</a></li>
         
        </ul>
    </div>
  );
}

export default Navadmin;
