import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import UpdateTestimonial from "./admin/UpdateTestimonial";
import Booknow from "./pages/Booknow";
import NoMatch from "./pages/NoMatch";
import Headertop from "./components/Headertop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Dashboard from "./admin/dashboard";
import Profile from "./pages/Profile"
import { useAuth0 } from "./react-auth0-wrapper";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ExternalApi from "./components/ExternalApi/ExternalApi";
import Testimonial from "./admin/Testimonial";
import NewsPost from "./admin/NewsPost";
import UpdatePost from "./admin/UpdatePost";
import ManageBooking from "./admin/ManageBooking"
import News from "./pages/News";
import PostDetail from "./pages/PostDetail"
import Payment from "./pages/Payment"
import "./style.css";


function App() {
  const { loading } = useAuth0();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
          <Route exact path="/booknow" render={(props) => <Booknow {...props} isAuth={isAuthenticated} />} />
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/admin/testimonial" component={Testimonial} />
          <Route exact path="/testimonials/:id" component={UpdateTestimonial} />
          <PrivateRoute exact path="/admin/news" component={NewsPost} />
          <PrivateRoute exact path="/posts/:id" component={UpdatePost} />
          <PrivateRoute exact path="/admin/booking" component={ManageBooking} />
          <Route exact path="/payment/:id" component={Payment} />
          <Route exact path="/news" component={News} />
          <Route exact path="/post-detail/:id" component={PostDetail} />
          <PrivateRoute path="/profile" component={Profile} /> 
          <PrivateRoute path="/external-api" component={ExternalApi} />       
          <Route component={NoMatch} />
          </Switch>
         <Footer />
      </div>
    </Router>
  );
}

export default App;
