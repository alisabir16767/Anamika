import React from 'react';
import './aboutUsDescription.css';
import DescriptionImage from "../assets/images/aboutUsDescription.png";

const AboutUsDescription = () => {
   return ( 
      <div className='AboutUs-Container'>
         <h1 className='AboutUs-Title'>SAFE AND <span className='quality'>SECURE</span></h1>
         <p>"The key to growth is in higher dimensions of consciousness in our awareness." </p>
         <p><i><b>~ Pradeep Mishra</b></i></p>
         <div className='AboutUs-Title-Description'>
            <p>
              <span className='quality'>Maa Ambe Road Carrier</span> is a leading and fast-growing logistics company in India, specializing in supply chain solutions with a strong presence across the country. With our sister concern, <span className='quality'>Anamika Road Lines</span>, we are committed to providing top-tier logistics services to industries such as Pharmaceuticals, FMCG, E-commerce, Chemicals, Healthcare, and Engineering.
              <br /><br />
              Our journey began in 2020, and over the last 4 years, we have earned the trust of global leaders by delivering high-quality and reliable logistics solutions. Our services span over 85% of India’s landmass, and we proudly handle and deliver over 15 million cubic feet of cargo each year.
              <br /><br />
              As pioneers in the transport industry, we offer a diverse range of services, including primary and secondary transport, refrigerated transportation for sensitive products, multi-modal transport solutions, and last-mile delivery. Our fleet of more than 600 CCI-owned vehicles ensures safe, efficient, and timely deliveries, fulfilling our motto: “**Intime, Intact**.”
              <br /><br />
              We have an extensive network of branches across the country, including Mumbai (Head Office), Nagpur, Raipur, Indore, Lucknow, and more, backed by a dedicated team of over 40 professionals who ensure seamless operations across all locations.
              <br /><br />
              Welcome to the world of <span className='quality'>Maa Ambe Road Carrier</span>, where we deliver logistics solutions with precision and commitment.
            </p>
            <br />
         
         </div>
      </div>
   );
}
 
export default AboutUsDescription;
