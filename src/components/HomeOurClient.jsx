import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeOurClient.css';

const clients = [
  { id: 'company-img1', img: 'https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'company-img2', img: 'https://media.istockphoto.com/id/1087218874/photo/shot-of-sterile-pharmaceutical-manufacturing-laboratory-where-scientists-in-protective.jpg?s=1024x1024&w=is&k=20&c=fCQkr6R-qm27ZDG0KCoTxIAxBw0QR-qTsbzDLRK-XI0=' },
  { id: 'company-img3', img: 'https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'company-img4', img: 'https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'company-img5', img: 'https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'company-img1', img: 'https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'company-img1', img: 'https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Add more clients if needed
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
              {client.id.split('-')[2]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeOurClient;
