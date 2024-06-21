import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './ClubDetailsPage.css';

const ClubDetailsPage = () => {
  const location = useLocation();
  const { club } = location.state;

  if (!club) {
    return <p>No club data found</p>;
  }

  return (
    <div className="club-details-page">
      <div className="club-details-container">
        <div className="club-details-text">
          <h1>{club.name}</h1>
          <h3>club desc:</h3>
          <p>{club.description}</p>
          <div className="club-social-links">
            <FontAwesomeIcon icon={faLink} className="sidebar-icon" />link to socials
            <br/>
            <FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" />subscribe to the club to get email notifications about events and more!
            <div className="subscription-form">
              <input type="email" placeholder="enter email to receive notifications" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div className="club-details-image">
          <img src={club.image} alt={club.name} />
        </div>
      </div>
    </div>
  );
};

export default ClubDetailsPage;
