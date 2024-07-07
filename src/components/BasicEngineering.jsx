import React from 'react';
import './BasicEngineering.css';
import BasicEngineeringServicesImage from "../assets/images/BasicEngineeringServices.png";

const BasicEngineering = () => {
   return ( 
      <div className="BasicEngineering">
         <h1>Basic <span className='quality'>Engineering</span></h1>
         <div className="BasicEngineering-container">
            <div className="BasicEngineering-items">
               <p><b>During BASIC ENGINEERING, the following definitions of the Project will be developed:</b></p>
               <ul>
                  <li>Alternative Plant Layouts meeting GMP requirements.</li>
                  <li>Men/Material Flow drawings on the approved layout.</li>
                  <li>Design of Heating, Ventilation, Air Conditioning and Pressure Differential System with proposed Air Flow Diagram.</li>
                  <li>Design on Treatment, Purification, Filtration and Distribution of various Utility Systems like Water, Steam and Compressed Air, etc.</li>
                  <li>Estimate Requirements of various Utilities.</li>
                  <li>Estimate Electric Power Requirements for the plant and suggest High Tension and Low Tension Distribution Schemes.</li>
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
