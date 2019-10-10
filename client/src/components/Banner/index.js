import React from "react";
import images from "../../images"
function Nav() {
  return (
    <div className="carousel">
      <img src={`${images[0]}`} alt="banner" width="100%"/>
    </div>
  );
}

export default Nav;
