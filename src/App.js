import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CourseManagement from './pages/CourseManagement';
import Chat from './pages/Chat';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Redirect root URL to the Dashboard page */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Dashboard and other routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
