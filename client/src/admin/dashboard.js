import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navadmin from "../components/Navadmin";
import {Mainheading} from "../components/Mainheading"

class Dashboard extends Component {
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

  deleteTestimonial = id => {
    API.deleteTestimonial(id)
      .then(res => this.loadTestimonials())
      .catch(err => console.log(err));
  };

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
            <Mainheading color="dark">Add Testimonial</Mainheading>
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
               Add Testimonial
              </FormBtn>
            </form>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <Mainheading color="dark">Testimonials Listm</Mainheading>
             
            {this.state.testimonials.length ? (
              <List>
                {this.state.testimonials.map(testimonial => (
                <ListItem key={testimonial._id}>
                    <h4> {testimonial.person_name}</h4>
                    <h5> {testimonial.address}</h5>
                    <p> {testimonial.description}</p>
                      
                    <Link to={"/testimonials/" + testimonial._id} className="btn btn-theme">
                       Update Testimonial
                    </Link>
                    <button onClick={() => this.deleteTestimonial(testimonial._id)} type="button" className="btn btn-theme-danger">
                        Delete Testimonial
                    </button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    );
  }
}

export default Dashboard;
