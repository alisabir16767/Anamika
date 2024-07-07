import React, { Component } from 'react';
import CountUp from 'react-countup';
import './CountUpComponent.css'; // Import your CSS file

class CountUpComponent extends Component {
   state = {} 
   
   render() { 
      return (
         <div className='CountUpContainer'>
            <div className='CountUpItem'>
               <h1><CountUp end={10} suffix="+" /></h1>
               <p>Year of Experience</p>
            </div>
            <div className='CountUpItem'>
              <h1><CountUp end={100} suffix="+" /></h1>
              <p>Projects Completed</p>
            </div>
            <div className='CountUpItem'>
            <h1>  <CountUp end={50} suffix="+" /></h1>
            <p>Ongoing Projects</p>
              
            </div>
            <div className='CountUpItem'>
            <h1>  <CountUp end={100} suffix="%" /></h1>
            <p>Satisfactory Service</p>
            </div>
         </div>
      );
   }
}
 
export default CountUpComponent;
