import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewEmployee = () => {
  const apiUrl = "http://localhost:5000/employees/";
  const [emp, setEmp] = useState([]);
  const { id } = useParams();

  const fetchEmployees = async () => {
    try {
      const response = await fetch(apiUrl + id);
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      setEmp(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching employees: ", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <table className="table table-striped table-bordered text-center shadow-sm p-3 mb-5 bg-body rounded">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{emp.EmployeeId}</td>
            <td>{emp.EmployeeName}</td>
            <td>{emp.EmployeeAddress}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployee;
