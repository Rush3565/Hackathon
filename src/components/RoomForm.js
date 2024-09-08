import React, { useState } from 'react';

function RoomForm() {
  const [roomData, setRoomData] = useState({
    name: '',
    capacity: 0,
    availability: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload
    try {
      // Send data to the backend
      const response = await fetch('http://localhost:5000/api/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert('Room data submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Room Name" 
        value={roomData.name}
        onChange={(e) => setRoomData({...roomData, name: e.target.value})} 
      />
      <input 
        type="number" 
        placeholder="Capacity" 
        value={roomData.capacity}
        onChange={(e) => setRoomData({...roomData, capacity: parseInt(e.target.value)})} 
      />
      <input 
        type="text" 
        placeholder="Availability (comma separated)" 
        value={roomData.availability.join(', ')}
        onChange={(e) => setRoomData({...roomData, availability: e.target.value.split(',').map(time => time.trim())})} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RoomForm;
