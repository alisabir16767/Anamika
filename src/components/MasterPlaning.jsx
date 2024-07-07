import React, { Component } from 'react';
import './MasterPlaning.css';
import MasterPlanningImage from '../assets/images/Master-Planning1.png';

const MasterPlaning = () => {
   return ( 
      <div className="MasterPlanning-container">
         <h1>MASTER <span className='quality'> PLANNING</span></h1>

     
      <div className='MasterPlanning'>
         <div className="MasterPlanning-items">
      <p>
      A Master Plan also called a comprehensive plan, provides a long-term vision for the built environment of Pharmaceutical Factories and Laboratories. It guides the appropriate use of lands in order to plan and envisage future growth potential. As a result, the Master Plan has a direct relationship with the growth of the organization.
      <br />
      <br />
      <span className='quality'>INNOTECH AMERICAN</span> Turnkey has an expert team of architects and designers to make a futuristic Master Plan to identify:
      </p>
      <ul>
         <li>Suitable locations for Manufacturing, Administration Research & Development, and Utilities.</li>
         <li>Green belt and environment management.</li>
         <li>Opportunities to extend and/or improve open space, recreational areas, and civic facilities.</li>
         <li>Strategies for future development.</li>
      </ul>
   
      <p><b>Why should a Master Plan be important to you?</b>
      <br />
      The simple answer is that a Master Plan is important because it affects future growth plans.</p>
      <ul>
         <li>Master Plan helps to adopt new manufacturing technologies.</li>
         <li>Pharmaceutical Manufacturing is very dynamic and the master plan helps you to device compliance with future GMP standards.</li>
         <li>Master Plan helps you to adopt new automation.</li>
         
      </ul>
         </div>
         <div className="MasterPlanning-items">
            <img src={MasterPlanningImage} alt="MasterPlanning Image" />
         </div>

     
     
   </div>
   </div>
    );
}
 
export default MasterPlaning;