import React from 'react';
import './footer.css'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start text-muted mt-auto">
      {/* Section: Social media */}
      <section className="section d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block social-icons">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div className='social-icons'>
          <a href="#!" className="text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <Link to="https://www.linkedin.com/in/amrekan-innotech-436021300/?trk=contact-info" className="text-reset"> {/* Use Link component */}
            <i className="fab fa-linkedin"></i>
          </Link>
          <a href="#!" className="text-reset">
            <i className="fab fa-github me-2"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="section">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-link">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>InnoTech American
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-link">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">QUICK LINKS</h6>
              <p>
                <Link to="/" className="text-reset">Home</Link> {/* Example of using Link component */}
              </p>
              <p>
                <Link to="/aboutus" className="text-reset">About Us</Link> {/* Example of using Link component */}
              </p>
              <p>
                <Link to="/ourexpertise" className="text-reset">Our Expertise</Link> {/* Example of using Link component */}
              </p>
              <p>
                <Link to="/ourclientele" className="text-reset">Our Clients</Link> {/* Example of using Link component */}
              </p>
              <p>
                <Link to="/contacts" className="text-reset">Contact Us</Link> {/* Example of using Link component */}
              </p>
              <p>
                <Link to="/ourservices" className="text-reset">Our Services</Link> {/* Example of using Link component */}
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-link">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">CORPORATE OFFICE</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                alisabir167167@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 7464082141</p>
              <p><i className="fas fa-print me-3"></i> +91 7464082141</p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-link">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">HEAD OFFICE</h6>
              <p><i className="fas fa-home me-3"></i>J-1/10 Second Floor DDA Flat New Delhi</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                innotechamrekan@gmail.com              </p>
              <p><i className="fas fa-phone me-3"></i> +91 8288809350</p>
              <p><i className="fas fa-print me-3"></i> +91 7464082141</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="copyright text-center p-4">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://AmrekanInnoTech.com/">Amrekan.com</a>
      </div>
      <div className="copyright text-center p-4">
        <a className="text-reset fw-bold" href="https://www.linkedin.com/in/sabirali123/">Developed By SABIR ALI</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
