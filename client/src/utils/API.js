import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

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
};

