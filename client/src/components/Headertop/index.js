import React from "react";

import SandyspetHotel_LOGO from "../../images/SandyspetHotel_LOGO.gif"

import "./style.css";

function Headertop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">

          <img src={SandyspetHotel_LOGO} alt="logo" width="100%" className="logo"/>


          </div>
          <div className="col-sm-8">
            <ul className="list-inline social-media-link">
              <li className="list-inline-item">
                <p><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></p>
              </li>
              <li className="list-inline-item">
                <p><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square" aria-hidden="true"></i></a></p>
              </li>
              <li className="list-inline-item">
                <p><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></p>
              </li>
              <li className="list-inline-item">
                <p><a href="https://youtube.com" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headertop;
