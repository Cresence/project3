import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Detail extends Component {
  state = {
    testimonial: {},
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTestimonial(this.props.match.params.id)
      .then(res => this.setState({ testimonial: res.data }))
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
    if (this.state.person_name && this.state.address) {
      API.saveTestimonial({
        person_name: this.state.testimonial.person_name,
        address: this.state.testimonial.address,
        description: this.state.testimonial.description
      })
        .then(res => this.loadTestimonials())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1>Update Testimonial</h1>
            <form>
              <Input
                value={this.state.testimonial.person_name}
                onChange={this.handleInputChange}
                name="person_name"
                placeholder="Person Name (required)"
              />
              <Input
                value={this.state.testimonial.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <TextArea
                value={this.state.testimonial.description}
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
    );
  }
}

export default Detail;
