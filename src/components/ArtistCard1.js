import React from 'react';
import './ArtistCard1.css';

const ArtistCard1 = ({ image, title, subtitle }) => {
  return (
    <div className="artist-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default ArtistCard1;
