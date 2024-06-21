import React from 'react';
import './EventFilter.css';

const EventFilter = () => {
  return (
    <div className="event-filter">
      <div className="filter-group">
        <label htmlFor="event-type">Looking for</label>
        <select id="event-type" className="filter-select">
          <option>choose event type</option>
          <option>Events</option>
          <option>Hackathons</option>
          <option>Recruitments</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <select id="location" className="filter-select">
          <option>choose location</option>
          <option>Mini Hall</option>
          <option>Tech Park</option>
          <option>TP Ganesan</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="date-time">When</label>
        <select id="date-time" className="filter-select">
          <option>choose date and time</option>
          <option>12/12/24</option>
          <option>12/12/24</option>
          <option>12/12/24</option>
        </select>
      </div>
      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </div>
  );
};

export default EventFilter;
