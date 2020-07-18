import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Oyungerel Dambanorov</h2>
            <img src="../pic.png" alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (202)6001751
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                 <a href="mailto:Oyuka.coffee@gmail.com">Oyuka.coffee@gmail.com</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <a href="https://github.com/Oyuka100">Oyuka 100</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a href="https://www.linkedin.com/in/oyuka-d-494b51178/">
                      Oyuka D
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
