import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Navadmin from "../components/Navadmin";
import {Mainheading} from "../components/Mainheading"
class Detail extends Component {
  state = {
    testimonial: {},
    person_name:'',
    address: '',
    description: '',
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadTestimonials();
  
  }
  loadTestimonials = () => {
    API.getTestimonial(this.props.match.params.id)
    .then(res => this.setState({ 
      person_name: res.data.person_name,
      address: res.data.address,
      description: res.data.description,
     }))
    .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.person_name && this.state.address && this.state.description) {
      API.saveTestimonial({
        person_name: this.state.person_name,
        address: this.state.address,
        description: this.state.description
      })
        .then(res => this.loadTestimonials())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div>
      <Navadmin />
      <div className="py-5">
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Mainheading color="dark">Update Testimonial</Mainheading>
            <div className="form-outer">
            <form>
              <Input
                value={this.state.person_name}
                onChange={this.handleInputChange}
                name="person_name"
                placeholder="Person Name (required)"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description "
              />
              <FormBtn
                disabled={!(this.state.address && this.state.person_name)}
                onClick={this.handleFormSubmit}
              >
               Update Testimonial
              </FormBtn>
            </form>
            </div>
          </Col>
          
          {/* <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.testimonial.person_name} by {this.state.testimonial.address}
              </h1>
            </Jumbotron>
          </Col> */}
        </Row>
      
      </Container>
      </div>
      </div>
    );
  }
}

export default Detail;
