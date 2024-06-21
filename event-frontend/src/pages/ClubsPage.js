import React from 'react';
import SideBar from '../components/SideBar';
import ClubCard from '../components/ClubCard';
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
import { useNavigate } from 'react-router-dom';

const clubs =  [
  {
    id: '1',
    image: clubImage1,
    name: 'tech titans',
    clubName: 'pioneering the future with cutting-edge technology and innovation',
    description: "Where ideas are hammered into reality, byte by byte. Join us as we turn coffee into code and debug like it's an Olympic sport. ~To err is human, to debug is divine. - Anon."
  },

  {
    id: '2',
    image: clubImage2,
    name: 'code crusaders',
    clubName: 'empowering coders to conquer challenges and build remarkable software',
    description: "Conjure up some magic with us in the world of cyber spells. We brew code potions, wave digital wands, and create enchanted programs. ~Don't worry, the only spell you'll need is sudo make me a sandwich."
  },

  {
    id: '3',
    image: clubImage3,
    name: 'digital dreamers',
    clubName: 'turning imaginative digital ideas into reality',
    description: "Transform data into gold with the power of artificial intelligence. We're the modern-day alchemists, predicting the future one algorithm at a time. ~Talk is cheap. Show me the code. - Linus Torvalds"
  },

  {
    id: '4',
    image: clubImage4,
    name: 'pixel pioneers',
    clubName: 'charting new territories in the world of digital design and development',
    description: "Enter as a coder, leave as a debugging ninja. Sharpen your skills in the art of finding and squashing bugs, because every great code needs a great debugger. Remember, ~There are two ways to write error-free programs; only the third one works."
  },

  {
    id: '5',
    image: clubImage5,
    name: 'cool shit.',
    clubName: "we create dope tech... yeah that's right like mkbhd",
    description: "Join our quest for the holy grail of coding perfection. We battle bugs, conquer challenges, and save the day with elegant solutions. ~Stay Hungry. Stay Foolish. - Steve Jobs"
  },

  {
    id: '6',
    image: clubImage6,
    name: 'nano nerds',
    clubName: 'delving into the microscopic world of nanotechnology',
    description: "Dive into the quantum realm where the rules of traditional coding don't apply. ~Here, Schrödinger's cat writes your code - it's both perfect and buggy until you run it. Join us for some spooky action at a distance."
  },

  {
    id: '7',
    image: clubImage7,
    name: 'ai avengers',
    clubName: 'harnessing the power of artificial intelligence for good',
    description: "From ethical hacking to cybersecurity, join us as we explore the darker corners of the internet - for good! Remember, ~There are only 10 types of people in the world: those who understand binary and those who don’t."
  },

  {
    id: '8',
    image: clubImage8,
    name: 'future forge',
    clubName: "shaping tomorrow's technology today through collaborative innovation",
    description: "Build the future with us, one robot at a time. We code, construct, and conquer challenges with our mechanical friends. ~To invent, you need a good imagination and a pile of junk. - Thomas Edison."
  },

  {
    id: '9',
    image: clubImage9,
    name: 'techno tribe',
    clubName: 'community of tech-savvy individuals pushing the boundaries of technology',
    description: "Step into another world with us. Create immersive experiences that blur the line between the virtual and the real. ~Don't forget, in VR, no one can hear you scream - except when your code doesn't compile."
  },

  {
    id: '10',
    image: clubImage10,
    name: 'gadget gurus',
    clubName: 'mastering the art of innovative gadgetry and smart devices',
    description: "Sail the high seas of blockchain technology with us. We navigate through decentralized waters, hunting for treasure in the form of secure, transparent transactions. ~Blockchain is the tech. Bitcoin is merely the first mainstream manifestation of its potential. - Marc Kenigsberg."
  }
]

const ClubsPage = () => {
  const navigate = useNavigate();

  const handleClubClick = (club) => {
    navigate(`/clubs/${club.id}`, { state: { club } });
  }

  return (
    <div className="clubs-page">
      <SideBar />
      <div className="main-content">
        <SearchBar />
        <h2>clubs.</h2>
        <div className="clubs-grid">
        {clubs.map(clubData => (
            <ClubCard
              key={clubData.id}
              clubData={clubData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubsPage;
