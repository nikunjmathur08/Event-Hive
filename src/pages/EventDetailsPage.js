import React from 'react';
import { useLocation } from 'react-router-dom';
import './EventDetailsPage.css';

const EventDetailsPage = () => {
  const location = useLocation();
  const { event } = location.state || { event: {} };

  if (!event) {
    return <div>No event details available.</div>;
  }

  return (
    <div className="event-details-page">
      <h1>EVENT DETAILS</h1>
      <div className="event-details-container">
        <img src={event.image} alt={event.name} className="event-image" />
        <div className="event-info">
          <h2>{event.name}</h2>
          <p><strong>Organized by:</strong> {event.clubName}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Timings:</strong> {event.timings}</p>
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
