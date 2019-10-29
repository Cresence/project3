import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import {Mainheading} from "../components/Mainheading"
import Map from "../components/Map/Map"

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    success:"none",
    danger:"none",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  loadPage = () => {
    this.setState({success:"block", danger:"none"})
    this.setState({ 
      name:"",
      email:"",
      message:""
    })
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.name && this.state.email && this.state.message) {
    try{
      API.postContact({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })
      this.loadPage();
    }
   catch(err){
    alert("Something");
   }
  }
  else{
    this.setState({danger:"block", success:"none"})
  }
};
  render() {
  return (
    <div>
    <Map/>
    <div className="py-5">
      <Container>
      <Row>
        <Col size="sm-12">
        <div className="text-center">
        <Mainheading  color="dark">Contact Us</Mainheading>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="sm-6">
        <div  className="form-outer">
        <form >
        <label>Your Name</label>
        <Input
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <label>Email Address</label>
        <Input
          value={this.state.email}
          type="email"
          onChange={this.handleInputChange}
          name="email"
          placeholder="Enter Email"
        />
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        
        <label htmlFor="message">Your message</label>
        <TextArea
          value={this.state.message}
          onChange={this.handleInputChange}
          name="message"
          placeholder=" "
        />
        <FormBtn
          // disabled={!(this.state.name && this.state.email)}
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </form>
        <div className="alert alert-success alert-dismissible" style={{display: this.state.success}}>
          <button type="button" className="close" data-dismiss="alert">&times;</button>
          Thank You for Contacting Us!.
        </div>
        <div className="alert alert-danger alert-dismissible"  style={{display: this.state.danger}}>
          <button type="button" className="close" data-dismiss="alert">&times;</button>
          Please Complete the form before Submition !
        </div>
        </div>
        </Col>
        <Col size="sm-6">
        <div className="contact-right-section">
        <ul className="list-unstyled ">
          <li>
            <p><i className="fas fa-map-marker-alt fa-2x" /> Philadelphia, PA 19140, USA</p>
          </li>
          <li>
            <p><i className="fas fa-phone mt-4 fa-2x" /> 2155350610</p>
          </li>
          <li>
            <p><i className="fas fa-envelope mt-4 fa-2x" /> contact@mdbootstrap.com</p>
          </li>
        </ul>

        <h5 className="text-color-blue"><strong>Connect With Us!</strong></h5>
        <ul className="list-inline social-media-link">
        <li className="list-inline-item"><p><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"/></a></p></li>
        <li className="list-inline-item"><p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-square"/></a></p></li>
        <li className="list-inline-item"><p><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter"/></a></p></li>
        <li className="list-inline-item"><p><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="Youtube"><i className="fab fa-youtube"/></a></p></li>
        </ul>


        <h5 className="text-color-blue"><strong>Our Hours:</strong></h5>

        <p><strong className="text-color-blue">Sunday : </strong>9am - 6pm</p>
        <p><strong className="text-color-blue">Monday - Friday : </strong>9am - 9pm</p>
        <p><strong className="text-color-blue">Saturday : </strong>9am - 7pm</p>

        </div>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
  }
}

export default Contact;
