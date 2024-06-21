import React, { useState } from 'react';
import HomeEventCard from '../components/HomeEventCard';
import EventFilter from '../components/EventFilter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './HomePage.css';

import eventImage1 from '../assets/event-1.png';
import eventImage2 from '../assets/event-2.gif';
import eventImage3 from '../assets/event-3.png';
import eventImage4 from '../assets/event-4.jpg';
import artistImage1 from '../assets/artist-1.jpg';
import artistImage2 from '../assets/artist-2.jpg';

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 0 0 10px 0;
`;

const Span = styled.h2`
  font-size: 30px;
  color: #7848F4;
  margin: 0;
`;

const Span1 = styled.h2`
  font-size: 30px;
  color: #000000;
  margin: 0;
`;

const events =  [
    {
      id: '1',
      image: eventImage1,
      name: 'jazz up the taste',
      clubName: 'alexa developers',
      venue: 'abc hall',
      date: '12/12/24',
      timings: '8 to 2',
      description: 'sfbuydsvhdfs'
    },
  
    {
      id: '2',
      image: eventImage2,
      name: 'alexaverse',
      clubName: 'alexa developers',
      venue: 'abc hall',
      date: '12/12/24',
      timings: '8 to 2',
      description: 'sfbuydsvhdfs'
    },
  
    {
      id: '3',
      image: eventImage3,
      name: 'app archives',
      clubName: 'cherry+ network',
      venue: 'abc hall',
      date: '12/12/24',
      timings: '8 to 2',
      description: 'sfbuydsvhdfs'
    },
  
    {
      id: '4',
      image: eventImage4,
      name: 'roadshow',
      clubName: 'aarush',
      venue: 'abc hall',
      date: '12/12/24',
      timings: '8 to 2',
      description: 'sfbuydsvhdfs'
    },

    {
      id: '5',
      image: artistImage1,
      name: 'quantum computing',
      clubName: 'ft. glitching coffée mAcHine',
      venue: 'abc hall',
      date: '12/12/24',
      timings: '8 to 2',
      description: 'sfbuydsvhdfs'
    },

    {
      id: '6',
      image: artistImage2,
      name: 'vr symposium',
      clubName: 'with vr based in space ooo',
      venue: 'abc hall',
      date: '12/12/24',
      timings: '8 to 2',
      description: 'sfbuydsvhdfs'
    }
  ]

const Home = () => {

  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const filtered = events.filter(event => event[name].toLowerCase().includes(value.toLowerCase()));
    setFilteredEvents(filtered);
  };

  return (
    <div className="home">
      <header>
        <Heading><Span1>evin </Span1><Span> co</Span></Heading>
        <nav>
          <Link to="/signin" className="sign-in-link">login</Link>
          <Link to="/signin" className="create-event-link">sign up</Link>
        </nav>
      </header>
      <div className='banner-container'>
        <section className="banner">
          <h2>What's up in SRM!!!</h2>
        </section>
      </div>
      <EventFilter handleFilterChange={handleFilterChange} />
      <section className="events-section">
        <h2>upcoming events</h2>
        <div className="events-grid">
          {filteredEvents.map((eventData) => (
            <HomeEventCard
              key={eventData.id}
              eventData={eventData}
            />
          ))}
        </div>
        <center>
          <button className="load-more">Load more...</button>
        </center>
      </section>
      <Footer />
    </div>
  );
};

export default Home;