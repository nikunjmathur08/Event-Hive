import React from 'react';
import Sidebar from '../components/SideBar';
import profileImage from '../assets/snoopy.jpeg'
import './SettingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <Sidebar />
      <div className="settings-content">
        <h2>edit profile</h2>
        <form className="settings-form">
          <div className="profile-picture">
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div>
              <h3>snoopy :D</h3>
              <button className="change-photo">change profile photo</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">anme</label>
            <input type="text" id="name" placeholder="full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="email@domain.com" />
          </div>
          <button type="submit" className="save-button">save changes</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
