import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

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
      <Container>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1> {this.state.post.news_title}</h1>
              <h3>{this.state.post.category}</h3>
              <h3>{this.state.post.date}</h3>
              <p>
                {this.state.post.description}
              </p>
            </article>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default PostDetail;
