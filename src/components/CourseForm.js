import React, { useState } from 'react';

function CourseForm() {
  const [courseData, setCourseData] = useState({
    name: '',
    code: '',
    faculty: '',
    hours: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload
    try {
      // Send data to the backend
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert('Course data submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Course Name" 
        value={courseData.name}
        onChange={(e) => setCourseData({...courseData, name: e.target.value})} 
      />
      <input 
        type="text" 
        placeholder="Course Code" 
        value={courseData.code}
        onChange={(e) => setCourseData({...courseData, code: e.target.value})} 
      />
      <input 
        type="text" 
        placeholder="Faculty" 
        value={courseData.faculty}
        onChange={(e) => setCourseData({...courseData, faculty: e.target.value})} 
      />
      <input 
        type="number" 
        placeholder="Hours" 
        value={courseData.hours}
        onChange={(e) => setCourseData({...courseData, hours: parseInt(e.target.value)})} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CourseForm;
