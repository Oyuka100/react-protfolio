import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";


const Main = () => (
  <Switch>
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
