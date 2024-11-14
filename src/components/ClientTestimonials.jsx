import React from 'react';
import './ClientTestimonials.css';
import BDAImage from '../assets/images/BDA.png';
import BDAImage2 from '../assets/images/BDA2.jpg';
import BDAImage3 from '../assets/images/BDA3.jpg';
import BDAImage4 from '../assets/images/BDA4.jpg';
import BDAImage5 from '../assets/images/BDA5.jpg';


const ClientTestimonials = () => {
   return ( 
      <div className="ClientTestimonials">
         <h1>OUR <span className='quality'>TESTIMONIALS</span></h1>
         <div className="ClientTestimonials-items">
            <div className="ClientTestimonials-pic">
               <img src={BDAImage} alt="BDA" />
            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage2} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage3} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage4} alt="BDA" />

            </div>
            <div className="ClientTestimonials-pic">
            <img src={BDAImage5} alt="BDA" />

            </div>
            
         </div>
      </div>
    );
}
 
export default ClientTestimonials;
