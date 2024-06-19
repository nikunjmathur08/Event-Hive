import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSignUp from './components/SignInSignUp';
// import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
// import ProfilePage from './pages/ProfilePage';
// import SettingsPage from './pages/SettingsPage';
import HackathonsPage from './pages/HackathonsPage';
// import RecruitmentsPage from './pages/RecruitmentsPage';
// import EventDetailsPage from './pages/EventDetailsPage';
// import ClubDetailsPage from './pages/ClubDetailsPage';
// import ClubsPage from './pages/ClubsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        {/* <Route path="/home" component={HomePage} /> */}
        <Route path="/events" element={<EventsPage />} />
        {/* <Route path="/profile" component={ProfilePage} /> */}
        {/* <Route path="/settings" component={SettingsPage} /> */}
        <Route path="/hackathons" component={HackathonsPage} />
        {/* <Route path="/recruitments" component={RecruitmentsPage} /> */}
        {/* <Route path="/event-details" component={EventDetailsPage} /> */}
        {/* <Route path="/club-details" component={ClubDetailsPage} /> */}
        {/* <Route path="/clubs" component={ClubsPage} /> */} */
      </Routes>
    </Router>
  );
}

export default App;
