import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import Logo from "../assets/images/logo1.png";

class AppNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img 
            src={Logo}
            alt="InnoTech American" 
            className="navbar-brand-image"
          />
         Amrekan InnoTech 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/ourservices" className="nav-link-custom">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/contacts" className="nav-link-custom">Contact Us</Nav.Link>
            <NavDropdown title="Expertise/Clientele" id="basic-nav-dropdown" className="nav-link-custom">
              <NavDropdown.Item as={Link} to="/ourexpertise" className="nav-link-custom">Our Expertise</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ourclientele" className="nav-link-custom">Our Clientele</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
