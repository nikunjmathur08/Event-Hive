import React, { useState } from 'react';
import './CreateEvents.css';

const CreateEvents = () => {
  const [eventDetails, setEventDetails] = useState({
    eventTitle: '',
    clubName: '',
    eventVenue: '',
    startTime: '',
    endTime: '',
    startDate: '',
    endDate: '',
    eventImage: '',
    eventDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Event Details:', eventDetails);
  };

  return (
    <div className="container">
      <h1>create event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>event title</label>
          <input type="text" name="eventTitle" value={eventDetails.eventTitle} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>club name</label>
          <input type="text" name="clubName" value={eventDetails.clubName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>event venue</label>
          <input type="text" name="eventVenue" value={eventDetails.eventVenue} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>start time</label>
          <input type="time" name="startTime" value={eventDetails.startTime} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>end time</label>
          <input type="time" name="endTime" value={eventDetails.endTime} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>start date</label>
          <input type="date" name="startDate" value={eventDetails.startDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>end date</label>
          <input type="date" name="endDate" value={eventDetails.endDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>event image</label>
          <input type="file" name="eventImage" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>event description</label>
          <textarea name="eventDescription" value={eventDetails.eventDescription} onChange={handleChange}></textarea>
        </div>
        <center><button type="submit">create event</button></center>
      </form>
    </div>
  );
};

export default CreateEvents;