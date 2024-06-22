import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

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

function EventCard({ eventData }) {
  const navigate = useNavigate();
  const randomImage = getRandomImage(hackImages);

  const handleClick = () => {
    navigate(`/events/${eventData.id}`, { state: { event: eventData } });
  };

  return (
    <div className='event-card' onClick={handleClick}>
      <img src={randomImage} alt={eventData.name} className='event-card-image'/>
      <div className='event-card-content'>
        <h3>{eventData.name}</h3>
        <p>{eventData.club}</p>
      </div>
    </div>
  );
}

export default EventCard;