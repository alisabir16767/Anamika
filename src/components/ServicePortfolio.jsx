import React, { Component } from 'react';
import "./ServicePortfolio.css";
import ServicePortfolioImage from "../assets/images/ServicePortfolio.png";

const ServicePortfolio = () => {
   return ( 
      <div className="ServicePortfolio-container">
         <h1>SERVICE <span className='quality'> PORTFOLIO</span></h1>

      <div className='ServicePortfolio'>
         <div className='ServicePortfolio-items'>
            <p>Pharmaceutical Turnkey believes affordable healthcare for all is possible by providing state-of-the-art Pharmaceutical facilities, which are efficient in Capex and Opex.With their experience of close to two decades, they offer best-in-class Turnkey Projects at an optimum project cost by providing out-and-out services including:</p>
            <ul>
               <li>Design & Execution</li>
               <li>Civil & Structural</li>
               <li>Clean Rooms</li>
               <li>HVAC</li>
               <li>Process Equipments</li>
               <li>Electrical</li>
               <li>Process Piping</li>
               <li>Fire System</li>
               <li>SS Equipments and Accessories</li>
            </ul>
         </div>
         <div className="ServicePortfolio-items">
            <img src={ServicePortfolioImage} alt="ServicePortfolioImage" />
         </div>
         

         </div>
         </div>

    );
}
 
export default ServicePortfolio;