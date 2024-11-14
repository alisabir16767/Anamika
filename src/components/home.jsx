import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import './home.css';
import CountUpComponent from './CountUpComponent';
import HomeAboutUs from './HomeAboutUs';
import HomeOurClient from './HomeOurClient';
import MatchWinningAchievement from './MatchWinningAchievement';
import HomeOurJourney from './HomeOurJourney';

import MissionFullStop from './MissionFullStop';

class Home extends Component {
   state = {  } 
   render() { 
      return (
         <div className='main-content'>
           <CarouselComponent/>
           <CountUpComponent/>
           <HomeAboutUs/>       
<hr />           
         <MissionFullStop/>
        
          <HomeOurJourney/>
           <MatchWinningAchievement/>
           <HomeOurClient/>
           
         </div>
         
      );
   }
}
 
export default Home;