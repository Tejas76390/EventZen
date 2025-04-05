import React from 'react'; 
import AttendeeRegistration from './AttendeeRegistration';
import './AttendeeList.css'; // ✅ Import CSS

const AttendeeList = ({ attendees, onRegister, onUpdateStatus }) => {
  const handleStatusChange = (id, newStatus) => {
    if (onUpdateStatus) {
      onUpdateStatus(id, newStatus);
    }
  };

  return (
    <div className="attendee-container">
      <h2>Attendee List</h2>
      <ul className="attendee-list">
        {attendees.map((attendee) => (
          <li key={attendee.id} className="attendee-item">
            <span>{attendee.name} - {attendee.email}</span>
            <select
              value={attendee.status}
              onChange={(e) => handleStatusChange(attendee.id, e.target.value)}
              className={`status ${attendee.status.toLowerCase()}`}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </li>
        ))}
      </ul>

      {/* ✅ Registration Form inside Attendee Management */}
      <AttendeeRegistration onRegister={onRegister} />
    </div>
  );
};

export default AttendeeList;




