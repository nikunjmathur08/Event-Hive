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

// const EventCard = ({ image, title, subtitle }) => {
//   return (
//     <div className="event-card">
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// };

export default EventCard;
