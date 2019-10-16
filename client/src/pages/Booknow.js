import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import {Mainheading} from "../components/Mainheading"

class Booknow extends Component {
  state = {
    bookhotels: [],
    owner_name: "",
    pet_name: "",
    select_pet: "",
    select_pet_size:"",
    select_date_to: "",
    select_date_from: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  loadPage = () => {
        alert("Booking is confirmed")
        this.setState({ 
            owner_name: "", 
            pet_name: "", 
            select_pet: "",
            select_pet_size:"",
            select_date_to: "",
            select_date_from: "",
        })
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (
        this.state.owner_name && 
        this.state.pet_name &&
        this.state.select_pet &&
        this.state.select_pet_size &&
        this.state.select_date_to &&
        this.state.select_date_from ) {
      API.saveBookhotel({
        owner_name: this.state.owner_name,
        pet_name: this.state.pet_name,
        select_pet: this.state.select_pet,
        select_pet_size: this.state.select_pet_size,
        select_date_to: this.state.select_date_to,
        select_date_from: this.state.select_date_from,
        
      })
        .then(res => this.loadPage())
        .catch(err => console.log(err));
    }
    else{
        alert("Please complete Form before Submit")
    }
  };
  
  render() {
    return (
      <div className="py-5">
      <Container >
        <Row>
            <Col size="md-3"></Col>
          <Col size="md-6">
              <Mainheading  color="dark">Add Bookhotel</Mainheading>
              <div className="form-outer">
            <form>
              <Input
                value={this.state.owner_name}
                onChange={this.handleInputChange}
                name="owner_name"
                placeholder="Owner Name (required)"
              />
              <Input
                value={this.state.pet_name}
                onChange={this.handleInputChange}
                name="pet_name"
                placeholder="Pet Name (required)"
              />
              <label>Select Your Pet:</label>
              <select 
                className="form-control"
                name="select_pet" 
                value={this.state.select_pet}
                onChange={this.handleInputChange}>
                <option value="">Select</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rat">Rat</option>
                <option value="Rabbit">Rabbit</option>
              </select>

              <br/>
              <label>Select Pet Size:</label>
              <select 
                className="form-control"
                name="select_pet_size" 
                value={this.state.select_pet_size}
                onChange={this.handleInputChange}>
                <option value="">Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              <br/>
              <label htmlFor="petsize">Select Date:</label>
              <Row>
              <Col size="sm-6"> 
                    <label >From</label>
                    <Input
                        type="date" 
                        value={this.state.select_date_from}
                        onChange={this.handleInputChange}
                        name="select_date_from"
                        placeholder="Pet Name (required)"
                        min="1000-01-01"
                        max="3000-12-31" 
                    />
                  </Col>
                  <Col size="sm-6">
                    <label >To</label>
                    <Input
                        type="date" 
                        value={this.state.select_date_to}
                        onChange={this.handleInputChange}
                        name="select_date_to"
                        placeholder="Pet Name (required)"
                        min="1000-01-01"
                        max="3000-12-31" 
                    />
                  </Col>
                  
              </Row>
              <FormBtn
                disabled={!(this.state.pet_name && 
                    this.state.owner_name && 
                    this.state.select_pet &&
                    this.state.select_pet_size &&
                    this.state.select_date_to &&
                    this.state.select_date_from)}
                onClick={this.handleFormSubmit}
              >
              Submit
              </FormBtn>
            </form>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Booknow;
