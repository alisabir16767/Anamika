import React, { useState } from 'react';
import './ExpertiseFilter.css';

// Import your custom images
import image1 from '../assets/images/Second.png';
import image2 from '../assets/images/Second.png';
import image3 from '../assets/images/First.png';
import image4 from '../assets/images/Third.png';
import image5 from '../assets/images/Third.png';
import image6 from '../assets/images/Second.png';
import image7 from '../assets/images/sixth.jpeg';
import image8 from '../assets/images/sixth.jpeg';
import image9 from '../assets/images/First.png';
import image10 from '../assets/images/Third.png';
import image11 from '../assets/images/Second.png';
import image12 from '../assets/images/First.png';

const ExpertiseFilter = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Array of items with custom images
  const items = [
    { tag: 'brand', title: 'Brand Project', src: image1 },
    { tag: 'art', title: 'Art Project', src: image2 },
    { tag: 'media', title: 'Media Project', src: image3 },
    { tag: 'brand', title: 'Brand Project', src: image4 },
    { tag: 'art', title: 'Art Project', src: image5 },
    { tag: 'media', title: 'Media Project', src: image6 },
    { tag: 'brand', title: 'Brand Project', src: image7 },
    { tag: 'art', title: 'Art Project', src: image8 },
    { tag: 'art', title: 'Art Project', src: image9 },
    { tag: 'brand', title: 'Brand Project', src: image10 },
    { tag: 'brand', title: 'Brand Project', src: image11 },
    { tag: 'brand', title: 'Brand Project', src: image12 },
  ];

  // Filter items based on the selected filter
  const filteredItems = filter === 'all' ? items : items.filter(item => item.tag === filter);

  return (
    <div className="expertise-filter-container">
      <br />
      <hr />
      <div className="expertise-filter-buttons">
        <button className="btn btn-small btn-primary" onClick={() => handleFilterChange('all')}>
          All
        </button>
        <button className="btn btn-small btn-primary" onClick={() => handleFilterChange('art')}>
          Art
        </button>
        <button className="btn btn-small btn-primary" onClick={() => handleFilterChange('media')}>
          Media
        </button>
        <button className="btn btn-small btn-primary" onClick={() => handleFilterChange('brand')}>
          Brand
        </button>
      </div>
      <div className="clearfix"></div>
      <br />
      <div className="expertise-filter-thumbnails">
        {filteredItems.map((item, index) => (
          <div className="expertise-filter-col-md-3" data-tag={item.tag} key={index}>
            <div className="expertise-filter-thumbnail">
              <img alt={item.title} src={item.src} />
              <div className="expertise-filter-caption">
                <h4>{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="push"></div>
    </div>
  );
};

export default ExpertiseFilter;
