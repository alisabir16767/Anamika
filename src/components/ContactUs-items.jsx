import React from 'react';
import './ContactUs-items.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUsItems = () => {
   return ( 
      <div className="ContactUs-items">
         <div className="Address">
            <div className="Address-detail">
               <h4><FontAwesomeIcon icon={faMapMarkerAlt} />CORPORATE OFFICE:</h4>
               <p>Office Number 283, 2nd Floor Disma Complex Kalamboli Navi Mumbai 410218</p>
               <h4><FontAwesomeIcon icon={faEnvelope} /> EMAIL:</h4>
               <p>maaamberoad@gmail.com</p>
               <h4><FontAwesomeIcon icon={faPhone} /> PHONE:</h4>
               <p>+91 8850418165</p>
            </div>
            <div className="Address-detail">
               <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> BRANCH OFFICE:</h4>
               <p>Survey No. 204, Kolkhe Village, Old Mumbai Pune Road Panvel Navi Mumbai</p>
               <h4><FontAwesomeIcon icon={faEnvelope} /> EMAIL:</h4>
               <p>anamikaroadlines@gmail.com</p>
               <h4><FontAwesomeIcon icon={faPhone} /> PHONE:</h4>
               <p>+91 9769419731</p>
            </div>
         </div>
         <div className="ContactForm">
            <form>
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" />
               </div>
               <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" className="form-control" />
               </div>
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" rows="4"></textarea>
               </div>
               <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="copy" />
                  <label className="form-check-label" htmlFor="copy">Send me a copy of this message</label>
               </div>
               <button type="button" className="btn btn-primary btn-block">Send</button>
            </form>
         </div>
         <div className="location">
            
         </div>
      </div>
    );
}
 
export default ContactUsItems;
