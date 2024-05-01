import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployees = () => {
  const apiUrl = "http://localhost:5000/employees/";
  const { id } = useParams();
  const [emp, setEmp] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmp = async () => {
      try {
        if (id !== undefined) {
          const response = await fetch(apiUrl + id);
          if (response.ok) {
            const emp = await response.json();
            setEmp(emp);
          } else {
            throw new Error("Error fetching employee");
          }
        } else {
          setEmp({});
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmp();
  }, [id]);

  const add = () => {
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(emp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          navigate(-1);
        }
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  const update = () => {
    fetch(apiUrl + id, {
      method: "PUT",
      body: JSON.stringify(emp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          navigate(-1);
        }
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={emp.EmployeeName || ""}
            onChange={(e) => {
              setEmp({ ...emp, EmployeeName: e.target.value });
            }}
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Address</label>
          <input
            type="text"
            className="form-control"
            value={emp.EmployeeAddress || ""}
            onChange={(e) => {
              setEmp({ ...emp, EmployeeAddress: e.target.value });
            }}
          />
        </div>
        {id === undefined && (
          <button
            className="btn btn-primary"
            onClick={() => { add(); }}
          >
            Add
          </button>
        )}
        {id !== undefined && (
          <button
            className="btn btn-primary"
            onClick={() => {
              update();
            }}
          >
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export default AddEmployees;
