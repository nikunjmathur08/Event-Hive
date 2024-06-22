import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistCard.css';

import hackImage1 from '../assets/hack-1.jpg';
import hackImage2 from '../assets/hack-2.jpg';
import hackImage3 from '../assets/hack-3.jpeg';
import hackImage4 from '../assets/hack-4.jpg';
import hackImage5 from '../assets/hack-5.jpg';
import hackImage6 from '../assets/hack-6.png';

function getRandomImage(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

const hackImages = [hackImage1, hackImage2, hackImage3, hackImage4, hackImage5, hackImage6];

function ArtistCard({ artistData }) {
  const navigate = useNavigate();
  const randomImage = getRandomImage(hackImages);

  const handleClick = () => {
    navigate(`/events/${artistData.id}`, { state: { event: artistData}});
  };

  return (
    <div className='artist-card' onClick={handleClick}>
      <img src={randomImage} alt={artistData.name} className='artist-card-image'/>
      <div className='artist-card-content'>
        <h3>{artistData.name}</h3>
        <p>{artistData.club}</p>
      </div>
    </div>
  );
}

export default ArtistCard;