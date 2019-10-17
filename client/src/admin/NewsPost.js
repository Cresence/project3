import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navadmin from "../components/Navadmin";
import {Mainheading} from "../components/Mainheading"

class NewsPost extends Component {
  state = {
    posts: [],
    news_title: "",
    category: "",
    description: "",
    date:"",
    post_image:"",
    success:"none",
    danger:"none",
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
        .then(res => {
          this.setState({success:"block", danger:"none"})
          this.loadPosts()
        })
        .catch(err => console.log(err));
    }else{
      this.setState({danger:"block", success:"none"})
    }
  };
  
  render() {
    return (
      <div>
      <Navadmin />
      <Container fluid>
        <div  className="row admin-content-box py-5">
          <Col size="md-6">
            <Mainheading color="dark">Add Post</Mainheading>
            <div className="form-outer">
            <form>
              <label>News Title</label>
              <Input
                value={this.state.news_title}
                onChange={this.handleInputChange}
                name="news_title"
                placeholder="News Title (required)"
              />
             <label>Select Category</label>
              <select className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleInputChange}>
                <option value="">Select</option>
                <option value="Announcement">Announcement</option>
                <option value="News">News</option>
              </select>
              <br/>

              <label>Description</label>
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder=" "
              />
              <label>Upload Image</label>
              <div className="form-group">
                <input 
                  type="file" 
                  className="form-control-file border" 
                  name="post_image"
                  value={this.state.post_image}
                  onChange={this.handleInputChange}
                />
              </div>
              <FormBtn onClick={this.handleFormSubmit} >
               Add Post
              </FormBtn>
            </form>
            <div className="alert alert-success alert-dismissible" style={{display: this.state.success}}>
              <button type="button" className="close" data-dismiss="alert">&times;</button>
               Post is added Successfully.
            </div>
            <div className="alert alert-danger alert-dismissible"  style={{display: this.state.danger}}>
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              Please Complete the form before Submition 
            </div>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <Mainheading color="dark">Post List</Mainheading>
            
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                <ListItem key={post._id}>
                    <h5><strong>News Title : </strong> {post.news_title}</h5>
                    <h6><strong>Category : </strong> {post.category}</h6>
                    <p><strong>Description : </strong> {post.description}</p>
                    <p><strong>Date : </strong> {post.date}</p>
                    <p><strong>Image Url : </strong>{post.post_image}</p>

                      
                    <Link to={"/posts/" + post._id} className="btn btn-theme">
                       Update Post
                    </Link>
                    <button onClick={() => this.deletePost(post._id)} type="button" className="btn btn-theme-danger">
                        Delete Post
                    </button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </div>
       
      </Container>
      </div>
    );
  }
}

export default NewsPost;
