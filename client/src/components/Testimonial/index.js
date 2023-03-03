import React, { Component } from "react";
import testimonial_img from "../../images/testimonial.png"
import "./style.css";
import API from "../../utils/API";

class Testimonial extends  Component{
	state = {
        testimonials: [],
        person_name: "",
        address: "",
        description: ""
    };
    
    componentDidMount() {
        this.loadTestimonials();
    }
    
    loadTestimonials = () => {
      API.getTestimonials()
        .then(res =>
          !res ? this.setState({ testimonials: [], person_name: "", address: "", description: "" }) : this.setState({ testimonials: res.data || [], person_name: "", address: "", description: "" })
        )
        .catch(err => console.log(err));
    };
  
render(){
  const localTestimonials = () => {
    let e = [];
    e = this.state.testimonials || [];
    return e;
  }
  return (
    <div id="myTestimonial" className="carousel slide" data-ride="carousel">
        {localTestimonials().length ? (
           	<div className="carousel-inner">
              {localTestimonials().map((testimonials, index) => (
                <div className={index.length ? 'item carousel-item active' : 'item carousel-item'} key={testimonials._id}>
                <div className="img-box"><img src={`${testimonial_img}`} alt="" /></div>
                <p className="testimonial">{testimonials.description}</p>
                <p className="overview"><b>{testimonials.person_name}</b>, {testimonials.address}</p>
              </div>
              ))}
            </div>
            
          ) : ( <h3 className="text-center">No Results to Display</h3> )};
			
				<ol className="carousel-indicators">
        {localTestimonials().length ? : localTestimonials().map((testimonials, index) => (
					<li data-target="#myTestimonial" data-slide-to={index} className={!index ? 'active' : ''} key={testimonials._id}></li>
          )) : (
            <span>Nothing to see here.</span>
          )};
        </ol>  
       
		<a className="carousel-control left carousel-control-prev" href="#myTestimonial" data-slide="prev">
			<i className="fa fa-angle-left"></i>
		</a>
		<a className="carousel-control right carousel-control-next" href="#myTestimonial" data-slide="next">
			<i className="fa fa-angle-right"></i>
		</a>
	</div>
  );
}
}

export default Testimonial;