import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/e7/58/e4/e758e46e-58da-09ef-a5a0-229cbf7c3825/AppIcon-1x_U007emarketing-0-10-0-0-0-0-85-220-0.png/246x0w.png",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/johncosper/Project-1">GitHub</a>
              </Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://blog.bestbuy.ca/wp-content/uploads/2016/12/Travel.jpg)",
              }}
            >
              Project 2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/athomik79/Project-2-Group-6">
                  GitHub
                </a>
              </Button>

              <Button colored>
                <a href="https://pure-mountain-23490.herokuapp.com/">Heroku</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background:
                  "url(data:image/png;base64,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",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/Oyuka100/weather">GitHub</a>
              </Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background:
                  "url(https://sabe.io/tutorials/getting-started-with-handlebars-js/hero.png",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/Oyuka100/burger-res">GitHub</a>
              </Button>

              <Button colored>
                <a href="https://burger-ap.herokuapp.com/">Heroku</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Project 1</Tab>
          <Tab>Project 2</Tab>
          <Tab>Weather Api</Tab>
          <Tab>Handlebar Project</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
