import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payslip.css';

const mockPayslips = [
  { month: 'March 2025', amount: '₹55,000', status: 'Paid' },
  { month: 'February 2025', amount: '₹54,000', status: 'Paid' },
  { month: 'January 2025', amount: '₹53,500', status: 'Paid' },
];

const Payslip = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      navigate('/');
    }
    setUsername(user);
  }, [navigate]);

  return (
    <div className="payslip-container">
      <h2>{username.charAt(0).toUpperCase() + username.slice(1)}'s Payslips</h2>
      <div className="payslip-list">
        {mockPayslips.map((payslip, index) => (
          <div key={index} className="payslip-card">
            <h3>{payslip.month}</h3>
            <p>Amount: {payslip.amount}</p>
            <p>Status: {payslip.status}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/dashboard')} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default Payslip;
