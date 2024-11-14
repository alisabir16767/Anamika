import React from 'react';
import './TechnologyTransfer.css';
import TechnologyTransferImage from "../assets/images/Technology-Transfer.png";

const TechnologyTransfer = () => {
   return ( 
      <div className="TechnologyTransfer-container">
         <h1>SAFETY <span className='quality'>TRAINING</span></h1>

      <div className="TechnologyTransfer">
         <div className="TechnologyTransfer-items">
         <p>
Comprehensive Training Solutions for Safe and Efficient Operations. Our company is committed to promoting a culture of safety and preparedness among our team members.
We provide specialized training programs, including safe truck driving techniques and essential fire safety protocols, to ensure that our employees are equipped with the knowledge and skills needed to handle various situations responsibly and safely.
Our experienced trainers guide employees through best practices, safety regulations, and emergency response strategies, fostering a secure and efficient work environment for everyone.</p>
         </div>
         <div className="TechnologyTransfer-items">
            <img src={TechnologyTransferImage} alt="Safety Training" />
         </div>
      </div>
      </div>
    );
}
 
export default TechnologyTransfer;
