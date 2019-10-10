import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
class News extends Component {
    state = {
        posts: [],
        news_title: "",
        category: "",
        description: "",
        date:""
      };
    
      componentDidMount() {
        this.loadPosts();
      }
    
      loadPosts = () => {
        API.getPosts()
          .then(res =>
            this.setState({ posts: res.data, news_title: "", category: "", description: "",date: "" })
          )
          .catch(err => console.log(err));
      };
    

render() {
  return (
   
   
   
    <Container>
        
        <Row>
        <Col size="sm-12">
            
            <h1 className="text-center">News and Announcements</h1>
         
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                <ListItem key={post._id}>
                    <h4> {post.news_title}</h4>
                    <h5> {post.category}</h5>
                    
                    <p> {post.date}</p>

                      
                    <Link to={"/post-detail/" + post._id} className="btn btn-info">
                       Read More
                    </Link>
                  
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

export default News;
