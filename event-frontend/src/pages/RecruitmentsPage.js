import React from 'react';
import SideBar from '../components/SideBar';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import './RecruitmentsPage.css';

//fetch
import useFetch from '../usefetch';

const RecruitmentsPage = () => {

  const { data: recruitments, loading, error } = useFetch('/event/category/Recruitment');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading recruitments...</p>;

  return (
    <div className="recruitments-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>recruitments open!</h2>
        <div className="recruitments-grid">
        {recruitments.map(recruitmentData => (
            <EventCard
              key={recruitmentData.id}
              eventData={recruitmentData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentsPage;


//import recImage1 from '../assets/rec-1.jpg';
// import recImage2 from '../assets/rec-2.jpg';
// import recImage3 from '../assets/rec-3.jpg';
// import recImage4 from '../assets/rec-4.jpg';
// import recImage5 from '../assets/rec-5.gif';
// import recImage6 from '../assets/rec-6.jpg';
// import recImage7 from '../assets/rec-7.png';
// import recImage8 from '../assets/rec-8.png';
// import recImage9 from '../assets/rec-9.jpg';
// import recImage10 from '../assets/rec-10.png';

// const recruitments =  [
//   {
//     id: '1',
//     image: recImage1,
//     name: 'shhh! internal recruit',
//     clubName: 'the dead club *_*'
//   },

//   {
//     id: '2',
//     image: recImage2,
//     name: 'ads recruitment :))',
//     clubName: 'alexa developers'
//   },

//   {
//     id: '3',
//     image: recImage3,
//     name: 'app constructors ^_^',
//     clubName: 'cherry+ network'
//   },

//   {
//     id: '4',
//     image: recImage4,
//     name: 'smth cool? xd',
//     clubName: 'aarush'
//   },

//   {
//     id: '5',
//     image: recImage5,
//     name: 'cool shit.',
//     clubName: 'dope'
//   },

//   {
//     id: '6',
//     image: recImage6,
//     name: 'another recruitment',
//     clubName: 'dunno'
//   },

//   {
//     id: '7',
//     image: recImage7,
//     name: 'another recruitment 2.0',
//     clubName: 'ntl?'
//   },

//   {
//     id: '8',
//     image: recImage8,
//     name: 'another recruitment 3.0',
//     clubName: 'honestly no idea'
//   },

//   {
//     id: '9',
//     image: recImage9,
//     name: 'another recruitment 4.0',
//     clubName: '...'
//   },

//   {
//     id: '10',
//     image: recImage10,
//     name: 'another recruitment 5.0',
//     clubName: 'what we even doing?!'
//   }
// ]
