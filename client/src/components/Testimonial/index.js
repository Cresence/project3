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
            this.setState({ testimonials: res.data, person_name: "", address: "", description: "" })
          )
          .catch(err => console.log(err));
    };

render(){
  
  return (
    <div id="myTestimonial" className="carousel slide" data-ride="carousel">
        {this.state.testimonials.length ? (
           	<div className="carousel-inner">
              {this.state.testimonials.map((testimonial, index) => (
              
                <div className={index === 0 ? 'item carousel-item active' : 'item carousel-item'} key={testimonial._id}>
                <div className="img-box"><img src={`${testimonial_img}`} alt="" /></div>
                <p className="testimonial">{testimonial.description}</p>
                <p className="overview"><b>{testimonial.person_name}</b>, {testimonial.address}</p>
              </div>
              ))}
            </div>
            
          ) : (
            <h3 className="text-center">No Results to Display</h3>
          )}
			
				<ol className="carousel-indicators">
        {this.state.testimonials.map((testimonial, index) => (
					<li data-target="#myTestimonial" data-slide-to={index} className={index === 0 ? 'active' : ''} key={testimonial._id}></li>
          ))}
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
