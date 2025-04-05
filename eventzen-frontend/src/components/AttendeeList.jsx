import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendeeList = () => {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/attendees");
      setAttendees(res.data);
    } catch (err) {
      console.error("Error fetching attendees:", err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/attendees", { name, email });
      setName("");
      setEmail("");
      fetchAttendees();
    } catch (err) {
      console.error("Error registering attendee:", err);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/attendees/${id}/status`, { status });
      fetchAttendees();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div>
      <h2>Attendee Management</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.id}>
            <strong>{attendee.name}</strong> ({attendee.email}) - {attendee.status}
            <button onClick={() => handleUpdateStatus(attendee.id, "Confirmed")}>Confirm</button>
            <button onClick={() => handleUpdateStatus(attendee.id, "Pending")}>Pending</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendeeList;
