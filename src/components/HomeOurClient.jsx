import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeOurClient.css';


import img1 from '../assets/images/UTL.png';
import img2 from '../assets/images/OC.png';
import img3 from '../assets/images/PSA.png';
import img4 from '../assets/images/MILAN.png';
import img5 from '../assets/images/QUANTUM.png';
import img6 from '../assets/images/SHALINA.png';  
import img7 from '../assets/images/CROWN.png';
import img8 from '../assets/images/Eris.png';

const clients = [
  { id: 'company-img1', img: img1 },
  { id: 'company-img2', img: img2 },
  { id: 'company-img3', img: img3 },
  { id: 'company-img4', img: img4 },
  { id: 'company-img5', img: img5 },
  { id: 'company-img6', img: img6 },  // New image
  { id: 'company-img7', img: img7 },  // New image
  { id: 'company-img8', img: img8 },  // New image
];

const HomeOurClient = () => {
  return (
    <div className='our-client'>
      <h1>OUR <span className='quality'>CLIENT </span> </h1>
      {clients.length > 5 ? (
        <Carousel>
          {clients.map((client, index) => (
            <Carousel.Item key={index}>
              <div className='company'>
                {clients.slice(index, index + 5).map((client, subIndex) => (
                  <div
                    key={subIndex}
                    className='company-img'
                    style={{ backgroundImage: `url(${client.img})` }}
                  >
                    {/* You can replace the text here if you have specific content for each image */}
                    {client.id.split('-')[2]}
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className='company'>
          {clients.map((client, index) => (
            <div
              key={index}
              className='company-img'
              style={{ backgroundImage: `url(${client.img})` }}
            >
              {/* You can replace the text here if you have specific content for each image */}
              {client.id.split('-')[2]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeOurClient;
