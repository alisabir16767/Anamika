import React from 'react';
import './FeasibilityStudies.css';
import FeasibleStudyImage from "../assets/images/Feasibility-Study-3.png";

const FeasibilityStudies = () => {
   return ( 
      <div className='FeasibilityStudies-container'>
         <h1>FEASIBILITY <span className='quality'> STUDIES</span></h1>

         <div className='FeasibilityStudies'>
            <div className="FeasibilityStudies-items">
               <p>
                  <span className='quality'>Maa Ambe Road Carrier</span> provides comprehensive feasibility studies to help clients make informed decisions regarding logistics, transportation, and expansion projects. Our studies include:
               </p>
               <ul>
                  <li>Market Study</li>
                  <li>Technical Study</li>
                  <li>Financial Study</li>
               </ul>
            
               <p>
                  We conduct studies based on both primary and secondary data, utilizing desk research and field work to ensure accuracy. Our approach typically includes the following aspects:
               </p>
               <ul>
                  <li>Key Project Goals</li>
                  <li>Personnel Requirements</li>
                  <li>Licensing and Regulatory Requirements</li>
                  <li>Capacity Planning</li>
                  <li>Budget Analysis</li>
                  <li>Total Investment Estimation</li>
                  <li>Annual Revenue Forecast</li>
                  <li>Operational Cost Analysis</li>
                  <li>Profit and Loss Forecast</li>
                  <li>Business Valuation</li>
                  <li>Financial Statements</li>
               </ul>
               <p>
                  Our detailed feasibility report will guide you in making a sound, commercially viable decision that aligns with your project goals and resources.
               </p>
            </div>
            <div className="FeasibilityStudies-items">
               <img src={FeasibleStudyImage} alt="Feasibility Study" />
            </div>
         </div>
      </div>
   );
}

export default FeasibilityStudies;
