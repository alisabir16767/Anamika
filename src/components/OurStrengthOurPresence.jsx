import React, { Component } from 'react';
import './OurStrengthOurPresence.css';
import OurStrengthImage from '../assets/images/OurStrength.png';

class OurStrengthOurPresence extends Component {
   state = {  } 
   render() { 
      return (
         <div className='StrengthPresence'>
            <div className="Strength">
               <h1>OUR <span className='quality'>STRENGTH</span></h1>
               <div className="strength-details">
                  <ul>
                     <li>A highly skilled and committed workforce, dedicated to delivering superior logistics solutions.</li>
                     <li>Proven expertise in managing large-scale logistics and supply chain operations across diverse industries, including Pharma, FMCG, and E-commerce.</li>
                     <li>Track record of successful project execution, from small-scale to large, complex supply chain solutions.</li>
                     <li>Strong national presence with branches across key cities, including Mumbai, Raipur, Lucknow, Nagpur, and more, ensuring extensive coverage of India’s landmass.</li>
                     <li>Client-focused approach, offering tailored logistics services such as refrigerated transport, multi-modal solutions, and last-mile delivery.</li>
                     <li>Reputation for delivering projects and services on time, ensuring cost-efficiency and high customer satisfaction.</li>
                  </ul>
               </div>
            </div>
            <div className="Strength">
               <div className="presence-pic">
                  <img src={OurStrengthImage} alt="Our Strength and Presence" />
               </div>
            </div>
         </div>
      );
   }
}

export default OurStrengthOurPresence;
