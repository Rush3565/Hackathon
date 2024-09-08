import React, { useState } from 'react';

function FacultyForm() {
  const [facultyData, setFacultyData] = useState({
    name: '',
    expertise: '',
    availability: '',
    max_hours: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/faculty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(facultyData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert('Faculty data submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('Failed to submit data. Check the console for more details.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Faculty Name" 
        value={facultyData.name}
        onChange={(e) => setFacultyData({...facultyData, name: e.target.value})} 
      />
      <input 
        type="text" 
        placeholder="Expertise" 
        value={facultyData.expertise}
        onChange={(e) => setFacultyData({...facultyData, expertise: e.target.value})} 
      />
      <input 
        type="text" 
        placeholder="Availability (comma separated)" 
        value={facultyData.availability}
        onChange={(e) => setFacultyData({...facultyData, availability: e.target.value.split(',')})} 
      />
      <input 
        type="number" 
        placeholder="Max Hours" 
        value={facultyData.max_hours}
        onChange={(e) => setFacultyData({...facultyData, max_hours: parseInt(e.target.value)})} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FacultyForm;
