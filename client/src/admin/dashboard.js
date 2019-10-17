import React, { Component } from "react";
import { Col, Container } from "../components/Grid";
import Navadmin from "../components/Navadmin";
import {Mainheading} from "../components/Mainheading"

class Dashboard extends Component {

  
  render() {
    return (
      <div>
      <Navadmin />
      <Container fluid>
        <div  className="row admin-content-box py-5">
          <Col size="md-12">
            <Mainheading color="dark">Welcome to admin Page</Mainheading>
            
          </Col>
        </div>
      </Container>
      </div>
    );
  }
}

export default Dashboard;
