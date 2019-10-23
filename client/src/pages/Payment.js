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
 // jspdf generator function
 jsPDFGenerator=()=>{
  var doc=new jsPDF('p', 'pt');
  //add text
  doc.text(20,20, 'this.state.abc')
  doc.setFont('courier');
  doc.setFontType('normal');
  doc.text(20,30,'This is text with courier font');
  doc.save("generate.pdf");
}
  render() {
      return(
        <Container>
            <div className="py-5">
            <Row>
                <Col size="3"></Col>
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
                      />:" "}
                  <div className="text-center">
                    <button className="btn btn-theme" onClick={this.jsPDFGenerator}>
                      Print Your Receipt
                    </button>
                  </div>
                </Col>
                <Col size="3"></Col>
            </Row>
            </div>
        </Container>
      );
    
  }
}

export default Payment;