import React, { useState } from 'react';

function TimetableView() {
  const [timetable, setTimetable] = useState([]);

  const generateTimetable = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/generatetimetable', {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate timetable');
      }
      const timetable = await response.json();
      console.log('Generated Timetable:', timetable);
      // Set timetable in state or display on UI
      setTimetable(timetable);
    } catch (error) {
      console.error('Error generating timetable:', error);
    }
  };
  

  return (
    <div>
      <h2>Generated Timetable</h2>
      <button onClick={generateTimetable}>Generate Timetable</button>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Faculty</th>
            <th>Room</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td>{entry.course}</td>
              <td>{entry.faculty}</td>
              <td>{entry.room}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimetableView;
