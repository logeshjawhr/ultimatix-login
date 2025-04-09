import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './Login';
import Dashboard from './Dashboard';
import Payslip from './Payslip'
import MyProfile from './Myprofile';
import MyProjects from './MyProjects';
import MyAttendance from './MyAttendance';
import './dashboard.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/attendance" element={<MyAttendance />} />
      </Routes>
    </Router>
  );
}

export default App;
