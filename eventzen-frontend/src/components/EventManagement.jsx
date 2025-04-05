import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EventManagement.css";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", location: "" });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/events", newEvent);
      setEvents([...events, res.data]);
      setNewEvent({ name: "", date: "", location: "" });
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="event-management">
      <h2>Event Management</h2>

      <form onSubmit={handleAddEvent} className="event-form">
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          required
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <ul className="event-list">
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong> - {event.date} @ {event.location}
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
