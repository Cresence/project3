import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import {Mainheading} from "../components/Mainheading"
import {runInThisContext} from "vm";
// import PaypalButton from "../components/PaypalButton"

class Booknow extends Component {
  state = {
    bookhotels: [],
    owner_name: "",
    pet_name: "",
    select_pet: "",
    select_pet_size:"",
    select_date_to: "",
    select_date_from: "",
    pet_count:  0,
    days: 0,
    price: 20,
    total_price: 0,

    success:"none",
    danger:"none",
   // count: 0,
    // days: 0,
    // price: 20
  };

  handlePrice = () => {
    const animalCount = this.state.pet_count;
    const price = this.state.price;
    const total=this.handleDate() * price * animalCount;
    
    console.log(total)
    console.log(this.handlePrice)
    // return total;
    this.setState({total_price: total})

  }

  handleDate = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    const date1 = new Date(this.state.select_date_from); 
    const date2 = new Date(this.state.select_date_to); 
    const Difference_In_Time = date2.getTime() - date1.getTime(); 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    return Difference_In_Days
    // // this.setState({days:Difference_In_Days})
    // console.log(typeof Difference_In_Days)
    // console.log(date1)
  }

  handleClickPlus = () => {
    var newCount = this.state.pet_count + 1;
    this.setState({pet_count: newCount });
  }

  handleClickMinus = () => {
    var newCount = this.state.pet_count - 1;
    this.setState({pet_count: newCount });
    if(this.state.pet_count=== 0){
      this.setState({
        pet_count:0
      });
    }else {
      this.setState({
        pet_count: this.state.pet_count - 1
      });
    }
  }


  // handleDate = () => {
  //   const date1 = new Date(this.state.select_date_from); 
  //   const date2 = new Date(this.state.select_date_to); 
  //   const Difference_In_Time = date2.getTime() - date1.getTime(); 
  //   const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

  //   return Difference_In_Days
  //   this.setState({days:Difference_In_Days})
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });  
  };
  loadPage = () => {
    this.setState({success:"block", danger:"none"})
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
    console.log(
      this.state.owner_name + " " +
      this.state.pet_name + " " +
      this.state.select_pet + " " +
      this.state.select_pet_size + " " +
      this.state.select_date_to + " " +
      this.state.select_date_from + " " +
      this.state.pet_count + " " +
      this.state.days + " " +
      this.state.price  + " " +
      this.state.totalprice 
    )
    if (
      this.state.owner_name && 
      this.state.pet_name &&
      this.state.select_pet &&
      this.state.select_pet_size &&
      this.state.select_date_to &&
      this.state.select_date_from &&
      this.state.pet_count && 
      this.state.days &&
      this.state.price  && 
      this.state.totalprice 
       ) {
    API.saveBookhotel({
      owner_name: this.state.owner_name,
      pet_name: this.state.pet_name,
      select_pet: this.state.select_pet,
      select_pet_size: this.state.select_pet_size,
      select_date_to: this.state.select_date_to,
      select_date_from: this.state.select_date_from,
      pet_count: this.state.count,
      days: this.state.days,
      price: this.state.price,
      total_price: this.state.total_price,
    })
      .then(res => this.loadPage())
      .catch(err => console.log(err));
  }
    else{
      this.setState({danger:"block", success:"none"})
    }
  };
  
  render() {

    // const days = this.handleDate()
    // const price = this.handlePrice()
    
   
    return (
      <div className="py-5">
      <Container >
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Mainheading  color="dark">Reserve your pets stay</Mainheading>
            <div className="form-outer">
            <form>
              <label>Pet Owner Name:</label>
              <Input
                value={this.state.owner_name}
                onChange={this.handleInputChange}
                name="owner_name"
                placeholder="Owner Name (required)"
              />
              <label>Pet Name:</label>
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
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Fish">Fish</option>
                <option value="Reptiles">Reptiles</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Turtle">Turtle</option>
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

              <p>Price per night per animal: $20</p>
              
              <div>
              <p>How many animals? {this.state.pet_count}</p>
              <button type="button" className="btn btn-primary" onClick={this.handleClickMinus}><i className="fas fa-minus-circle"></i></button>
              <button type="button" className="btn btn-primary" onClick={this.handleClickPlus}><i className="fas fa-plus-circle"></i></button>
              </div>

              <hr/>

              <label htmlFor="petsize">Select Date:</label>
              <Row>
              <Col size="sm-6"> 
                    <label >From</label>
                    <Input
                        type="date" 
                        value={this.state.select_date_from}
                        onChange={this.handleDate}
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
                        onChange={this.handleDate}
                        name="select_date_to"
                        placeholder="Pet Name (required)"
                        min="1000-01-01"
                        max="3000-12-31" 
                    />
                  </Col>
              </Row>
              <h6 className="card-title" id='dayDiv' value={this.state.days}>Total of nights: { !this.state.days ? 0 : this.state.days}</h6>

              <h6 className="card-title" id='priceDiv' value={this.state.total_price}>Total Price: ${!this.state.total_price ? 0 :this.state.total_price} </h6>
       
              <FormBtn onClick={this.handleFormSubmit} >
              Submit
              </FormBtn>
              <a className="btn" href="/payment">Pay Now</a>
            </form>
            <div className="alert alert-success alert-dismissible" style={{display: this.state.success}}>
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              Booking is confirmed!.
            </div>
            <div className="alert alert-danger alert-dismissible"  style={{display: this.state.danger}}>
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              Please Complete the form before submission!
            </div>
            </div>
          </Col>
          
        </Row>
        
      </Container>
      </div>
    );
  }
}

export default Booknow;
