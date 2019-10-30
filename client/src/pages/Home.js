import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import ImageSlider from "../components/ImageSlider";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import {Mainheading} from "../components/Mainheading"
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import Courosel from "./Courosel";
// import images from "../images"
class Home extends Component {
    

render() {
  return (
    <div>
    <Banner />
      <div className="home-form-booking py-5">
      <Container>
        <Row>
          <Col size="sm-12">
            <Mainheading color="dark">Best hotel for your pet!</Mainheading>
            <h5 className="text-center">We offer a broad range of services to pamper your pet.</h5>
            <div className="text-center">
                <Link className="btn btn-info"  
              to={{
                pathname: "/booknow"
                }}
            >Book Hotel</Link>

            </div>
          </Col>
        </Row>
        
        </Container> 
        </div>
        <Container>
        <div className="py-5">
        <Row>
          <Col size="sm-12">
            <Mainheading color="dark">What we do</Mainheading>
          </Col>
          <Col size="sm-12">
            <p className="text-center">Sandy's Pet Hotel provides pet boarding for dogs, cars and exotics in a impeccably clean indoor canine kennels and separate kitty condos, complete with toys, fresh filtered air, ambient music and nature sounds, and plenty of love and attention! Best of all, you can rest assured that your pet is in a clean, safe, supervised environment while you are gone. 
            </p>
          </Col>
        </Row>
        </div>
        </Container>
        <div className="image-slider-box py-5">
          <Container>
            <Mainheading color="light">Our Pet Services For</Mainheading>
          <ImageSlider />
          </Container>
        </div>
        <Container>
        
        <div className="py-5">
        <Row>
          <Col size="sm-12">
            <Mainheading color="dark">Testimonials</Mainheading>
            <Testimonial />
          </Col>
        </Row>
        </div>
    </Container>
    </div>
  );
}
}

export default Home;
