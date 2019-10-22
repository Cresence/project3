import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import {Mainheading} from "../components/Mainheading"
import PaypalButton from "../components/PaypalButton"
//import React, { useState, useRef, useEffect } from 'react';

class Payment extends Component {
  state = {
    bookhotels: [],
    owner_name: "",
    pet_name: "",
    select_pet: "",
    select_pet_size:"",
    select_date_to: "",
    select_date_from: "",
    pet_count: 0,
    days: 0,
    price: 0,
    total_price:"",
    id:0,
    loading: false,
  };
  componentDidMount() {
    this.loadBookhotel();  
  }
  loadBookhotel = () => {
    API.getBookhotel(this.props.match.params.id)
    .then(res => this.setState({ 
      owner_name: res.data.owner_name,
      pet_name: res.data.pet_name,
      select_pet: res.data.select_pet,
      select_pet_size:res.data.select_pet_size,
      select_date_to: res.data.select_date_to,
      select_date_from: res.data.select_date_from,
      pet_count: res.data.pet_count,
      days: res.data.days,
      price: res.data.price,
      total_price:res.data.total_price,
      id:res.data._id,
      loading: true
     }))
    .catch(err => console.log(err));
  }
 
  render() {
      return(
        <Container>
            <div className="py-5">
            <Row>
                <Col size="3"></Col>
                <Col size="6">
                  <Mainheading color="dark">Pay Now</Mainheading>
                  {this.state.loading? <PaypalButton 
                      price= {this.state.price}
                      name= {this.state.pet_name}
                      owner_name= {this.state.owner_name}
                      pet_name= {this.state.pet_name}
                      select_pet= {this.state.select_pet}
                      select_pet_size= {this.state.select_pet_size}
                      select_date_to= {this.state.select_date_to}
                      select_date_from= {this.state.select_date_from}
                      pet_count= {this.state.pet_count}
                      days= {this.state.days}
                      total_price= {this.state.total_price}
                      id= {this.state.id}
                      />:" "}
                  
                </Col>
                <Col size="3"></Col>
            </Row>
            </div>
        </Container>
      );
    
  }
}

export default Payment;