import React, { useState } from "react";
import "./BookEvents.css";

const BookEvents = () => {
  const [events] = useState([
    { id: 1, name: "Deloitte Conference 2025", date: "10-05-2025", location: "Mumbai", image: "/images/Deloitte Conference.png" },
    { id: 2, name: "Coldplay Concert", date: "15-06-2025", location: "Delhi", image: "/images/Coldplay Concert.png" },
    { id: 3, name: "Celebrity Wedding", date: "20-07-2025", location: "Bengaluru", image: "/images/Celebrity Wedding.png" }
  ]);

  const [bookedEvents, setBookedEvents] = useState([]);

  const handleBookEvent = (event) => {
    if (!bookedEvents.some(e => e.id === event.id)) {
      setBookedEvents([...bookedEvents, event]);
    }
  };

  return (
    <div className="book-events-container">
      <h2>Book Events</h2>

      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <button 
              onClick={() => handleBookEvent(event)} 
              disabled={bookedEvents.some(e => e.id === event.id)}
            >
              {bookedEvents.some(e => e.id === event.id) ? "Booked" : "Book Now"}
            </button>
          </div>
        ))}
      </div>

      {bookedEvents.length > 0 && (
        <div className="booked-events">
          <h3>Your Booked Events</h3>
          <ul>
            {bookedEvents.map(event => (
              <li key={event.id}>{event.name} - {event.date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookEvents;

