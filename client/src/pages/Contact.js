import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  render() {
  return (
    <Container>
      <Row>
        <Col size="sm-12">
        <div className="text-center">
        <h1>Contact Us</h1>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="sm-6">
        <form>
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
          // disabled={!(this.state.address && this.state.person_name)}
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
        <ul className="list-unstyled mb-0">
        <li>
        <p><i class="fab fa-instagram"/></p></li>
        <li><p><i class="fab fa-facebook-square"/></p></li>
        <li><p><i class="fab fa-twitter"/></p></li>
        <li><p><i class="fab fa-youtube"/></p></li>
        </ul>
        </Col>
      </Row>
    </Container>
  
  );
  }
}

export default Contact;
