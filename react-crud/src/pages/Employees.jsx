import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const apiUrl = "http://localhost:5000/employees/";
  const [emp, setEmp] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(apiUrl);
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

  const deleteEmp = async (employeeId) => {
    try {
      const response = await fetch(apiUrl + employeeId, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }
      await fetchEmployees();
    } catch (error) {
      console.log("Error deleting employee: ", error);
    }
  };

  const viewEmp = (eid) => {
    navigate("/viewemployee/" + eid);
  };

  const updateEmp = (eid) => {
    navigate("/addemployees/" + eid);
  };

  return (
    <div className="container">
      <table className="table table-striped table-bordered text-center shadow-sm p-3 mb-5 bg-body rounded">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Address</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((employee) => (
            <tr key={employee.EmployeeId}>
              <td>{employee.EmployeeId}</td>
              <td>{employee.EmployeeName}</td>
              <td>{employee.EmployeeAddress}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => viewEmp(employee.EmployeeId)}
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button
                  className="btn btn-success me-2"
                  onClick={() => updateEmp(employee.EmployeeId)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmp(employee.EmployeeId)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
