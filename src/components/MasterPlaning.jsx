import React from 'react';
import './MasterPlaning.css';
import MasterPlanningImage from '../assets/images/Master-Planning1.png'; // Update with relevant image if necessary

const MasterPlaning = () => {
   return ( 
      <div className="MasterPlanning-container">
         <h1>MASTER <span className='quality'> PLANNING</span></h1>

         <div className='MasterPlanning'>
            <div className="MasterPlanning-items">
               <p>
                  A Master Plan, also called a comprehensive plan, provides a long-term vision for the structured development of infrastructure within industries. It ensures the optimal use of resources and guides future growth potential. For companies like Maa Ambe Road Carrier, a Master Plan plays a pivotal role in driving organizational growth.
                  <br />
                  <br />
                  <span className='quality'>Maa Ambe Road Carrier</span> has a dedicated team of experts who design futuristic Master Plans to help identify:
               </p>
               <ul>
                  <li>Optimal locations for Logistics Operations, Administration, and Service Utilities.</li>
                  <li>Green belt and environmental management to support sustainable development.</li>
                  <li>Opportunities to expand or enhance open spaces and improve service and operational areas.</li>
                  <li>Strategic plans for future growth and development.</li>
               </ul>
            
               <p><b>Why is a Master Plan important?</b>
               <br />
               A Master Plan is crucial because it impacts future growth and operational strategies, ensuring that all processes are aligned with long-term objectives.</p>
               <ul>
                  <li>It enables the adoption of new transportation and logistics technologies.</li>
                  <li>Helps Maa Ambe Road Carrier adapt to evolving industry standards and compliance requirements.</li>
                  <li>Supports the integration of new automation and efficiency improvements in logistics operations.</li>
               </ul>
            </div>

            <div className="MasterPlanning-items">
               <img src={MasterPlanningImage} alt="Master Planning Image" />
            </div>
         </div>
      </div>
    );
}

export default MasterPlaning;
