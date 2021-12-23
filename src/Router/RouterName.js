import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Single from "../Pages/SinglePage";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";

function RouteName() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs/:data" component={Single} />
          <Route path="*" exact component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default RouteName;
