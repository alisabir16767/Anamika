import React from 'react';
import './RegulatoryComplianceSupport.css';
import RegulatoryComplianceSupportImage from "../assets/images/Regulatory-Compliance-Support.png";

const RegulatoryComplianceSupport = () => {
   return ( 
      <div className="RegulatoryComplianceSupport">
         <h1>REGULATORY <span className='quality'>COMPLIANCE SUPPORT</span></h1>
         <div className="RegulatoryComplianceSupport-items">
         <p>
            <b>I. ADVISORY SERVICES</b>        
         <ul>
            <li>Compliance with transport and logistics safety standards</li>
            <li>Advisory services for logistics-related regulatory requirements, including environmental and safety guidelines</li>
            <li>Regular audits to meet transportation safety and operational regulations</li>
            <li>Gap Analysis for regulatory compliance within logistics operations</li>
            <li>Due diligence for mergers, acquisitions, and expansion of logistics facilities</li>
         </ul>
         
         <b>II. TECHNICAL ASSISTANCE</b>
         <ul>
            <li>Preparation of operational compliance documentation for regulatory bodies</li>
            <li>Risk and Safety Assessments for vehicle operations and facilities</li>
            <li>Environmental Impact Assessment (EIA) for logistics hubs</li>
            <li>Safety Audits to ensure compliance with local and international standards</li>
            <li>Energy Audits to optimize fuel and power consumption in logistics operations</li>
         </ul>
         </p>
         </div>
        <div className="RegulatoryComplianceSupport-items">
         <img src={RegulatoryComplianceSupportImage} alt="Regulatory Compliance Support" />
        </div>
      </div>
    );
}
 
export default RegulatoryComplianceSupport;
