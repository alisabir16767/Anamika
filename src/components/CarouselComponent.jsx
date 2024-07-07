import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'; // Import the custom CSS file
import Second from "../assets/images/Second.png";
import Third from "../assets/images/Third.png";
import Fourth from "../assets/images/Fourth.png";
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <Link to="/contacts">
          <img
            className="d-block w-100"
            src={Fourth}
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/ourservices">
          <img
            className="d-block w-100"
            src={Second}
            alt="Second slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/ourexpertise">
          <img
            className="d-block w-100"
            src={Third}
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
