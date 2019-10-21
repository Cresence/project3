import React from "react";
import "./style.css";
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import banner4 from "../../images/banner4.jpg"
import banner5 from "../../images/banner5.jpg"
function Banner() {
  return (
    // <div className="carousel">
    //   <img src={`${images[0]}`} alt="banner" width="100%"/>

    // </div>
      
        <div id="demo" className="carousel slide" data-ride="carousel">
    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
      <li data-target="#demo" data-slide-to="3"></li>
      <li data-target="#demo" data-slide-to="4"></li>
    </ul>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={banner1} alt="Los Angeles" width="1100" height="500" />
        <div className="carousel-caption">
          <h3>Introducing</h3>
          <p>The ultimate hotel experience!</p>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={banner2} alt="Chicago" width="1100" height="500"/>
        <div className="carousel-caption">
          <h3>Great food!</h3>
          <p>Enhancing Life around great food and treats.</p>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={banner3} alt="New York" width="1100" height="500"/>
        <div className="carousel-caption">
          <h3>Comfy Bed!</h3>
          <p>Luxurious bedding.</p>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={banner4} alt="New York" width="1100" height="500"/>
        <div className="carousel-caption">
          <h3>Clean Space!</h3>
          <p>All spaces are clean and organized.</p>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={banner5} alt="New York" width="1100" height="500"/>
        <div className="carousel-caption">
          <h3>Play time!</h3>
          <p>Lots of toys and activites.</p>
        </div>   
      </div>
    </div>
    <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
  </div>
  
     
  );
}

export default Banner;
