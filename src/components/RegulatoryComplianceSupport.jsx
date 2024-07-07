import React, { Component } from 'react';
import './RegulatoryComplianceSupport.css';
import RegulatoryComplianceSupportImage from "../assets/images/Regulatory-Compliance-Support.png";

const RegulatoryComplianceSupport = () => {
   return ( 
      <div className="RegulatoryComplianceSupport">
         <h1>REGULATORY <span className='quality'>COMPILANCE SUPPORT</span> </h1>
         <div className="RegulatoryComplianceSupport-items">
         <p><b>I. ADVISORY SERVICES </b>        
         <ul>
            <li>cGMP (Current Good Manufacturing Practice) Compliance</li>
            <li>Advisory services to queries pertaining to Pharma GMP, GLP, QA and Regulatory Affairs</li>
            <li>Compliance audits as per current and updated statutory pharma regulations</li>
            <li>Gap Analysis</li>
            <li>Technical Due diligence for Mergers & Acquisitions</li>
         </ul>
         
         <b>II. TECHNICAL ASSISTANCE</b>
         <ul>
            <li>Site Master file as per PIC/s & Local FDA requirement</li>
            <li>Quantitative Risk and Assessment (QRA)</li>
            <li>Environment Impact Assessment (EIA)</li>
            <li>Safety Audits</li>
            <li>Energy Audits</li>
         </ul>
         </p>
         </div>
        <div className="RegulatoryComplianceSupport-items">
         <img src={RegulatoryComplianceSupportImage} alt="RegulatoryComplianceSupportImage" />
        </div>
      </div>
    );
}
 
export default RegulatoryComplianceSupport;