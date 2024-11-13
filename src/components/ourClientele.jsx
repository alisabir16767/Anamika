import React, { Component } from 'react';
import './ourClientele.css';
import MissionAccomplished from './MissionAccomplished';
import ClientTestimonials from './ClientTestimonials';


class OurClientele extends Component {
   state = {  } 
   render() { 
      return (
         <div className='OurClientele'>
         <div className='OurClientele-header'>
                     <h1>OUR <span className='quality'>CLIENTS</span></h1>

         </div>
          <MissionAccomplished/>
          <ClientTestimonials/>
          </div>
      );
   }
}
 
export default OurClientele;