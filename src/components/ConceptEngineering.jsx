import React from 'react';
import './ConceptEngineering.css';
import ConceptEngineeringImage from "../assets/images/Concept-Engineering-services.png";

const ConceptEngineering = () => {
   return ( 
      <div className="ConceptEngineering-container">
         <h1>CONCEPT <span className='quality'> ENGINEERING</span></h1>
         <div className='ConceptEngineering'>
            <div className="ConceptEngineering-items">
               <p>
                  Concept Engineering is the foundational step for identifying and defining the features and layout of logistics and transport infrastructure that Maa Ambe Road Carrier can provide. This process involves analyzing client requirements to create an efficient and effective concept plan. It includes project framing, data collection, data analysis, and action selection based on logistics and transport needs.
                  <br /><br />
                  This concept engineering document serves as a guide for the project plan and as a basis for detailed engineering, laying the groundwork for the entire project.
                  <br />
                  <b>The Concept Engineering process defines the following:</b>
               </p>
               <ul>
                  <li>Design Concept for Transport and Logistics Solutions</li>
                  <li>Regulatory Compliance with National and International Standards</li>
                  <li>Facility Layout and Material Handling</li>
                  <li>Optimized Routes and Flow for Vehicles and Personnel</li>
                  <li>Equipment and Utility Balancing</li>
                  <li>Time and Cost Estimation</li>
                  <li>Fire and Safety Systems</li>
                  <li>Additional Supporting Equipment</li>
               </ul>
            </div>
            <div className="ConceptEngineering-items">
               <img src={ConceptEngineeringImage} alt="Concept Engineering" />
            </div>

            <div className="stage">
               <div className="ConceptEngineering-items">
                  <p><b>Stage 1:</b>
                  <br /><br />
                  Identifying functional requirements for logistics facilities, including process workflows and levels of automation. This includes:
                  <ul>
                     <li>Service Types and Volumes</li>
                     <li>Fleet and Equipment Needs</li>
                     <li>Handling and Storage Requirements</li>
                     <li>Expansion Strategies</li>
                  </ul>
                  </p>
               </div>
               <div className="ConceptEngineering-items">
                  <p><b>Stage 2:</b>
                  <br /><br />
                  Initial layout development based on available space and resources, addressing requirements such as:
                  <ul>
                     <li>Preliminary Site Layout</li>
                     <li>Environmental and Safety Standards</li>
                     <li>Water and Waste Management Facilities</li>
                  </ul>
                  </p>
               </div>
               <div className="ConceptEngineering-items">
                  <p><b>Stage 3:</b>
                  <br /><br />
                  Using the collected data to develop the following:
                  <ul>
                     <li>Project Budget Estimation</li>
                     <li>Facility Layout Compliant with Regulatory Norms</li>
                     <li>Conceptual Building Design</li>
                     <li>User Requirement Specifications (URS)</li>
                     <li>Project Schedule Development</li>
                     <li>Utility and Infrastructure Design</li>
                  </ul>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ConceptEngineering;
