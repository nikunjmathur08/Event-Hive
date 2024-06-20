import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistCard.css';

function ArtistCard({ image, name, clubName, eventId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className='artist-card' onClick={handleClick}>
      <img src={image} alt={name} className='artist-card-image'/>
      <div className='artist-card-content'>
        <h3>{name}</h3>
        <p>{clubName}</p>
      </div>
    </div>
  );
}

export default ArtistCard;