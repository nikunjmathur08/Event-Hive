import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

function EventCard({ eventData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${eventData.id}`, { state: { event: eventData } });
  };

  return (
    <div className='event-card' onClick={handleClick}>
      <img src={eventData.image} alt={eventData.name} className='event-card-image'/>
      <div className='event-card-content'>
        <h3>{eventData.name}</h3>
        <p>{eventData.clubName}</p>
      </div>
    </div>
  );
}

export default EventCard;