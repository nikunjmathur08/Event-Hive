import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';
import './EventsPage.css';
//fetch
import useFetch from '../hooks/usefetch';


const EventsPage = () => {
  
  const { data: ongoing, loading, error } = useFetch('/event/category/Events/ongoing');
  const {data: upcoming ,loading: upcomingLoading, error: upcomingError} = useFetch('/event/category/Events/upcoming');

  if (loading, upcomingLoading ) return <p>Loading...</p>;
  if (error, upcomingError ) return <p>Error loading events...</p>;

  return (
    <div className="events-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>ongoing events</h2>
        <div className="events-grid">
          {ongoing.map(eventData => (
            <EventCard
              key={eventData.id}
              eventData={eventData}
            />
          ))}
        </div>
        <h2>upcoming events</h2>
        <div className="events-grid">
        {upcoming.map(artistData => (
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

export default EventsPage;


// import eventImage1 from '../assets/event-1.png';
// import eventImage2 from '../assets/event-2.gif';
// import eventImage3 from '../assets/event-3.png';
// import eventImage4 from '../assets/event-4.jpg';
// import artistImage1 from '../assets/artist-1.jpg';
// import artistImage2 from '../assets/artist-2.jpg';
// import artistImage3 from '../assets/artist-3.jpg';
// import artistImage4 from '../assets/artist-4.jpg';
// import artistImage5 from '../assets/artist-5.jpg';

// const events =  [
//   {
//     id: '1',
//     image: eventImage1,
//     name: 'jazz up the taste',
//     clubName: 'alexa developers',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '2',
//     image: eventImage2,
//     name: 'alexaverse',
//     clubName: 'alexa developers',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '3',
//     image: eventImage3,
//     name: 'app archives',
//     clubName: 'cherry+ network',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '4',
//     image: eventImage4,
//     name: 'roadshow',
//     clubName: 'aarush',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   }
// ]

// const artist = [
//   {
//     id: '5',
//     image: artistImage1,
//     name: 'quantum computing',
//     clubName: 'ft. glitching coffée mAcHine',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '6',
//     image: artistImage2,
//     name: 'vr symposium',
//     clubName: 'with vr based in space ooo',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '7',
//     image: artistImage3,
//     name: 'ai ethics conference',
//     clubName: 'voice assistant critiquing itself',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '8',
//     image: artistImage4,
//     name: 'robotics expo',
//     clubName: 'ft. dancing vacuum cleaner',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },

//   {
//     id: '9',
//     image: artistImage5,
//     name: 'iot showcase',
//     clubName: 'with a crazy grocery ordering fridge',
//     venue: 'abc hall',
//     date: '12/12/24',
//     timings: '8 to 2',
//     description: 'sfbuydsvhdfs'
//   },
// ]
