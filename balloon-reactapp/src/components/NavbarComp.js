import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ expanded: !this.state.expanded });
  }

  closeNavbar() {
    this.setState({ expanded: false });
  }

  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary" expanded={this.state.expanded}>
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={this.closeNavbar}>Boston_GG_Events</Navbar.Brand>
            <Navbar.Toggle onClick={this.toggleNavbar} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" onClick={this.closeNavbar}>Home</Nav.Link>
                <Nav.Link as={Link} to="/event" onClick={this.closeNavbar}>Event</Nav.Link>
                <Nav.Link as={Link} to="/flower" onClick={this.closeNavbar}>Flower</Nav.Link>
                <Nav.Link as={Link} to="/grabAndGo" onClick={this.closeNavbar}>Grab and Go</Nav.Link>
                <Nav.Link as={Link} to="/contactUs" onClick={this.closeNavbar}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
