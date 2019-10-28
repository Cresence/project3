import React from "react";
import { Col, Row, Container } from "../components/Grid";
import {Mainheading} from "../components/Mainheading"
function About() {
  return (
    <div>
    <div className="aboutus-banner">
    <Container>
      <Row >
        <Col size="sm-12">
        <Mainheading color="light">We Are Pet Lovers</Mainheading>
        </Col>
      </Row>
    </Container>
    </div>
    <div className="py-5">
      
    <Container>
      <Row >
        <Col size="sm-12">
        <Mainheading color="dark">About Us</Mainheading>
        <p>At Sandy's Pet Hotel we are pet lovers and experienced pet owners of all types of domestic creatures. We're in a large studio to welcome and take care of your pet while you are out of town or for any personal reason. When you call us at Sandy's, you will experience a genuine family type atmosphere. You will be greeted by a warm and friendly staff member and recieve prompt and courteous service at all times.
        </p>
        <h4 className="text-color-blue"><strong>Our Philosophy</strong></h4>
        <p>We are fully focused on the health of each pet as each one has it's own needs. We serve to cater to them and treat them with gentleness. For some animals, we understand that temporarily moving to new environment may be stressful so we ensure a safe and kind environment.</p>
 
        </Col>
      </Row>
    </Container>
    </div>
    </div> 
  );
}

export default About;
