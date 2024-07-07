import React, { Component } from 'react';
import './contacts.css';
import ContactUsItems from './ContactUs-items';

class Contacts extends Component {
   state = {  } 
   render() { 
      return (
         <div className="Contacts">
            <div className="Contacts-items">
               <h1>CONTACTS <span className='quality'>US</span> </h1>
              

            </div>
            <ContactUsItems />
         </div>
      );
   }
}
 
export default Contacts;