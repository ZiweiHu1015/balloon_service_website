import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  {Navbar,Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";


export default class NavbarComp extends Component {
  render() {
    return (
 
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as = {Link} to = {"/"}>Boston_GG_Events</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as = {Link} to = {"/"}> Home</Nav.Link>
                <Nav.Link as = {Link} to = {"/event"}>Event</Nav.Link>
                <Nav.Link as = {Link} to = {"/flower"}>Flower</Nav.Link>
                <Nav.Link as = {Link} to = {"/grabAndGo"}>Grab and Go</Nav.Link>
                <Nav.Link as = {Link} to = {"/contactUs"}>Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    

)
  }
}
