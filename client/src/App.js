import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import UpdateTestimonial from "./admin/UpdateTestimonial"
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Booknow from "./pages/Booknow";
import NoMatch from "./pages/NoMatch";
import Headertop from "./components/Headertop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Testimonial from "./admin/Testimonial";
import NewsPost from "./admin/NewsPost";
import UpdatePost from "./admin/UpdatePost";
import ManageBooking from "./admin/ManageBooking"
import News from "./pages/News";
import PostDetail from "./pages/PostDetail"
import "./style.css";

function App() {
  return (
    <Router>
      <div>
        <Headertop />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booknow" component={Booknow} />
          <Route exact path="/admin" component={Testimonial} />
          <Route exact path="/testimonials/:id" component={UpdateTestimonial} />
          <Route exact path="/admin/news" component={NewsPost} />
          <Route exact path="/posts/:id" component={UpdatePost} />
          <Route exact path="/admin/booking" component={ManageBooking} />
          <Route exact path="/news" component={News} />
          <Route exact path="/post-detail/:id" component={PostDetail} />

          <Route exact path="/books" component={Books} />

          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
         <Footer />
      </div>
    </Router>
  );
}

export default App;
