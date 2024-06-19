import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import ArtistCard1 from '../components/ArtistCard1';
import SearchBar from '../components/SearchBar';
import './RecruitmentsPage.css';

import eventImage1 from '../assets/event-1.png';
import eventImage2 from '../assets/event-2.gif';
import eventImage3 from '../assets/event-3.png';
import eventImage4 from '../assets/event-4.jpg';
import eventImage5 from '../assets/event-5.gif';
import artistImage1 from '../assets/artist-1.jpg';
import artistImage2 from '../assets/artist-2.jpg';
import artistImage3 from '../assets/artist-3.jpg';
import artistImage4 from '../assets/artist-4.jpg';
import artistImage5 from '../assets/artist-5.jpg';

const RecruitmentsPage = () => {
  return (
    <div className="recruitments-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>Recruitments Open!</h2>
        <div className="recruitments-grid">
          <EventCard image={eventImage1} title="Shhh! Internal Recruit" subtitle="The Dead Club *_*" />
          <EventCard image={eventImage2} title="ADS Recruitment :))" subtitle="Alexa Developers" />
          <EventCard image={eventImage3} title="App Constructors ^_^" subtitle="Cherry+ Network" />
          <EventCard image={eventImage4} title="Smth Cool? XD" subtitle="Aarush" />
          <EventCard image={eventImage5} title="Cool Shit." subtitle="Dope" />
        </div>
        {/* <h2>Upcoming Hackathons</h2> */}
        <div className="recruitments-grid">
          <ArtistCard1 image={artistImage1} title="Another Recruitment" subtitle="Dunno" />
          <ArtistCard1 image={artistImage2} title="Another Recruitment 2.0" subtitle="NTL?" />
          <ArtistCard1 image={artistImage3} title="Another Recruitment 3.0" subtitle="Honestly No Idea" />
          <ArtistCard1 image={artistImage4} title="Another Recruitment 4.0" subtitle="..." />
          <ArtistCard1 image={artistImage5} title="Another Recruitment 5.0" subtitle="What we even doing?!" />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentsPage;
