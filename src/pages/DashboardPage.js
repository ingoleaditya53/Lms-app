// src/pages/DashboardPage.js

import React from 'react';
import './DashboardPage.css'

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Learning Management System (LMS)</h1>
      <p>
        The Learning Management System (LMS) is a platform designed to facilitate 
        the administration, tracking, and delivery of educational content. It allows 
        educators to manage course materials, track student progress, and provide 
        resources for a successful learning experience.
      </p>
      <div className="features">
        <h2>Key Features of LMS:</h2>
        <ul>
          <li>Course Management: Organize and deliver courses effectively.</li>
          <li>Student Progress Tracking: Monitor and assess student performance.</li>
          <li>Communication Tools: Engage with students through messaging and announcements.</li>
          <li>Resource Sharing: Share learning materials like documents, videos, and quizzes.</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;
