import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faLaptopCode, faBriefcase, faUsers, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const Heading = styled.h1`
  padding: 1px;
  font-size: 15px;
`

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li activeClassName="active">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
            <Heading>
            Home
            </Heading>
          </NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/events">
            <FontAwesomeIcon icon={faCalendarAlt} className="sidebar-icon" />
            <Heading>
            Events
            </Heading>
          </NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/hackathons">
            <FontAwesomeIcon icon={faLaptopCode} className="sidebar-icon" />
            <Heading>
            Hackathons
            </Heading>
          </NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/recruitments">
            <FontAwesomeIcon icon={faBriefcase} className="sidebar-icon" />
            <Heading>
            Recruitments
            </Heading>
          </NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/clubs">
            <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
            <Heading>
            Clubs
            </Heading>
          </NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            <Heading>
            Profile
            </Heading>
          </NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
            <Heading>
            Settings
            </Heading>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
