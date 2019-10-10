import React, { Component } from "react";
import Banner from "../components/Banner";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import Courosel from "./Courosel";
class Home extends Component {
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
    

render() {
  return (
    <div>
    {/* <Courosel/> */}
    <Banner />
      <Container>
        <Row>
          <Col size="sm-12">
            <h1 className="text-center">Book hotel for your Pet Now </h1>
            <div className="text-center">
                <a className="btn btn-info" href="/booknow"> Book now</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <h1 className="text-center">Our services</h1>
          </Col>
          <Col size="sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col size="sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col size="sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col size="sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
        <Row>
        <Col size="sm-12">
          <h1 className="text-center">Testimonials List</h1>
          {this.state.testimonials.length ? (
            <List>
              {this.state.testimonials.map(testimonial => (
              <ListItem key={testimonial._id}>
                   <p> {testimonial.description}</p>
                  <h4> {testimonial.person_name}</h4>
                  <h5> {testimonial.address}</h5>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3 className="text-center">No Results to Display</h3>
          )}
        </Col>
        </Row>
    </Container>
    </div>
  );
}
}

export default Home;
