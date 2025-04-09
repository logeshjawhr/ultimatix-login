import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyProjects.css';

const mockProjects = [
  {
    title: 'Hospital Management System',
    description: 'A full-stack web app using JSP and Servlets.',
    status: 'Completed',
  },
  {
    title: 'Employee Portal',
    description: 'Internal HR portal for leaves and payroll.',
    status: 'In Progress',
  },
  {
    title: 'Inventory Tracker',
    description: 'Tracks products, stock levels, and vendors.',
    status: 'On Hold',
  },
];

const MyProjects = () => {
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
    <div className="projects-container">
      <h2>{username.charAt(0).toUpperCase() + username.slice(1)}'s Projects</h2>
      <div className="project-list">
        {mockProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/dashboard')} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default MyProjects;
