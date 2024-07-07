import React, { Component } from 'react';
import './TechnologyTransfer.css';
import TechnologyTransferImage from "../assets/images/Technology-Transfer.png";
const TechnologyTransfer = () => {
   return ( 
      <div className="TechnologyTransfer-container">
         <h1>TECHNOLOGY <span className='quality'> TRANSFER</span></h1>

      <div className="TechnologyTransfer">
         <div className="TechnologyTransfer-items">
         <p>
Expert Solutions for Successful and Efficient Technology Transfers. Companies transferring products and processes from one site to another often face limitations on time, resources, and regulatory expectations.
Transfers can be complicated and many companies don't have a comprehensive plan, standard operating procedures (SOPs) or guidelines in place to effectively conduct the technology transfer. This is where we come in.
Our team of multi-functional life science consultants have proven success in managing product and process transfers for our clients.
Our team will demonstrate how to transfer your product or process in the most efficient manner possible, ensuring compliance along the entire way.</p>
         </div>
         <div className="TechnologyTransfer-items">
            <img src={TechnologyTransferImage} alt="TechnologyTransferImage" />
         </div>
      </div>
      </div>

    );
}
 
export default TechnologyTransfer;