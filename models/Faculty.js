const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: String,
  expertise: String,
  availability: [String], // Array of available time slots
  max_hours: Number
});

module.exports = mongoose.model('Faculty', FacultySchema);
