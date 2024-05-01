const mongoose = require("mongoose");

const StudentScheme = mongoose.model({
  StudentID: Number,
  StudentName: String,
  StudentAge: Number,
  StudentEmail: String,
  StudentMobile: String,
  StudentAddress: String,
  StudentParentName: String,
  StudentParentMobile: String,
  StudentParentEmail: String,
});

module.exports = mongoose.model("StudentDetails", StudentScheme);
