

const express = require('express');
const Faculty = require('../models/Faculty');
const Course = require('../models/Course');
const Room = require('../models/Room');
const router = express.Router();

router.post('/faculty', async (req, res) => {
  const faculty = new Faculty(req.body);
  await faculty.save();
  res.status(201).send(faculty);
});

router.post('/courses', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).send(course);
});

router.post('/rooms', async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.status(201).send(room);
});

router.post('/generatetimetable', async (req, res) => {
  const courses = await Course.find();
  const faculty = await Faculty.find();
  const rooms = await Room.find();


  let timetable = [];
  courses.forEach(course => {
    // const availableFaculty = faculty.find(fac => fac._id.equals(course.faculty_id) && fac.availability.length);
    // const availableRoom = rooms.find(room => room.availability.length);
    const availableFaculty = faculty.find(fac => fac.availability.length);
    const availableRoom = rooms.find(room => room.availability.length);

    if (availableFaculty && availableRoom) {
      timetable.push({
        course: course.name,
        faculty: availableFaculty.name,
        room: availableRoom.name,
        time: availableFaculty.availability.shift(),
      });
      availableRoom.availability.shift();
    }
  }
);


  res.send(timetable);
});

module.exports = router;
