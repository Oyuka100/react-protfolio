import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1&resize=350%2C200) center/cover",
            }}
          >
            FirstProject
          </CardTitle>
          <CardText>First Project</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1&resize=350%2C200) center/cover",
            }}
          >
            HandleBar Project
          </CardTitle>
          <CardText> HandleBar Project</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "https://community-openhab-org.s3.dualstack.eu-central-1.amazonaws.com/optimized/3X/b/a/ba100c20cab4f1a9b6f60821e58998d7d2d94b7b_2_689x223.png"
                
            }}
          >
            Weather Api
          </CardTitle>
          <CardText>My project</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HandleBar</Tab>
          <Tab>Weather APi</Tab>
          <Tab>First Project</Tab>
        </Tabs>
        <section className="project-grid">
          {this.toggleCategories()}
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
