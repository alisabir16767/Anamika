import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from "../assets/images/logo1.jpg";

class AppNavbar extends Component {
  render() {
    return (
      <>
        {/* Top Section for Gmail and Contact */}
        <div className="top-contact-info">
          <div className="container d-flex justify-content-between align-items-center py-1">
            <Link to="/contacts" className="contact-button">
              <i className="fas fa-envelope"></i> maaamberoad@gmail.com
            </Link>
            <Link to="/contacts" className="contact-button">
              <i className="fas fa-phone-alt"></i> +91-9653659549
            </Link>
          </div>
        </div>

        {/* Main Navbar */}
        <Navbar expand="lg" className="navbar-custom sticky-top">
          <div className="container d-flex align-items-center justify-content-between">
            {/* Navbar Section with Logo and Text */}
            <Navbar.Brand as={Link} to="/" className="d-flex flex-column align-items-center">
              <img
                src={Logo}
                alt="Maa Ambe Carriers"
                className="navbar-brand-image"
              />
              <p className="navbar-text">Maa Ambe Road Carriers</p> {/* Text Below Logo */}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Boxed Navigation Links */}
              <div className="nav-links-box">
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/" className="nav-link-custom">
                    <i className="fas fa-home"></i> Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/aboutus" className="nav-link-custom">
                    <i className="fas fa-info-circle"></i> About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ourservices" className="nav-link-custom">
                    <i className="fas fa-briefcase"></i> Our Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts" className="nav-link-custom">
                    <i className="fas fa-phone"></i> Contact Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ourexpertise" className="nav-link-custom">
                    <i className="fas fa-star"></i> Our Expertise
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ourclientele" className="nav-link-custom">
                    <i className="fas fa-users"></i> Our Clients
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>

            {/* Get Connect Button */}
            <Button className="get-connect-button" as={Link} to="/contacts">
              Get in Touch
            </Button>
          </div>
        </Navbar>
      </>
    );
  }
}

export default AppNavbar;
