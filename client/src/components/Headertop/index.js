import React from "react";
import images from "../../images"

function Headertop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <img src={`${images[1]}`} alt="banner" width="100%"/>

          </div>
          <div className="col-sm-8">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headertop;
