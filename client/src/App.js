import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Booknow from "./pages/Booknow";
import NoMatch from "./pages/NoMatch";
import Headertop from "./components/Headertop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

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
