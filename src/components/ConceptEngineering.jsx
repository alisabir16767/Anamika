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
               It is a method for determining what features a Pharmaceutical Plants should have, and what metrics can be used to measure the quality or performance of the Pharmaceutical Plants based on analysis of client's needs and preferences. The concept engineering process generally includes framing the project, collect data, analyzing the data and selecting actions.
               <br /><br />
               Concept Engineering will be a crucial document to decide the project plan and will be a base document for Detailed Engineering. This involves the initial conceptualization of the entire project which helps in forming the foundation on which the rest of the project is built up.
               <br />
               <b>The Concept Engineering will define followings:</b> 
            </p>
            <ul>
               <li> Plant Design Concept with respect to various International GMP guidelines like EU GMP, PIC/S, US FDA and WHO</li>
               <li>Interface with International Process/Regulatory Authorities.</li>
               <li>Clean Rooms</li>
               <li>Man and Material Movements.</li>
               <li> Logical Flow for the Material and Man Movement.</li>
               <li> Utilities and Equipments Balancing.</li>
               <li>Time and Cost Estimates.</li>
               <li>Fire System</li>
               <li>SS Equipments and Accessories</li>
            </ul>
         </div>
         <div className="ConceptEngineering-items">
            <img src={ConceptEngineeringImage} alt="ConceptEngineeringImage" />
         </div>

         <div className="stage">

            <div className="ConceptEngineering-items">
               
               <p><b>Stage 1:</b>
               <br />
               <br />
               This involves gathering functional requirements of the proposed facility which includes production process together with the required level of automation such as:
               <ul>
                  <li>Dosage Forms</li>
                  <li>Batch Sizes</li>
                  <li>Containment Needs</li>
                  <li>Type of Equipment and Machinery</li>
                  <li>Inventory Norms</li>
                  <li>Expansion Philosophy</li>
               </ul>
               </p>
            </div>
            <div className="ConceptEngineering-items">
               <p><b>Stage 2:</b>
               <br /><br />
               Starts by addressing the following concerns:
               <ul>
                  <li>Preliminary Layout based on Availability of Space and Resources.
                  Targeted Environmental Cleanliness Category.
                  Optimal Water Quality and Water Treatment Facilities.</li>
               </ul>
               <br />
               </p>
            </div>
            <div className="ConceptEngineering-items">
               <p><b>Stage 3:</b>
               <br /><br />
               All the above data are finally used to prepare the following:
               <ul>
                  <li>An overall Budget for Project Execution.</li>
                  <li>The entire Facility Layout for the Preliminary Stage as per National and International Regulatory Norms.</li>
                  <li>Conceptualization of Building Construction.</li>
                  <li>Drawing out User Requirement Specification (URS).</li>
                  <li>Drawing out Project Schedules through Bar Charts.</li>
                  <li>Water Generation and Distribution System Design.</li>
               </ul>
               </p>
            </div>
         </div>
      </div>
      </div>

   );
}

export default ConceptEngineering;
