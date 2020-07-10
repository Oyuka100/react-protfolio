import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import LandingPage from "./landingPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/" component={Project} />
    <Route exact path="/" component={Resume} />
    <Route exact path="/" component={Contact} />
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default Main;
