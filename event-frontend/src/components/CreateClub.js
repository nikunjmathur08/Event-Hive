import React, { useState } from 'react';
import './CreateClub.css';

const CreateClub = () => {
  const [clubDetails, setClubDetails] = useState({
    clubTitle: '',
    clubImage: '',
    clubDescription: '',
    clubEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubDetails({ ...clubDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Event Details:', clubDetails);
  };

  return (
    <div className="container">
      <h1>create club</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>club name</label>
          <input type="text" name="eventTitle" value={clubDetails.clubTitle} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>club email</label>
          <input type="text" name="eventEmail" value={clubDetails.clubEmail} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>club image</label>
          <input type="file" name="eventImage" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>club description</label>
          <textarea name="eventDescription" value={clubDetails.clubDescription} onChange={handleChange}></textarea>
        </div>
        <center><button type="submit">create club</button></center>
      </form>
    </div>
  );
};

export default CreateClub;