import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


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

      <Container >
        <Row>
            <Col size="md-3"></Col>
          <Col size="md-6">
              <h1>Add Bookhotel</h1>
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
                <option>Cat</option>
                <option>Dog</option>
                <option>Rat</option>
                <option>Rabbit</option>
              </select>

              <br/>
              <label>Select Pet Size:</label>
              <select 
                className="form-control"
                name="select_pet_size" 
                value={this.state.select_pet_size}
                onChange={this.handleInputChange}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>

              <br/>
              <label htmlFor="petsize">Select Date:</label>
              <Row>
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
              Add Bookhotel
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    
    );
  }
}

export default Booknow;
