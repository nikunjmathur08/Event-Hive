import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';
import './HackathonsPage.css';

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
    <div className="hackathons-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>Ongoing Hackathons</h2>
        <div className="hackathons-grid">
          <EventCard image={eventImage1} title="Shhh! Internal Hack" subtitle="Alexa Developers" />
          <EventCard image={eventImage2} title="ABCD Hack :))" subtitle="Alexa Developers" />
          <EventCard image={eventImage3} title="App Destructors ^_^" subtitle="Cherry+ Network" />
          <EventCard image={eventImage4} title="RoadPlow XD" subtitle="Aarush" />
        </div>
        <h2>Upcoming Hackathons</h2>
        <div className="hackathons-grid">
          <ArtistCard image={artistImage1} title="Just Another Hack" subtitle="Dunno" />
          <ArtistCard image={artistImage2} title="Just Another Hack 2.0" subtitle="NTL?" />
          <ArtistCard image={artistImage3} title="Just Another Hack 3.0" subtitle="Honestly No Idea" />
          <ArtistCard image={artistImage4} title="Just Another Hack 4.0" subtitle="..." />
          <ArtistCard image={artistImage5} title="Just Another Hack 5.0" subtitle="What we even doing?!" />
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage;
