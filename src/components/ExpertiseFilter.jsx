import React, { useState } from 'react';
import './ExpertiseFilter.css';

const ExperttiseFilter = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const items = [
    { tag: 'brand', title: 'Brand Project', src: 'http://placehold.it/270x170' },
    { tag: 'art', title: 'Art Project', src: 'http://placehold.it/270x170' },
    { tag: 'media', title: 'Media Project', src: 'http://placehold.it/270x170' },
    { tag: 'brand', title: 'Brand Project', src: 'http://placehold.it/270x170' },
    { tag: 'art', title: 'Art Project', src: 'http://placehold.it/270x170' },
    { tag: 'media', title: 'Media Project', src: 'http://placehold.it/270x170' },
    { tag: 'brand', title: 'Brand Project', src: 'http://placehold.it/270x170' },
    { tag: 'art', title: 'Art Project', src: 'http://placehold.it/270x170' },
    { tag: 'art', title: 'Art Project', src: 'http://placehold.it/270x170' },
    { tag: 'brand', title: 'Brand Project', src: 'http://placehold.it/270x170' },
    { tag: 'brand', title: 'Brand Project', src: 'http://placehold.it/270x170' },
    { tag: 'brand', title: 'Brand Project', src: 'http://placehold.it/270x170' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.tag === filter);

  return (
    <div className="container wrapper">
      <br />
      <hr />
      <div className="pull-right">
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
      <div className="thumbnails gallery">
        {filteredItems.map((item, index) => (
          <div className="col-md-3" data-tag={item.tag} key={index}>
            <div className="thumbnail">
              <img alt="270x170" src={item.src} />
              <div className="caption">
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

export default ExperttiseFilter;
