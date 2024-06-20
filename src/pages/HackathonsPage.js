import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';
import './HackathonsPage.css';

import hackImage1 from '../assets/hack-1.jpg';
import hackImage2 from '../assets/hack-2.jpg';
import hackImage3 from '../assets/hack-3.jpeg';
import hackImage4 from '../assets/hack-4.jpg';
import hackImage5 from '../assets/hack-5.jpg';
import hackImage6 from '../assets/hack-6.png';
import hackImage7 from '../assets/hack-7.jpg';
import hackImage8 from '../assets/hack-8.jpeg';
import hackImage9 from '../assets/hack-9.jpg';

const hackathons =  [
  {
    id: '1',
    image: hackImage1,
    name: 'shhh! internal hack',
    clubName: 'alexa developers'
  },

  {
    id: '2',
    image: hackImage2,
    name: 'abcd hack :))',
    clubName: 'alexa developers'
  },

  {
    id: '3',
    image: hackImage3,
    name: 'app destructors ^_^',
    clubName: 'cherry+ network'
  },

  {
    id: '4',
    image: hackImage4,
    name: 'roadplow XD',
    clubName: 'aarush'
  }
]

const artist = [
  {
    id: '5',
    image: hackImage5,
    name: 'quantum computing',
    clubName: 'ft. glitching coffée mAcHine'
  },

  {
    id: '6',
    image: hackImage6,
    name: 'just another hack',
    clubName: 'dunno'
  },

  {
    id: '7',
    image: hackImage7,
    name: 'just another hack 2.0',
    clubName: 'ntl?'
  },

  {
    id: '8',
    image: hackImage8,
    name: 'just another hack 3.0',
    clubName: 'honestly no idea'
  },

  {
    id: '9',
    image: hackImage9,
    name: 'just another hack 4.0',
    clubName: '...'
  },

  {
    id: '10',
    image: hackImage9,
    name: 'just another hack 5.0',
    clubName: 'what we even doing?!'
  },
]

const HackathonsPage = () => {
  return (
    <div className="hackathons-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>ongoing hackathons</h2>
        <div className="hackathons-grid">
        {hackathons.map(hackData => (
            <EventCard
              key={hackData.id}
              eventData={hackData}
            />
          ))}
        </div>
        <h2>upcoming hackathons</h2>
        <div className="hackathons-grid">
        {artist.map(artistData => (
            <ArtistCard
              key={artistData.id}
              artistData={artistData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage;
