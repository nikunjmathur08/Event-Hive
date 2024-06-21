import React from 'react';
import SideBar from '../components/SideBar';
import './ProfilePage.css';
import profilePic from '../assets/snoopy.jpeg'

const ProfilePage = () => {
  const user = {
    name: 'User Name',
    image: profilePic, // Replace with the actual image URL
  };

  return (
    <div className='profile-page'>
      <SideBar />
      <div className="mains">
        <div className="profile-card">
          <img src={user.image} alt={user.name} className="profile-image" />
          <h2 className="profile-name">{user.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;