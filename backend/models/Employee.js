const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  StudentId: Number,
  StudentName: String,
  StudentAddress: String,
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
