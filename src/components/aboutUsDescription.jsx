import React, { Component } from 'react';
import './aboutUsDescription.css';
import DescriptionImage from "../assets/images/aboutUsDescription.png";

const AboutUsDescription = () => {
   return ( 
      <div className='AboutUs-Container'>
         <h1 className='AboutUs-Title'>FROM SCRATCH <span className='quality'>TO BATCH</span> </h1>
         <p>"The key to growth is of higher dimensions of conciousness into our awereness Introduction" </p>
         <p><i><b>~Lao Tzu</b></i></p>
         <div className='AboutUs-Title-Description'>
            <p>
<span className='quality'>AMREKAN INNOTECH</span> Healthcare Redefined is a world-leading life science engineering and Pharmaceutical Engineering Solutions company with a diversified portfolio and sales in over 12 countries, as a manufacturer of heating cooling, sterilization and air contamination controlling technology and machinery for Hospital, Pharmaceutical, Laboratory. Biopharma and IVF industries.
<br />
<br />
Based on more than 10 years of experience and know-how, AMREKAN INNOTECH is known for its quality, continual innovation and attention to its customers' needs. We continue to provide reliable world-class equipment to help pharmaceutical companies make their products safer and more cost-effective.
<br />
<br />
<span className='quality'>AMREKAN INNOTECH</span> has the widest range of certifications making it the top-most preferred by leading MNC pharmaceutical, biotech companies, universities, research-institutes, hospitals & IVF center’s all across the globe. We continue to innovate to provide enabling technologies to make human lives healthier and safer, capturing the essence of true value creation.
<br /><br />
<span className='quality'>AMREKAN INNOTECH</span> is the acknowledged leader in providing the best contamination controlling technology and machinery of the highest value, offering a combination of value, high quality construction, low operating costs, great customer support and a wide product range to suit all budget.</p>

<br /><br />

Welcome to the world of <span className='quality'>AMREKAN INNOTECH.</span> 
 <div className='DescriptionImage'>
   <img src={DescriptionImage} alt="DescriptionImage" />
 </div>
         </div>
   
      </div>
      

    );
}
 
export default AboutUsDescription;