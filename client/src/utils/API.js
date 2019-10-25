import axios from "axios";

export default {
 
  getTestimonials: function() {
    return axios.get("/api/testimonials");
  },
  // Gets the book with the given id
  getTestimonial: function(id) {
    return axios.get("/api/testimonials/" + id);
  },
  // Deletes the book with the given id
  deleteTestimonial: function(id) {
    return axios.delete("/api/testimonials/" + id);
  },
  // Saves a book to the database
  saveTestimonial: function(testimonialData) {
    return axios.post("/api/testimonials", testimonialData);
  },
  updateTestimonial: function(id, data){
    return axios.put("/api/testimonials/" + id, data);
  },

  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a book to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },
  updatePost: function(id, data){
    return axios.put("/api/posts/" + id, data);
  },

  getBookhotels: function() {
    return axios.get("/api/bookhotels");
  },
  // Gets the book with the given id
  getBookhotel: function(id) {
    return axios.get("/api/bookhotels/" + id);
  },
  // Deletes the book with the given id
  deleteBookhotel: function(id) {
    return axios.delete("/api/bookhotels/" + id);
  },
  // Saves a book to the database
  saveBookhotel: function(bookhotelData) {
    return axios.post("/api/bookhotels", bookhotelData);
  },
  updateBookhotel: function(id, data){
    return axios.put("/api/bookhotels/" + id, data);
  },
  
  postContact: function(postData) {
    return axios.post("/api/form", postData);
  },

  postImage: function(postImageData) {
    return axios.post("/api/images", postImageData);
  },

  getImages: function() {
    return axios.get("/api/images");
  }
};

