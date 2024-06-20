import React from 'react';
import { useLocation } from 'react-router-dom';
import './EventDetailsPage.css';

const EventDetailsPage = () => {
  const location = useLocation();
  const { event } = location.state;

  return (
    <div className="event-details-page">
      <h1>event details</h1>
      <div className="event-details-card">
        <img src={event.image} alt={event.name} />
        <div className="event-details-info">
          <h2>{event.name}</h2>
          <p>organized by: {event.clubName}</p>
          <p>event venue: {event.venue}</p>
          <p>event description: {event.description}</p>
          <p>date: {event.date}</p>
          <p>timings: {event.timings}</p>
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
