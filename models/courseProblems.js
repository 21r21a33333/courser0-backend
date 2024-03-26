const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the CourseProblem schema
const courseProblemSchema = new mongoose.Schema({
  problem_title: { type: String, required: true },
  problem_description: { type: String },
  sample_test_cases: [
    {
      input: { type: String },
      output: { type: String },
    },
  ],
  hidden_test_cases: [
    {
      input: { type: String },
      output: { type: String },
    },
  ],
});

// Create and export the CourseProblem model
const CourseProblem = mongoose.model('CourseProblem', courseProblemSchema);
module.exports = CourseProblem;
