import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.status === 'success') {
        setErrorMsg('');
        localStorage.setItem('loggedInUser', username);
        navigate('/dashboard');
      } else {
        setErrorMsg('Invalid username or password');
      }
    } catch (error) {
      setErrorMsg('Error connecting to server');
      console.error('Login error:', error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Optional: Implement registration with backend later
    alert('Registration feature not implemented with backend yet.');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isRegistering ? 'Register New User' : 'Ultimatix Login'}</h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <p className="error">{errorMsg}</p>}

          <button type="submit">
            {isRegistering ? 'Register' : 'Login'}
          </button>

          <p className="switch-link">
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              onClick={() => {
                setIsRegistering(!isRegistering);
                setErrorMsg('');
              }}
              style={{ color: '#2563eb', cursor: 'pointer' }}
            >
              {isRegistering ? 'Login here' : 'Register here'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
