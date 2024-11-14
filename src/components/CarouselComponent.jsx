import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'; 
import Second from "../assets/images/Second.png";
import Third from "../assets/images/Third.png";
import Fourth from "../assets/images/Fourth.png";
import  First  from '../assets/images/First.png';
import  Fifth  from '../assets/images/logo1.jpg';
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
      <Carousel.Item>
        <Link to="/contacts">
          <img
            className="d-block w-100"
            src={First}
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/About Us">
          <img
            className="d-block w-100"
            src={Fifth}
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
