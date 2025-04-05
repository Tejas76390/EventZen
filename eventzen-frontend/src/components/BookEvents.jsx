import React, { useState } from "react";
import axios from "axios";

const BookEvents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventId: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/bookings", formData);
      setMessage("Booking successful!");
      setFormData({ name: "", email: "", eventId: "" });
    } catch (err) {
      setMessage("Booking failed. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Book an Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="eventId" placeholder="Event ID" value={formData.eventId} onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookEvents;
