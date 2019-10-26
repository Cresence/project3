import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

import PaypalButton from "../components/PaypalButton"
//import React, { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf'

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
    booking_status:""
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
      loading: true,
      booking_status:res.data.booking_status,
     }))
    .catch(err => console.log(err));
  }
 // jspdf generator function
 jsPDFGenerator=()=>{
  var doc=new jsPDF('p', 'pt');
  //add text
  doc.text(20,30, "Your Receipt")
  doc.setFont('courier');
  doc.setFontType('normal');
  doc.text(20,60, "Booking Id    : " + this.state.id);
  doc.text(20,80, "Owner Name    : " + this.state.owner_name);
  doc.text(20,100,"Pet Nick Name : " + this.state.pet_name);
  doc.text(20,120,"Pet Category  : " + this.state.select_pet);
  doc.text(20,140,"Pet Size      : " + this.state.select_pet_size);
  doc.text(20,160,"Booking Date  : " + this.state.select_date_from + " To " + this.state.select_date_to);
  doc.text(20,180,"No. of Pet    : " + this.state.pet_count);
  doc.text(20,200,"No. of Days   : " + this.state.days);
  doc.text(20,220,"Price         : " + this.state.price);
  doc.text(20,240,"Total Price   : " + this.state.total_price);
  doc.save("generate.pdf");
}

handleUpdateBookingStatus = ( ) => {
  // event.preventDefault();
    API.updateBookhotel(this.props.match.params.id, {
      booking_status: "true",
    })
    .then(res =>  console.log("Booking status updates"))
    .catch(err => console.log(err));
  
};
  render() {
      return(
        <Container>
            <div className="py-5">
            <Row>
                <Col size="3">
                  {/* <button onClick={this.handleUpdateBookingStatus}>Click me</button> */}
                </Col>
                <Col size="6">
                 
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
                      jsPDFGenerator={this.jsPDFGenerator}
                      booking_status={this.state.booking_status}
                      handleUpdateBookingStatus={this.handleUpdateBookingStatus}
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