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

const HackathonsPage = () => {
  return (
    <div className="events-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>Ongoing Events</h2>
        <div className="events-grid">
          <EventCard image={eventImage1} title="Jazz Up The Taste" subtitle="Alexa Developers" />
          <EventCard image={eventImage2} title="AlexaVerse" subtitle="Alexa Developers" />
          <EventCard image={eventImage3} title="App Archives" subtitle="Cherry+ Network" />
          <EventCard image={eventImage4} title="RoadShow" subtitle="Aarush" />
        </div>
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          <ArtistCard image={artistImage1} title="Nikhil D Souza" subtitle="R&B" />
          <ArtistCard image={artistImage2} title="Marshmello" subtitle="Pop" />
          <ArtistCard image={artistImage3} title="Marshmello" subtitle="Pop" />
          <ArtistCard image={artistImage4} title="Swae Lee" subtitle="Moodie" />
          <ArtistCard image={artistImage5} title="The Weeknd" subtitle="Pop" />
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage;
