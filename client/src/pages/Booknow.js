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
    booking_status:"false",
    id:"",
    success:"none",
    danger:"none",
    submitBtn:"block",
    paynowBtn:"none",

  };

  handlePrice = () => {
    
    const animalCount = this.state.pet_count;
    const price = this.state.price;
    const total=this.handleDate() * price * animalCount;  
    return total;
  }

  handleDate = () => {
    const date1 = new Date(this.state.select_date_from); 
    const date2 = new Date(this.state.select_date_to); 
    const Difference_In_Time = date2.getTime() - date1.getTime(); 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    return Difference_In_Days
  }

  handleClickPlus = () => {
    var newCount = this.state.pet_count + 1;
    this.setState({pet_count: newCount });
  }

  handleClickMinus = () => {
    var newCount = this.state.pet_count - 1;
    this.setState({pet_count: newCount });
    if(this.state.pet_count === 0){
      this.setState({
        pet_count:0
      });
    }else {
      this.setState({
        pet_count: this.state.pet_count - 1
      });
    }
  }

  getToday = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    return today;
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });  
  };
  
  loadPage = () => {
    this.setState({success:"none", danger:"none", submitBtn:"none",
    paynowBtn:"inline-block",})
    this.setState({ 
      owner_name: "", 
      pet_name: "", 
      select_pet: "",
      select_pet_size:"",
      select_date_to: "",
      select_date_from: "",
      pet_count:""
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
      this.state.select_date_from &&
      this.state.pet_count && 
      this.handleDate() &&
      this.state.price  && 
      this.handlePrice() 
       ) {
    API.saveBookhotel({
      owner_name: this.state.owner_name,
      pet_name: this.state.pet_name,
      select_pet: this.state.select_pet,
      select_pet_size: this.state.select_pet_size,
      select_date_from: this.state.select_date_from,
      select_date_to: this.state.select_date_to,
      pet_count: this.state.pet_count,
      days:  this.handleDate(),
      price: this.state.price,
      total_price:  this.handlePrice(),
      booking_status:this.state.booking_status,
    })
      .then(res => {
        //console.log(res.data._id);
        this.setState({id:res.data._id})
        this.loadPage()})
      .catch(err => console.log(err));
  }
    else{
      this.setState({danger:"block", success:"none"})
    }
  };
  
  render() {
    const todaysDate = this.getToday
    const days = this.handleDate()
    const price = this.handlePrice()
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

              <label value={this.state.priceUpdate}>Price per night per animal: <span className ="custom-span">$20 </span> </label>
              
              <div className="add-pet-box">
                <button type="button" className="btn btn-primary btn-left" onClick={this.handleClickMinus}><i className="fas fa-minus-circle"></i></button>
                <label>No Of Pets: <span className ="custom-span">{this.state.pet_count}</span></label>
                <button type="button" className="btn btn-primary btn-right" onClick={this.handleClickPlus}><i className="fas fa-plus-circle"></i></button>
              </div>
              <br/>
              <div>
              <label htmlFor="petsize">Select Date:</label>
              </div>
              <Row>
              <Col size="sm-6"> 
                    <label >From</label>
                    <Input
                        type="date" 
                        value={this.state.select_date_from}
                        onChange={this.handleInputChange}
                        onClick={this.handleDate}
                        name="select_date_from"
                        placeholder="Pet Name (required)"
                        min={todaysDate.toString()}
                        max="3000-12-31" 
                    />
                  </Col>
                  <Col size="sm-6">
                    <label >To</label>
                    <Input
                        type="date" 
                        value={this.state.select_date_to}
                        onChange={this.handleInputChange}
                        onClick={this.handleDate}
                        name="select_date_to"
                        placeholder="Pet Name (required)"
                        min={todaysDate.toString()}
                        max="3000-12-31" 
                    />
                  </Col>
              </Row>
              <label className="card-title" id='dayDiv' value={days}>Total of nights: <span className ="custom-span">{ !days ? 0 : days}</span></label>
              <br/>
              <label className="card-title" id='priceDiv' value={price}>Total Price: <span className ="custom-span">${!price ? 0 : price} </span></label>
              <br/>

              {this.props.isAuth ? <button className="btn" onClick={this.handleFormSubmit}  style={{display: this.state.submitBtn}} >
              Submit
              </button> : <div className="alert alert-danger alert-dismissible">
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              Login to Book
            </div>}
              
              <a className="btn" href={"/payment/" + this.state.id} style={{display: this.state.paynowBtn}}>Pay Now</a>
            
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
