import React from 'react';
import './HomeOurJourney.css';
import { Carousel } from 'react-bootstrap';

// Importing local images
import image2020 from '../assets/images/Second.png';
import image2021 from '../assets/images/First.png';
import image2022 from '../assets/images/Second.png';
import image2023 from '../assets/images/First.png';
import image2024 from '../assets/images/Second.png';

const HomeOurJourney = () => {
  return (
    <div className='our-journey'>
      <h1>Our <span className='quality'>Journey</span> </h1>
      <p>"It's not the destination, it's the journey"</p>
      <p><i><b>Ralph Waldo Emerson, Self-Reliance</b></i></p>

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2020</h5>
                <p className="card-text"><b>Company Established:</b> Maa Ambe Road Carrier began its journey, providing logistics solutions across India.</p>
              </div>
              <img src={image2020} className="card-img-top" alt="2020 Journey Image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2021</h5>
                <p className="card-text"><b>Pan-India Expansion:</b> Opened multiple branches in major cities like Mumbai, Nagpur, and Raipur.</p>
              </div>
              <img src={image2021} className="card-img-top" alt="2021 Journey Image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2022</h5>
                <p className="card-text"><b>Fleet Expansion:</b> Grew to a fleet of over 600 containerized and open trucks, enhancing transport capabilities.</p>
              </div>
              <img src={image2022} className="card-img-top" alt="2022 Journey Image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2023</h5>
                <p className="card-text"><b>Innovation in Technology:</b> Implemented real-time tracking and freight optimization systems.</p>
              </div>
              <img src={image2023} className="card-img-top" alt="2023 Journey Image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2024</h5>
                <p className="card-text"><b>Diverse Logistics Solutions:</b> Introduced refrigerated and ODC transport, air cargo services, and LTL for comprehensive client solutions.</p>
              </div>
              <img src={image2024} className="card-img-top" alt="2024 Journey Image" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeOurJourney;
