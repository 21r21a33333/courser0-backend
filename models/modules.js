const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    module_title: { type: String, required: true },
    module_no: { type: Number, required: true },
    module_total_score: { type: Number, required: true },
    lessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson', // Reference to Lesson documents
    }], // Reference to Lesson documents
  });
  
  const Module = mongoose.model('Module', ModuleSchema);
  module.exports = Module;


  