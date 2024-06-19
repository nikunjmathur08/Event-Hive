import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ image, title, subtitle }) => {
  return (
    <div className="artist-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default ArtistCard;
