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
        <h1>FEW OF OUR <span className='quality'> MATCH WINNING ACHIEVEMENTS  </span></h1>
        <ul>
          <li>Successfully developed and launched over 10 novel pharmaceuticals in the past decade, targeting diseases such as cancer, diabetes, and rare genetic disorders.</li>
          <li>Conducted over 200 clinical trials globally, with a focus on ensuring safety, efficacy, and regulatory compliance.</li>
          <li>Invested over $500 million annually in R&D, leading to groundbreaking advancements in biotechnology and personalized medicine.</li>
          <li>Expanded operations to over 50 countries, providing essential medications and healthcare solutions to millions of patients worldwide.</li>
          <li>Implemented green manufacturing processes, reducing carbon footprint by 40% and achieving ISO 14001 certification for environmental management.</li>
          <li>Formed strategic alliances with leading academic institutions, research organizations, and healthcare providers to foster innovation and improve patient outcomes.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MatchWinningAchievement;
