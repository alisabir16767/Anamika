import React from 'react';
import './BasicEngineering.css';
import BasicEngineeringServicesImage from "../assets/images/BasicEngineeringServices.png";

const BasicEngineering = () => {
   return ( 
      <div className="BasicEngineering">
         <h1>Basic <span className='quality'>Engineering</span></h1>
         <div className="BasicEngineering-container">
            <div className="BasicEngineering-items">
               <p><b>During the BASIC ENGINEERING phase, the following elements of the logistics infrastructure are developed:</b></p>
               <ul>
                  <li>Optimized facility layouts to maximize loading and unloading efficiency.</li>
                  <li>Planning of vehicle and material flow paths to ensure smooth operations.</li>
                  <li>Design of HVAC and environmental control systems for temperature-sensitive goods.</li>
                  <li>Planning for water, fuel, and other essential utility systems to support daily operations.</li>
                  <li>Estimating resource requirements to support vehicle maintenance and logistics operations.</li>
                  <li>Calculating electrical power needs and outlining a distribution plan to support high-load equipment and lighting.</li>
               </ul>
            </div>
            <div className="BasicEngineering-items">
               <img src={BasicEngineeringServicesImage} alt="Basic Engineering Services" />
            </div>
         </div>
      </div>
    );
}
 
export default BasicEngineering;
