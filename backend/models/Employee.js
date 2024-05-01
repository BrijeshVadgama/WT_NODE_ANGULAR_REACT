const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  StudentId: {
    type: Number,
    unique: true,
  },
  StudentName: {
    type: String,
    required: true,
  },
  StudentAddress: {
    type: String,
    required: true,
  },
});
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
