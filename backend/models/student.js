// backend/models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  srNo: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  photoFilename: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
