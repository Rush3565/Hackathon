const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: String,
  sessions_per_week: Number,
  faculty_id: String
});

module.exports = mongoose.model('Course', CourseSchema);
