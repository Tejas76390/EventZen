import React from 'react';
import { useLocation } from 'react-router-dom';
import "./EventDetails.css"; // ✅ Make sure to import CSS

const EventDetails = () => {
  const location = useLocation();
  const selectedEvent = location.state?.event;

  if (!selectedEvent) {
    return <h2>No event selected. Please click view details in the home page</h2>;
  }

  return (
    <div className="event-details">
      <img src={selectedEvent.image} alt={selectedEvent.name} className="event-image" /> 
      <h2>{selectedEvent.name}</h2>
      <p>{selectedEvent.details}</p>
    </div>
  );
};

export default EventDetails;








