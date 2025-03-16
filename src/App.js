import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../src/component/sidebar';
import Dashboard from '../src/pages/dashboard.js';
import Reservation from '../src/pages/reservation.js';
import Users from '../src/pages/users.js';
import Location from '../src/pages/location.js';
import Form from './pages/addReservation.js';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/users" element={<Users />} />
            <Route path="/location" element={<Location />} />
            <Route path="/add-reservation" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
