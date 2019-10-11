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
            <h1 className="text-center">Best hotel for your pet!</h1>
            <h5 className="text-center">We offer a broad range of services to pamper your pet.</h5>
            <div className="text-center">
                <a className="btn btn-info" href="/booknow"> Book now</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <h1 className="text-center">What we do</h1>
          </Col>
          
          <Col size="sm-12">
            <p>Sandy's Pet Hotel provides pet boarding for dogs, cars and exotics in a impeccably clean indoor canine kennels and separate kitty condos, complete with toys, fresh filtered air, ambient music and nature sounds, and plenty of love and attention! Best of all, you can rest assured that your pet is in a clean, safe, supervised environment while you are gone. 
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
