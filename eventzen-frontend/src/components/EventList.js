import React from 'react';
import { Link } from 'react-router-dom';
import './EventList.css'; // Ensure CSS file is imported

const EventList = ({ onSelectEvent }) => {
  const events = [
    { id: 1, name: 'Conference', details: '🏢 **Deloitte Conference 2025** in **Mumbai on May 10, 2025**, brings together top industry leaders for insightful discussions, networking, and expert panels. Gain valuable insights into emerging business trends and strategies for success. **Book tickets from the dashboard** to secure your spot!', image: '/images/conference.png' },
    { id: 2, name: 'Wedding', details: '💍 **Celebrity Wedding Extravaganza** is set to take place in **Bengaluru on July 20, 2025**. Witness a grand celebration filled with glamour, luxury, and star-studded guests. Enjoy an unforgettable evening of music, dance, and opulence. **Book tickets from the dashboard** to be part of this spectacular event!', image: '/images/wedding.png' },
    { id: 3, name: 'Concert', details: '🎤 **Coldplay Concert 2025** is happening in **Delhi on June 15, 2025**. Get ready for an electrifying night with breathtaking performances, stunning visuals, and Coldplay’s biggest hits. Experience the magic of live music in an unforgettable atmosphere. **Book tickets from the dashboard** to secure your spot!', image: '/images/concert.png' }
  ];

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="event-item">
            <img src={event.image} alt={event.name} className="event-image" />
            <span className="event-name">{event.name}</span>
            <Link 
              to="/event-details" 
              state={{ event }} 
              className="event-button"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;







