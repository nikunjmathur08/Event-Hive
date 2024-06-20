import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';
import './EventsPage.css';

import eventImage1 from '../assets/event-1.png';
import eventImage2 from '../assets/event-2.gif';
import eventImage3 from '../assets/event-3.png';
import eventImage4 from '../assets/event-4.jpg';
import artistImage1 from '../assets/artist-1.jpg';
import artistImage2 from '../assets/artist-2.jpg';
import artistImage3 from '../assets/artist-3.jpg';
import artistImage4 from '../assets/artist-4.jpg';
import artistImage5 from '../assets/artist-5.jpg';

const events =  [
  {
    id: '1',
    image: eventImage1,
    name: 'jazz up the taste',
    clubName: 'alexa developers'
  },

  {
    id: '2',
    image: eventImage2,
    name: 'alexaverse',
    clubName: 'alexa developers'
  },

  {
    id: '3',
    image: eventImage3,
    name: 'app archives',
    clubName: 'cherry+ network'
  },

  {
    id: '4',
    image: eventImage4,
    name: 'roadshow',
    clubName: 'aarush'
  }
]

const artist = [
  {
    id: '5',
    image: artistImage1,
    name: 'quantum computing',
    clubName: 'ft. glitching coffée mAcHine'
  },

  {
    id: '6',
    image: artistImage2,
    name: 'vr symposium',
    clubName: 'with vr based in space ooo'
  },

  {
    id: '7',
    image: artistImage3,
    name: 'ai ethics conference',
    clubName: 'voice assistant critiquing itself'
  },

  {
    id: '8',
    image: artistImage4,
    name: 'robotics expo',
    clubName: 'ft. dancing vacuum cleaner'
  },

  {
    id: '9',
    image: artistImage5,
    name: 'iot showcase',
    clubName: 'with a crazy grocery ordering fridge'
  },
]

const EventsPage = () => {
  return (
    <div className="events-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>ongoing events</h2>
        <div className="events-grid">
          {events.map(eventData => (
            <EventCard
              key={eventData.id}
              eventData={eventData}
            />
          ))}
        </div>
        <h2>upcoming events</h2>
        <div className="events-grid">
        {artist.map(artist => (
            <ArtistCard
              key={artist.id}
              image={artist.image}
              name={artist.name}
              clubName={artist.clubName}
              eventId={artist.id}
            />
          ))}
          {/* <ArtistCard image={artistImage1} title="quantum computing conv." subtitle="ft. glitching coffée mAcHine" />
          <ArtistCard image={artistImage2} title="vr symposium" subtitle="with vr based in space ooo" />
          <ArtistCard image={artistImage3} title="ai ethics conference" subtitle="voice assistant critiquing itself" />
          <ArtistCard image={artistImage4} title="robotics expo" subtitle="ft. dancing vacuum cleaner" />
          <ArtistCard image={artistImage5} title="iot showcase" subtitle="with a crazy grocery ordering fridge" /> */}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
