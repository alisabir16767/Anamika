import React from 'react';
import './ClientTestimonials.css';
import BDAImage from '../assets/images/BDA.png';

const ClientTestimonials = () => {
   return ( 
      <div className="ClientTestimonials">
         <h1>CLIENT <span className='quality'>TESTIMONIALS</span></h1>
         <div className="ClientTestimonials-items">
            <div className="ClientTestimonials-pic">
               <img src={BDAImage} alt="BDA" />
            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage} alt="BDA" />

            </div>
         </div>
      </div>
    );
}
 
export default ClientTestimonials;
