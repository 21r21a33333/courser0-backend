const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Lesson schema
const lessonSchema = new mongoose.Schema({
  lesson_no: { type: Number, required: true },
  contentype: {
    type: String,
    enum: ['text-material', 'problem', 'assessment'],
    required: true,
  },
  lesson_title: { type: String, required: true },
  lesson_points: { type: Number, required: true },
  text_content: { type: String },
  problem_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseProblem', // Assuming 'CourseProblem' is the model name for course problems
  },
  assessment_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assessment', // Assuming 'Assessment' is the model name for assessments
  },
});

// Create and export the Lesson model
const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
