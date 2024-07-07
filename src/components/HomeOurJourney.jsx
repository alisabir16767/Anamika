import React from 'react';
import './HomeOurJourney.css';
import { Carousel } from 'react-bootstrap';

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
                <h5 className="card-title">2018 </h5>
                <p className="card-text"> <b>Launched 10+ Novel Drugs:</b> Targeted diseases like cancer, diabetes, and rare genetic disorders.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1530721733923-e2df89901503?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Image 1" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2019</h5>
                <p className="card-text"> <b>200+ Clinical Trials:</b> Ensured safety, efficacy, and regulatory compliance globally.</p>
              </div>
              <img src="https://media.istockphoto.com/id/643285752/photo/weve-done-it-again.jpg?s=1024x1024&w=is&k=20&c=CjzRnoc25S6z8jSQISAB5HjXAeQ54Ryoqx5i_kT34-4=" className="card-img-top" alt="Image 2" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2020</h5>
                <p className="card-text"> <b> Green Manufacturing:</b> Reduced carbon footprint by 40%, achieving ISO 14001 certification.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Image 3" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2021</h5>
                <p className="card-text"> <b> Global Expansion:</b> Operations in over 50 countries, serving millions worldwide.personalized medicine.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Image 4" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2022</h5>
                <p className="card-text"> <b>$500M Annual R&D:</b> Pioneered advancements in biotechnology and personalized medicine.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Image 5" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeOurJourney;
