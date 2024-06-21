import React from 'react';
import { useLocation } from 'react-router-dom';
import './EventDetailsPage.css';
//fetch
import useFetch from '../hooks/usefetch';
import artistImage3 from '../assets/artist-3.jpg';
const EventDetailsPage = () => {
  const location = useLocation();
  const { event } = location.state;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const { data: events, loading, error } = useFetch(`/event/${event._id}`);
  if (loading) return <p>Loading...</p>;
  if (error || !event) {
    return <p>No event data found</p>;
  }
  return (
    <div className="event-details-page">
      <h1>event details</h1>
      <div className="event-details-card">
        <img src={artistImage3} alt={event.name} />
        <div className="event-details-info">
          <h2>{event.name}</h2>
          <p>organized by: {event.club}</p>
          <p>event venue: {event.venue}</p>
          <p>event description: {event.desc}</p>
          <p>date: {formatDate(event.startDate)} to {formatDate(event.endDate)}</p>
          <p>timings: {event.time}</p>
          <a href={event.registrationLink}>
          <button className="register-button">Register</button></a>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
