import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClubCard.css';
import clubImage1 from '../assets/club-1.png';

function ClubCard({ clubData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/clubs/${clubData.id}`, { state: { club: clubData } });
  };

  return (
    <div className='club-card' onClick={handleClick}>
      <img src={clubImage1} alt={clubData.name} className='club-card-image'/>
      <div className='club-card-content'>
        <h3>{clubData.name}</h3>
        <p>{clubData.desc}</p>
      </div>
    </div>
  );
}

export default ClubCard;