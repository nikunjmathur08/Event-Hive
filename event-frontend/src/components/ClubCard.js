import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClubCard.css';

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

function ClubCard({ clubData }) {
  const navigate = useNavigate();
  const randomImage = getRandomImage(hackImages);

  const handleClick = () => {
    navigate(`/clubs/${clubData.id}`, { state: { club: clubData } });
  };

  return (
    <div className='club-card' onClick={handleClick}>
      <img src={randomImage} alt={clubData.name} className='club-card-image'/>
      <div className='club-card-content'>
        <h3>{clubData.name}</h3>
        <p>{clubData.desc}</p>
      </div>
    </div>
  );
}

export default ClubCard;