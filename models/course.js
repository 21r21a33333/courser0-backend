const mongoose = require('mongoose');
  // Define the Course schema
  const CourseSchema = new mongoose.Schema({
    courseid: { type: String, required: true },
    coursetags: [{ type: String }],
    title: { type: String, required: true },
    description: { type: String },
    modules: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Module', // Reference to Module documents
        },
    ], // Array of Module documents
  });
  
  // Create and export the Course model
  const Course = mongoose.model('Course', CourseSchema);
  module.exports = Course;