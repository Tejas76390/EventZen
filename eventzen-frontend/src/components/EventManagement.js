import React, { useState } from 'react';
import './EventManagement.css';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: '', date: '', description: '' });
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="event-management-container">
      <h2>Event Management</h2>
      
      <div className="event-form">
        <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} />
        <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
        <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleChange}></textarea>
        <button onClick={addEvent}>Add Event</button>
      </div>

      <ul className="event-list">
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
