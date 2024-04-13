import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const apiUrl = "http://localhost:5000/employees/";
  const navigate = useNavigate();
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEmp(data);
        console.log(data);
      });
  };

  return (
    <div className="container">
      <table class="table table-striped table-bordered text-center shadow-sm p-3 mb-5 bg-body rounded">
        <thead class="bg-dark text-light">
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Address</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((employees) => (
            <tr>
              <td>{employees.EmployeeId}</td>
              <td>{employees.EmployeeName}</td>
              <td>{employees.EmployeeAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
