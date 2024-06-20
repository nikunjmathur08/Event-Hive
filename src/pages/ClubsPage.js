import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import './ClubsPage.css';

import clubImage1 from '../assets/club-1.png';
import clubImage2 from '../assets/club-2.jpg';
import clubImage3 from '../assets/club-3.jpg';
import clubImage4 from '../assets/club-4.jpg';
import clubImage5 from '../assets/club-5.png';
import clubImage6 from '../assets/club-6.jpg';
import clubImage7 from '../assets/club-7.jpg';
import clubImage8 from '../assets/club-8.jpg';
import clubImage9 from '../assets/club-9.jpg';
import clubImage10 from '../assets/club-10.jpg';

const clubs =  [
  {
    id: '1',
    image: clubImage1,
    name: 'tech titans',
    clubName: 'pioneering the future with cutting-edge technology and innovation'
  },

  {
    id: '2',
    image: clubImage2,
    name: 'code crusaders',
    clubName: 'empowering coders to conquer challenges and build remarkable software'
  },

  {
    id: '3',
    image: clubImage3,
    name: 'digital dreamers',
    clubName: 'turning imaginative digital ideas into reality'
  },

  {
    id: '4',
    image: clubImage4,
    name: 'pixel pioneers',
    clubName: 'charting new territories in the world of digital design and development'
  },

  {
    id: '5',
    image: clubImage5,
    name: 'cool shit.',
    clubName: "we create dope tech... yeah that's right like mkbhd"
  },

  {
    id: '6',
    image: clubImage6,
    name: 'nano nerds',
    clubName: 'delving into the microscopic world of nanotechnology'
  },

  {
    id: '7',
    image: clubImage7,
    name: 'ai avengers',
    clubName: 'harnessing the power of artificial intelligence for good'
  },

  {
    id: '8',
    image: clubImage8,
    name: 'future forge',
    clubName: "shaping tomorrow's technology today through collaborative innovation"
  },

  {
    id: '9',
    image: clubImage9,
    name: 'techno tribe',
    clubName: 'community of tech-savvy individuals pushing the boundaries of technology'
  },

  {
    id: '10',
    image: clubImage10,
    name: 'gadget gurus',
    clubName: 'mastering the art of innovative gadgetry and smart devices'
  }
]

const ClubsPage = () => {
  return (
    <div className="clubs-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>clubs.</h2>
        <div className="clubs-grid">
        {clubs.map(clubData => (
            <EventCard
              key={clubData.id}
              eventData={clubData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubsPage;
