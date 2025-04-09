import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyProfile.css';

const MyProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
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
    <div className="profile-container">
      <h2>{username.charAt(0).toUpperCase() + username.slice(1)}!'s Profile</h2>
   <div>
<label htmlFor="">Name: {username.charAt(0).toUpperCase() + username.slice(1)} </label>
<br />
 <label htmlFor="">Mobile number: 9876543210</label>
 <br />
 <label htmlFor="">Mail ID: {username}@tcs.com</label>

   </div>
      <button onClick={() => navigate('/dashboard')} className="back-button">
         Back to Dashboard
      </button>
    </div>
  );
};

export default MyProfile;
