import React from 'react'; 
import "./ServicePortfolio.css";
import ServicePortfolioImage from "../assets/images/ServicePortfolio.png";

const ServicePortfolio = () => {
   return ( 
      <div className="ServicePortfolio-container">
         <h1>SERVICE <span className='quality'> PORTFOLIO</span></h1>

         <div className='ServicePortfolio'>
            <div className='ServicePortfolio-items'>
               <p>
                  Maa Ambe Road Carrier is committed to providing top-notch logistics and transportation services across India. With extensive experience in the industry, we offer comprehensive solutions designed to meet our clients' logistics needs efficiently and cost-effectively. Our service portfolio includes:
               </p>
               <ul>
                  <li>Primary & Secondary Transport Solutions</li>
                  <li>(FTL) Full Truck Load</li>
                  <li>(PTL) Part Truck Load</li>
                  <li>Dry Container Truck</li>
                  <li>Single-XL high Cube</li>
                  <li>Multi-XL</li>
                  <li>Multimodal Transport Solutions</li>
                  <li>20 FONT TRUCK sizes</li>
               </ul>
            </div>
            <div className="ServicePortfolio-items">
               <img src={ServicePortfolioImage} alt="Service Portfolio" />
            </div>
         </div>
      </div>
   );
}

export default ServicePortfolio;
