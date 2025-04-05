import React, { useState } from 'react';
import './AttendeeRegistration.css'; // ✅ Import CSS

const AttendeeRegistration = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onRegister({ name, email, status: 'Pending' });
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="registration-container">
      <h2>Register New Attendee</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AttendeeRegistration;

