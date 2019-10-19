import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navadmin from "../components/Navadmin";
import {Mainheading} from "../components/Mainheading"

class Dashboard extends Component {
  state = {
    testimonials: [],
    person_name: "",
    address: "",
    description: "",
    success:"none",
    danger:"none",
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
    if (this.state.person_name && this.state.address && this.state.description) {
      API.saveTestimonial({
        person_name: this.state.person_name,
        address: this.state.address,
        description: this.state.description
      })
        .then(res => {
          this.setState({success:"block",danger:"none"})
          this.loadTestimonials()
        })
        .catch(err => console.log(err));
    }else{
      this.setState({danger:"block", success:"none"})
    }
  };
  
  render() {
    return (
      <div>
      <Navadmin />
      <Container fluid>
        <div  className="row admin-content-box py-5">
      
          <Col size="md-6">
            <Mainheading color="dark">Add Testimonial</Mainheading>
            <div className="form-outer">
            <form>
              <label>Person Name</label>
              <Input
                value={this.state.person_name}
                onChange={this.handleInputChange}
                name="person_name"
                placeholder="Person Name (required)"
              />
              <label>Address</label>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <label>Message</label>
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description "
              />
              <FormBtn onClick={this.handleFormSubmit} >
               Add Testimonial
              </FormBtn>
            </form>
            <div className="alert alert-success alert-dismissible" style={{display: this.state.success}}>
              <button type="button" className="close" data-dismiss="alert">&times;</button>
               Testimonial is added Successfully.
            </div>
            <div className="alert alert-danger alert-dismissible"  style={{display: this.state.danger}}>
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              Please Complete the form before Submition 
            </div>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <Mainheading color="dark">Testimonials List</Mainheading>
            {this.state.testimonials.length ? (
              <List>
                {this.state.testimonials.map(testimonial => (
                <ListItem key={testimonial._id}>
                    <h5><strong>Person Name :</strong> {testimonial.person_name}</h5>
                    <h6><strong>Address :</strong> {testimonial.address}</h6>
                    <p><strong>Testimonial :</strong> {testimonial.description}</p>
                      
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
        </div>
      </Container>
      </div>
    );
  }
}

export default Dashboard;
