import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistCard.css';

function ArtistCard({ artistData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${artistData.id}`, { state: { event: artistData}});
  };

  return (
    <div className='artist-card' onClick={handleClick}>
      <img src={artistData.image} alt={artistData.name} className='artist-card-image'/>
      <div className='artist-card-content'>
        <h3>{artistData.name}</h3>
        <p>{artistData.clubName}</p>
      </div>
    </div>
  );
}

export default ArtistCard;