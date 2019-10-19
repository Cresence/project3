import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import {Mainheading} from "../components/Mainheading"

// import { Input, TextArea, FormBtn } from "../components/Form";
// import images from "../../public/uploads"
class News extends Component {
    state = {
        posts: [],
        news_title: "",
        category: "",
        description: "",
        date:"",
        post_image: "",
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
    <div className="py-5">
    <Container>
        <Row>
        <Col size="sm-12">
            
            <Mainheading  color="dark">News and Announcements</Mainheading>
         
            {this.state.posts.length ? (
              <ul className="list-group news-section">
                {this.state.posts.map(post => (
                <li className="list-group-item" key={post._id}>
                    <div className="image-box">
                      {console.log( post.post_image)}
                      <img src={post.post_image ?  post.post_image :"https://placehold.it/128x197?text=No%20Preview" } alt="news-post"/>
                      
                    </div>
                    <div className="content-box">
                      <h4> {post.news_title}</h4>
                      <h5> {post.category}</h5>
                      
                      <p> {post.date}</p>

                        
                      <Link to={"/post-detail/" + post._id} className="btn btn-theme">
                        Read More
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
    </Container>
    </div>
  );
}
}
export default News;
