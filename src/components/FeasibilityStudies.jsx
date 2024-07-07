import React from 'react';
import './FeasibilityStudies.css';
import FeasibleStudyImage from "../assets/images/Feasibility-Study-3.png";


const FeasibilityStudies = () => {
   return ( 
      <div className='FeasibilityStudies-container'>
                           <h1>FESIBILITY <span className='quality'> STUDIES</span></h1>

      <div className='FeasibilityStudies'>

         <div className="FeasibilityStudies-items">
         <p>
            <span className='quality'>INNOTECH AMERICAN</span> Turnkey can provides its customer with complete feasibilty study comprising of:
         </p>
         <ul>
            <li>Market Study</li>
            <li>Technical Study</li>
            <li>Financial Study</li>
         </ul>
      
         <p>The studies conducted will rely on both primary and secondary data, which will involve both desk and field works. Accordingly, the typical approach employed for such studies includes followings:</p>
         <ul>
            <li>Key Project Goals</li>
            <li>Personnel Requirement</li>
            <li>Licensing and Regulatory Requirements</li>
            <li>Production Capacity</li>
            <li>Production Budget</li>
            <li>Total Investment Cost</li>
            <li>Annual Income Forecast</li>
            <li>Annual Cost of Production</li>
            <li>Net Surplus</li>
            <li>Business Valuation</li>
            <li>Income Statement</li>
         </ul>
         <p>The Detailed Feasibility Report will help you to arrive at a well thought, techno commercial decision to proceed with most viable project plan.</p>
         </div>
         <div className="FeasibilityStudies-items">
            <img src={FeasibleStudyImage} alt="FeasibleStudyImage" />
         </div>
      </div>
      </div>
    );
}
 
export default FeasibilityStudies;
