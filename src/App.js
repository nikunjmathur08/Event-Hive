import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSignUp from './components/SignInSignUp';
import CreateEvents from './components/CreateEvents';
import CreateClubs from './components/CreateClub';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import HackathonsPage from './pages/HackathonsPage';
import RecruitmentsPage from './pages/RecruitmentsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import ClubDetailsPage from './pages/ClubDetailsPage';
import ClubsPage from './pages/ClubsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/create-events" element={<CreateEvents />} />
        <Route path="/create-club" element={<CreateClubs />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/recruitments" element={<RecruitmentsPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/clubs/:id" element={<ClubDetailsPage />} />
        <Route path="/clubs" element={<ClubsPage />} /> */
      </Routes>
    </Router>
  );
}

export default App;
