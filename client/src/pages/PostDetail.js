import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Mainheading} from "../components/Mainheading"


class PostDetail extends Component {
  state = {
    post: {}
  };
  
  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="py-5 text-center">
      <Container>
        <Row>
          <Col size="sm-12">
            <Mainheading  color="dark">News Detail</Mainheading>
            <div className="news-detail" >

              <img src={this.state.post.image_url ? this.state.post.image_url :"https://placehold.it/128x197?text=No%20Preview" } 
              alt="news-post" className="img-fluid"/>
              <h3><strong className="text-color-blue">Title : </strong>{this.state.post.news_title}</h3>
              <h5><strong className="text-color-blue">Category : </strong>{this.state.post.category}</h5>
              <h6><strong className="text-color-blue">News Post Date: </strong>{this.state.post.date ? this.state.post.date.slice(0, 10) : null}</h6>
              <p>
              <strong className="text-color-blue">Discription : </strong>{this.state.post.description}
              </p>
            </div>
          </Col>
        </Row>
        
      </Container>
      </div>
    );
  }
}

export default PostDetail;
