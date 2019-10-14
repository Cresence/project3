import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navadmin from "../components/Navadmin";
// import {Mainheading} from "../components/Mainheading"

class NewsPost extends Component {
  state = {
    posts: [],
    news_title: "",
    category: "",
    description: "",
    date:"",
    post_image:""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, news_title: "", category: "", description: "",date: "",post_image: "" })
      )
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => this.loadPosts())
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
    if (this.state.news_title && this.state.category) {
      API.savePost({
        news_title: this.state.news_title,
        category: this.state.category,
        description: this.state.description,
        post_image: this.state.post_image
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };
  
  render() {
    return (

      <Container fluid>
      <Navadmin />
        <Row>
          <Col size="md-6">
              <h1>Add Post</h1>
            <form>
              <Input
                value={this.state.news_title}
                onChange={this.handleInputChange}
                name="news_title"
                placeholder="News Title (required)"
              />
             <label>Select category</label>
              <select className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleInputChange}>
                <option value="">Select</option>
                <option value="Announcement">Announcement</option>
                <option value="News">News</option>
              </select>
              <br/>

              
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description "
              />
             
              <div class="form-group">
                <input 
                  type="file" 
                  class="form-control-file border" 
                  name="post_image"
                  value={this.state.post_image}
                  onChange={this.handleInputChange}
                />
              </div>
              <FormBtn
                disabled={!(this.state.news_title && this.state.news_title  && this.state.description && this.state.post_image)}
                onClick={this.handleFormSubmit}
              >
               Add Post
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
              <h1>Posts List</h1>
           
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                <ListItem key={post._id}>
                    <h4> {post.news_title}</h4>
                    <h5> {post.category}</h5>
                    <p> {post.description}</p>
                    <p> {post.date}</p>
                    <p>{post.post_image}</p>

                      
                    <Link to={"/posts/" + post._id} className="btn btn-info">
                       Update Post
                    </Link>
                    <button onClick={() => this.deletePost(post._id)} type="button" className="btn btn-danger">
                        Delete Post
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

export default NewsPost;
