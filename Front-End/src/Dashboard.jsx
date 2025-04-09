import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  FaUser,
  FaFileInvoice,
  FaProjectDiagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      
      navigate("/");
    }
    setUsername(user || "User");
  }, [navigate]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("loggedInUser");
      navigate("/");
    }
  };

  return (
    <div className="dashboard-container">
     
      <header className="dashboard-header">
        <h1 className="dashboard-title">Ultimatix</h1>
        <div className="dashboard-welcome">
          Welcome,{" "}
          <span className="dashboard-user">
            {username.charAt(0).toUpperCase() + username.slice(1)}!
          </span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

   
      <main className="dashboard-main">
        <h2 className="dashboard-heading">Dashboard</h2>

        <div className="dashboard-grid">
          <div
            className="dashboard-card"
            onClick={() => navigate("/attendance")}
            style={{ cursor: "pointer" }}
          >
            <FaCalendarCheck className="dashboard-icon green" />
            <div>
              <h3 className="card-title">My Attendance</h3>
              <p className="card-text">Track your attendance status</p>
            </div>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/payslip")}
            style={{ cursor: "pointer" }}
          >
            <FaFileInvoice className="dashboard-icon green" />
            <div>
              <h3 className="card-title">Payslip</h3>
              <p className="card-text">Check your latest payslip</p>
            </div>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/projects")}
            style={{ cursor: "pointer" }}
          >
            <FaProjectDiagram className="dashboard-icon blue" />
            <div>
              <h3 className="card-title">My Projects</h3>
              <p className="card-text">
                View your active and completed projects
              </p>
            </div>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          >
            <FaUser className="dashboard-icon purple" />
            <div>
              <h3 className="card-title">My Profile</h3>
              <p className="card-text">Update your personal details</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
