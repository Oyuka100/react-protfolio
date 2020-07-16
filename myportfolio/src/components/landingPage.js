import React, { Component } from "react";
import { Cell } from "react-mdl";
import { Grid } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="public/pic.png" alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Fullstack Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript| React | Node.js |Express |
                MongoDB
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
