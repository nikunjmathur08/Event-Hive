import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';
import eventImage3 from '../assets/event-3.png';

function EventCard({ eventData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${eventData._id}`, { state: { event: eventData } });
  };

  return (
    <div className='event-card' onClick={handleClick}>
      <img src={eventImage3} alt={eventData.name} className='event-card-image'/>
      <div className='event-card-content'>
        <h3>{eventData.name}</h3>
        <p>{eventData.club}</p>
        <p>{eventData.date}</p>
        <p>{eventData.time}</p>
        <p>{eventData.venue}</p>
      </div>
    </div>
  );
}

export default EventCard;

// import React from 'react';
// import './HomeEventCard.css';

// const EventCard = ({ image, title, date, location }) => {
//   return (
//     <div className="event-card">
//       <img src={image} alt={title} className="event-image" />
//       <div className="event-details">
//         <h3>{title}</h3>
//         <p>{date}</p>
//         <p>{location}</p>
//       </div>
//     </div>
//   );
// };

// export default EventCard;