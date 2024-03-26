const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Assessments schema
const assessmentsSchema = new mongoose.Schema({
  assignment_name: { type: String, required: true },
  total_time: { type: Number },
  problems: [
    {
      problem_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseProblem', // Assuming 'CourseProblem' is the model name for course problems
        required: true,
      },
      points: { type: Number, required: true },
    },
  ],
});

// Create and export the Assessments model
const Assessments = mongoose.model('Assessments', assessmentsSchema);
module.exports = Assessments;
