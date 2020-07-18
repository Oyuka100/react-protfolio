import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src="../pic.png" alt="avatar" style={{ height: "400px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Oyuka</h2>
            <h4>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>202-600-1751</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Email</h5>
            <p>Oyuka.coffee@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1515 North Queen st, Arlington, VA</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <h5>18th high school in Mongolia</h5>
            <h5>Northern Virginia Community College</h5>
            <h2>Experience</h2>
            <h5>Noexperience yet</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
