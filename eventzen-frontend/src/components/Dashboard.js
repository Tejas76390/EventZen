import React from "react"; 
import { Link } from "react-router-dom";
import "./Dashboard.css"; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to EventZen</h2>
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/event-management">Events</Link></li>
          <li><Link to="/attendees">Attendee Management</Link></li>
          <li><Link to="/budget-tracking">Budget Tracking</Link></li>
          <li><Link to="/book-events">Book Events</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;








