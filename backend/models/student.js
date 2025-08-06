const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  class: { type: String, required: true },
  srNo: { type: String, required: true },
  uniqueId: { type: String, required: false }, // ✅ now optional
  contactNo: { type: String, required: false }, // ✅ now optional
  address: { type: String, required: false },   // ✅ now optional
  bloodGroup: { type: String, required: false }, // ✅ new optional field
  schoolName: { type: String, required: true },
  studentPhoto: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
