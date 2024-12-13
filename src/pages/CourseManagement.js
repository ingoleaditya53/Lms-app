import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseManagement.css'; 

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  // Add a new course
  const addCourse = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: newCourse,
        body: 'Course description',
      });
      setCourses([...courses, response.data]);
      setNewCourse('');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  // Update an existing course
  const updateCourse = async () => {
    if (!editingCourse) return;
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${editingCourse.id}`,
        { ...editingCourse, title: newCourse }
      );
      setCourses(courses.map(course => (course.id === editingCourse.id ? response.data : course)));
      setEditingCourse(null);
      setNewCourse('');
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  // Delete a course
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="course-management-container">
      <h2>Course Management</h2>
      <div className="course-form">
        <input
          type="text"
          className="course-input"
          placeholder="Course Title"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button className="btn" onClick={editingCourse ? updateCourse : addCourse}>
          {editingCourse ? 'Update Course' : 'Add Course'}
        </button>
      </div>

      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <span className="course-title">{course.title}</span>
            <button className="btn edit-btn" onClick={() => { setEditingCourse(course); setNewCourse(course.title); }}>
              Edit
            </button>
            <button className="btn delete-btn" onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;
