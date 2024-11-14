import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import Logo from "../assets/images/logo1.jpg";

class AppNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img 
            src={Logo}
            alt="Maa Ambe Carriers" 
            className="navbar-brand-image"
          />
         MaaAmbeRoadCarriers 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/ourservices" className="nav-link-custom">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/contacts" className="nav-link-custom">Contact Us</Nav.Link>
           
              <Nav.Link as={Link} to="/ourexpertise" className="nav-link-custom">Our Expertise</Nav.Link>
              <Nav.Link as={Link} to="/ourclientele" className="nav-link-custom">Our Clients</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
