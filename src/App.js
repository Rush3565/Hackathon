import React from 'react';
import FacultyForm from './components/FacultyForm';
import CourseForm from './components/CourseForm';
import RoomForm from './components/RoomForm';
import TimetableView from './components/TimetableView';

function App() {
  return (
    <div className="App">
      <h1>Timetable Generator</h1>
      <FacultyForm />
      <CourseForm />
      <RoomForm />
      <TimetableView />
    </div>
  );
}

export default App;
