import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Navadmin from "../components/Navadmin";

class ManageBooking extends Component {
  state = {
    bookhotels: [],
    owner_name: "",
    pet_name: "",
    select_pet: "",
    select_pet_size:"",
    select_date_to: "",
    select_date_from: "",
  };

  componentDidMount() {
    this.loadBookhotels();
  }

  loadBookhotels = () => {
    API.getBookhotels()
      .then(res =>
        this.setState({ 
            bookhotels: res.data, 
            owner_name: "", 
            pet_name: "", 
            select_pet: "",
            select_pet_size:"",
            select_date_to: "",
            select_date_from: "",
        })
      )
      .catch(err => console.log(err));
  };

  deleteBookhotel = id => {
    API.deleteBookhotel(id)
      .then(res => this.loadBookhotels())
      .catch(err => console.log(err));
  };

 

  render() {
    return (

      <Container >
      <Navadmin />
        <Row>
          
          <Col size="md-6 sm-12">
            
              <h1>Bookhotel List</h1>
           
            {this.state.bookhotels.length ? (
              <List>
                {this.state.bookhotels.map(bookhotel => (
                <ListItem key={bookhotel._id}>
                    <p><strong>Owner Name :</strong> {bookhotel.owner_name}</p>
                    <p><strong>Pet Nick Name :</strong> {bookhotel.pet_name}</p>
                    <p><strong>Pet Name :</strong> {bookhotel.select_pet}</p>
                    <p><strong>Pet Size :</strong> {bookhotel.select_pet_size}</p>
                    <p><strong>Start Booking Date:</strong> {bookhotel.select_date_to}</p>
                    <p><strong>End Booking Date:</strong> {bookhotel.select_date_from}</p>
                      
                    <Link to={"/bookhotels/" + bookhotel._id} className="btn btn-info">
                       Update Bookhotel
                    </Link>
                    <button onClick={() => this.deleteBookhotel(bookhotel._id)} type="button" className="btn btn-danger">
                        Delete Bookhotel
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
    
    );
  }
}

export default ManageBooking;
