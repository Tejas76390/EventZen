import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import EventManagement from './components/EventManagement';
import AttendeeList from './components/AttendeeList';
import BudgetTracking from './components/BudgetTracking';
import BookEvents from './components/BookEvents';
import './App.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [attendees, setAttendees] = useState([
    { id: 1, name: "Tejas Shetty", email: "tejasshetty449@gmail.com", status: "Confirmed" },
    { id: 2, name: "Lisha Shetty", email: "lishashetty@gmail.com", status: "Pending" }
  ]);

  const handleRegisterAttendee = (newAttendee) => {
    setAttendees([...attendees, { ...newAttendee, id: attendees.length + 1 }]);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setAttendees(attendees.map(attendee => 
      attendee.id === id ? { ...attendee, status: newStatus } : attendee
    ));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EventList onSelectEvent={setSelectedEvent} />} />
          <Route path="/event-details" element={<EventDetails selectedEvent={selectedEvent} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route 
            path="/attendees" 
            element={
              <AttendeeList 
                attendees={attendees} 
                onRegister={handleRegisterAttendee} 
                onUpdateStatus={handleUpdateStatus} 
              />
            } 
          />
          <Route path="/budget-tracking" element={<BudgetTracking />} />
          <Route path="/book-events" element={<BookEvents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




