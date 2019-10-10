import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  constructor(props){
      super(props);
      this.state = {
    owner: "",
    petname: "",
    petType: "",
    petsize: "",
    dateTo: "",
    dateFrom: "",
      }
    }
    
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
           <h1 className="text-center"> Book hotel form </h1>
            <form onSubmit={this.handleFormSubmit}>
              <label>Owner Name:</label>
              <Input
                value={this.state.owner}
                onChange={this.handleInputChange}
                name="owner"
                placeholder="Owner (required)"
              />

              <label>Pet Name:</label>
              <Input
                value={this.state.petname}
                onChange={this.handleInputChange}
                name="petname"
                placeholder="Pet Name (required)"
              />
              <label>Select Your Pet:</label>
              <select className="form-control" id="petType" name="petType" value={this.state.petType} onChange={this.handleInputChange}>
                <option>Cat</option>
                <option>Dog</option>
                <option>Rat</option>
                <option>Rabbit</option>
              </select>
              <br/>
              <label htmlFor="petsize">Select Pet Size:</label>
              <select  className="form-control" id="petsize" name="petsize" value={this.state.petsize} onChange={this.handleInputChange}>
                <option>Large</option>
                <option>Medium</option>
                <option>Small</option>
              </select>
              <br/>
              <label htmlFor="petsize">Select Date:</label>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label >From</label>
                    <input type="date" name="dateFrom" value={this.state.dateFrom} onChange={this.handleInputChange} max="3000-12-31" 
                            min="1000-01-01" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label >To</label>
                    <input type="date" name="dateTo" value={this.state.dateTo} onChange={this.handleInputChange} min="1000-01-01"
                            max="3000-12-31" className="form-control"/>
                  </div>
                </div>
              </div>
              <FormBtn>
                Submit Form
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
