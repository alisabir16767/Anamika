import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './MatchWinningAchievement.css';

const MatchWinningAchievement = () => {
  return (
    <motion.div
      className='achievement'
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties on component mount
      transition={{ duration: 1 }} // Transition duration
    >
      <div className='achievement-items'>
        <h1>FEW OF OUR <span className='quality'>LEADING AND FAST GROWING ACHIEVEMENTS IN THE TRANSPORT INDUSTRY</span></h1>
        <ul>
          <li>Founded in 2020, Maa Ambe Road Carrier has grown rapidly to become a prominent logistics provider, with a strong presence across India.</li>
          <li>Our company operates in major cities including Mumbai (Head Office), Nagpur, Raipur, Durgapur, Indore, Allahabad, Lucknow, Rajasthan, Haryana, Mohali, Amritsar, Uttarakhand, Kashipur, and Sambhalpur (Orissa), serving 40+ locations.</li>
          <li>We pride ourselves on employing a dedicated team of 40+ professionals across branches, ensuring smooth operations in the logistics industry.</li>
          <li>We manage over 15 million cubic feet of cargo every year, covering 85% of India’s landmass, through a fleet of 600+ containerized vehicles and open trucks.</li>
          <li>Our logistics services are enhanced by real-time cargo visibility, freight optimization, and sophisticated data management, ensuring timely deliveries and safe handling of goods.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MatchWinningAchievement;
