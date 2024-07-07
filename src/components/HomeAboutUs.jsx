import React from 'react';
import './HomeAboutUs.css';
import { Link } from 'react-router-dom';
import Country from '../assets/images/ExecutedCountry.png';

const HomeAboutUs = () => {
  return (
    <div className='container'>
      <div className='container-items'>
        <h2>ABOUT <span className='quality'>US</span></h2>
        <ul>
          <li>Delivering innovative, energy-efficient & high-standard quality compliant solutions for over two decades.</li>
          <li>Our comprehensive services encompass Architectural & Engineering Design tailored for various sectors including pharmaceuticals, API, Bulk drugs, Biotechnology, Research & Development, Laboratories, Food & cosmetics, Logistics, Residential, and other industries.</li>
          <li>Proficient in executing both Greenfield and Brownfield projects across enterprises of all sizes.</li>
          <li>Our pharmaceutical plant designs adhere to stringent regulatory standards such as USFDA, MHRA, WHO Geneva, Schedule M, cGMP, PICS, TGA, and more.</li>
        </ul>
        <Link to="/aboutUs">
          <button type="button" className="btn btn-outline-primary ReadMore">Read more</button>
        </Link>
      </div>
      <div className='container-items'>
        <h2>PROJECTS EXECUTED <span className='quality'>COUNTRIES</span></h2>
        <div className='container-items-data-img'>
          <img src={Country} alt="Executed Countries" />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
