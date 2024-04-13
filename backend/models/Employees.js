const mongoose = require("mongoose");
const EmpSchema = mongoose.Schema({
  EmployeeId: {
    type: Number,
    unique: true,
  },
  EmployeeName: {
    type: String,
    required: true,
  },
  EmployeeAddress: {
    type: String,
    required: true,
  },
});
const Employees = mongoose.model("Employees", EmpSchema);
module.exports = Employees;
