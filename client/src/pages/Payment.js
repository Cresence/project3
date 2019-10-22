import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import {Mainheading} from "../components/Mainheading"
// import {runInThisContext} from "vm";
import PaypalButton from "../components/PaypalButton"

class Payment extends Component {
 
  render() {
      return(
        <Container>
            <div className="py-5">
            <Row>
                <Col size="3"></Col>
                <Col size="6">
                    <Mainheading>Pay Now</Mainheading>
                    <PaypalButton 
                        price= {3}
                        name= {"Cat"}
                        />
                </Col>
                <Col size="3"></Col>
            </Row>
            </div>
        </Container>
      );
    
  }
}

export default Payment;