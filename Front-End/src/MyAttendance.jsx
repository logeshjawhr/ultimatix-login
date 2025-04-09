import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAttendance.css';

const mockAttendance = [
  { date: '2025-04-01', status: 'Present' },
  { date: '2025-04-02', status: 'Present' },
  { date: '2025-04-03', status: 'Leave' },
  { date: '2025-04-04', status: 'Absent' },
];

const MyAttendance = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      navigate('/');
    } else {
      setUsername(user);
    }
  }, [navigate]);

  return (
    <div>
      <p>Hi, {username}</p>
        <h2>Attendance will be displayed here..</h2>
      <button onClick={() => navigate('/dashboard')} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default MyAttendance;
