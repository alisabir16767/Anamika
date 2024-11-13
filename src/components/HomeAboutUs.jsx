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
          <li>We are Maa Ambe Road Carrier, a leading and fast-growing company in the transport industry, with a presence across Pan India. Our sister concern, Anamika Road Lines, complements our operations with its strong network.</li>
          <li>With a presence in 10+ locations, including Mumbai (Head Office), Nagpur, Raipur, Indore, Lucknow, and more, we offer comprehensive logistics services to multiple industries including Chemicals, Healthcare, FMCG, E-commerce, IT, Telecom, and Engineering.</li>
          <li>Founded in 2020, we have carved a niche as a trusted logistics service provider, covering over 85% of India's landmass, delivering over 15 million cubic feet of cargo annually.</li>
          <li>Our fleet includes 600+ CCI-owned containerized vehicles and a variety of open trucks, ensuring we deliver goods 'intime, intact' with precision and commitment.</li>
          <li>We offer bespoke transport solutions, including surface, air, train, and multi-modal transportation, tailored to meet the needs of each client. Our services also extend to refrigerated transport for sensitive industries like Pharma and Food.</li>
        </ul>
        <Link to="/aboutUs">
          <button type="button" className="btn btn-outline-primary ReadMore">Read more</button>
        </Link>
      </div>
      <div className='container-items'>
        <h2>PROJECTS EXECUTED <span className='quality'>IN COUNTRIES</span></h2>
        <div className='container-items-data-img'>
          <img src={Country} alt="Executed Countries" />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
