import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  {Navbar,Container, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Events from './Events';
import Balloon from './Balloon';
import Flower from './Flower';
import GrabAndGo from './GrabAndGo';

export default class NavbarComp extends Component {
  render() {
    return (
    <Router>
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Boston_GG_Events</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as = {Link} to = {"/Home"}> Home</Nav.Link>
                <Nav.Link as = {Link} to = {"/Events"}>Events</Nav.Link>
                <Nav.Link as = {Link} to = {"/Balloon"}>Balloon</Nav.Link>
                <Nav.Link as = {Link} to = {"/Flower"}>Flower</Nav.Link>
                <Nav.Link as = {Link} to = {"/GrabAndGo"}>Grab and Go</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    <div>
        <Routes>
            <Route path = "/Home" element = {<Home/>} />
            <Route path = "/Events" element = {<Events/>} />
            <Route path = "/Balloon" element = {<Balloon/>} />
            <Route path = "/Flower" element = {<Flower/>} />
            <Route path = "/GrabAndGo" element = {<GrabAndGo/>}/>
        </Routes>
    </div>
  </Router>
)
  }
}
