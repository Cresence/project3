import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
// import API from "../utils/API";
import {Mainheading} from "../components/Mainheading"
import axios from "axios";
class Contact extends Component {
  constructor(){
    super()

  this.state = {
    name: "",
    email: "",
    message: ""
  };
  this.handleInputChange=this.handleInputChange.bind(this)
  this.handleFormSubmit=this.handleFormSubmit.bind(this)
}
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  loadPage = () => {
    alert("Message is send")
    this.setState({ 
      name:"",
      email:"",
      message:""
    })
};
  async handleFormSubmit(event) {
    event.preventDefault();
    const {name, email, message} =this.state;

    const form= await axios.post('/api/form', {
      name,
      email,
      message

    }).then(res => this.loadpage())
    .catch(err => console.log(err));
    // if (
    //     this.state.name && 
    //     this.state.email &&
    //     this.state.message ) {
    //   API.contactForm({
    //     name: this.state.name,
    //     email: this.state.email,
    //     message: this.state.message,
        
    //   })
    //     .then(res => alert("Something"))
    //     .catch(err => console.log(err));
    // }
    // else{
    //     alert("Please complete Form before Submit")
    // }
  };
  render() {
  return (
    <div className="py-5">
    <Container>
      <Row>
        <Col size="sm-12">
        <div className="text-center">
        <Mainheading>Contact Us</Mainheading>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="sm-6">
        <form onSubmit={this.handleFormSubmit}>
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
          disabled={!(this.state.name && this.state.email && this.state.message)}
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </form>
      <br/>
        </Col>
        <Col size="sm-6">
        <ul className="list-unstyled mb-0">
          <li>
            <p><i className="fas fa-map-marker-alt fa-2x" /> Philadelphia, PA 19140, USA</p>
          </li>
          <li>
            <p><i className="fas fa-phone mt-4 fa-2x" /> + 01 234 567 89</p>
          </li>
          <li>
            <p><i className="fas fa-envelope mt-4 fa-2x" /> contact@mdbootstrap.com</p>
          </li>
        </ul>

        <h5>Connect with us!</h5>
        <ul className="list-inline">
        <li className="list-inline-item" >
        <p><i class="fab fa-instagram"/></p></li>
        <li className="list-inline-item"><p><i class="fab fa-facebook-square"/></p></li>
        <li className="list-inline-item"><p><i class="fab fa-twitter"/></p></li>
        <li className="list-inline-item"><p><i class="fab fa-youtube"/></p></li>
        </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
  }
}

export default Contact;
