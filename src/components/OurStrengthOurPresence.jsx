import React, { Component } from 'react';
import './OurStrengthOurPresence.css';
import OurStrengthImage from '../assets/images/OurStrength.png';

class OurStrengthOurPresence extends Component {
   state = {  } 
   render() { 
      return (
         <div className='StrengthPresence'>
            <div className="Strength">
               <h1>OUR <span className='quality'>STRENGTH</span> </h1>
               <div className="strength-details">
                  <ul>
                     <li>Exceptionally skilled and driven team members.</li>
                     <li>Profound expertise equipped to tackle intricate projects.</li>
                     <li>Demonstrated track record of effectively executing projects across a spectrum of enterprises, ranging from small to large.</li>
                     <li>Extensive global project experience spanning diverse locations.</li>
                     <li>Client-centric methodology delivering customized solutions.</li>
                     <li>Established reputation for delivering projects punctually and with cost-efficiency.</li>
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
