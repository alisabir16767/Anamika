import React from 'react';
import './ConceptEngineering.css';
import ConceptEngineeringImage from "../assets/images/Concept-Engineering-services.png";
const ConceptEngineering = () => {
   return ( 
      <div className="ConceptEngineering-container">
         <h1>Vehicle <span className='quality'> Maintenance</span></h1>
         <div className='ConceptEngineering'>
            <div className="ConceptEngineering-items">
               <p>
                  Vehicle maintenance is essential to ensure optimal performance, safety, and longevity of the fleet at Maa Ambe Road Carrier. This service covers a range of tasks to keep vehicles in top condition, including inspections, diagnostics, repairs, and preventive care based on industry standards and vehicle requirements.
                  <br /><br />
                  Our vehicle maintenance process is designed to minimize downtime, extend vehicle life, and enhance operational efficiency.
                  <br />
                  <b>The Vehicle Maintenance process includes the following:</b>
               </p>
               <ul>
                  <li>Regular Inspections and Diagnostics</li>
                  <li>Compliance with National and International Safety Standards</li>
                  <li>Engine and Transmission Check-ups</li>
                  <li>Braking System Maintenance and Repair</li>
                  <li>Oil and Fluid Management</li>
                  <li>Tyre Maintenance and Alignment</li>
                  <li>Battery and Electrical System Checks</li>
                  <li>Emergency Breakdown Support</li>
                  <li>24*7 Support</li>
                  <li>Vehicle Tracking and Maintainence</li>
               </ul>
            </div>
            <div className="ConceptEngineering-items">
               <img src={ConceptEngineeringImage} alt="Vehicle Maintenance" />
            </div>

            <div className="stage">
               <div className="ConceptEngineering-items">
                  <p><b>Stage 1:</b>
                  <br /><br />
                  Assessing vehicle condition and requirements through initial diagnostics. This includes:
                  <ul>
                     <li>Performance Assessment and Fault Detection</li>
                     <li>Inspection of Essential Components</li>
                     <li>Maintenance History Review</li>
                     <li>Identification of High-Priority Repairs</li>
                  </ul>
                  </p>
               </div>
               <div className="ConceptEngineering-items">
                  <p><b>Stage 2:</b>
                  <br /><br />
                  Developing a tailored maintenance plan to address specific vehicle needs, covering:
                  <ul>
                     <li>Scheduled Maintenance Tasks</li>
                     <li>Replacement of Worn-Out Parts</li>
                     <li>Fluid Checks and Top-Ups</li>
                     <li>System Calibration and Adjustments</li>
                  </ul>
                  </p>
               </div>
               <div className="ConceptEngineering-items">
                  <p><b>Stage 3:</b>
                  <br /><br />
                  Implementing preventive measures and documenting all services performed, including:
                  <ul>
                     <li>Detailed Service Records</li>
                     <li>Cost and Time Estimates</li>
                     <li>Vehicle Health Report</li>
                     <li>Planning for Future Maintenance Needs</li>
                  </ul>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ConceptEngineering;
