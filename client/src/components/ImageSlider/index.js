import React, { Component } from "react";
import "./style.css";
import dogs from "../../images/dogs.jpg"
import cats from "../../images/cats.jpg"
import fish from "../../images/fish.jpg"
import birds from "../../images/birds.jpg"
import reptiles from "../../images/reptiles.jpg"
import rabbit from "../../images/rabbit.jpg"
import rat from "../../images/rat.jpg"
import turtle from "../../images/turtle.jpg"
class ImageSlider extends Component {

  render(){
  return (   
    <div id="carouselExampleFade" className="carousel slide " data-ride="carousel">
  <div className="carousel-inner">


    <div className="carousel-item active">
     <div className="row">
       <div className="col-3">
         <img  src={dogs} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Dog</div>
       </div>

       <div className="col-3">
         <img  src={cats} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Cat</div>
       </div>

       <div className="col-3">
         <img  src={fish} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Fish</div>
       </div>

       <div className="col-3">
         <img  src={birds} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Birds</div>
       </div>

     </div>
    </div>

    <div className="carousel-item">
     <div className="row">
       <div className="col-3">
         <img  src={reptiles} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Reptiles</div>
       </div>

       <div className="col-3">
         <img  src={rabbit} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Rabbit</div>
       </div>

       <div className="col-3">
         <img  src={rat} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Rat</div>
       </div>

       <div className="col-3">
         <img  src={turtle} className="img-thumbnail" alt="services"/>
         <div className="pet-name">Turtle</div>
       </div>

     </div>
    </div>



  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    
  
  );
}
}
export default ImageSlider;
