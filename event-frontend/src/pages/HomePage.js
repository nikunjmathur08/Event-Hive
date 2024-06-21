import React, { useState, useEffect } from 'react';
import HomeEventCard from '../components/HomeEventCard';
import EventFilter from '../components/EventFilter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './HomePage.css';
import useFetch from '../hooks/usefetch'; // Importing the fetch hook

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

const Home = () => {
  // Fetch events data from backend
  const { data: events, loading, error } = useFetch('/event');
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Update filtered events when events data is fetched
  useEffect(() => {
    if (events) {
      setFilteredEvents(events);
    }
  }, [events]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const filtered = events.filter(event => event[name].toLowerCase().includes(value.toLowerCase()));
    setFilteredEvents(filtered);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading events... {error} </p>;

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