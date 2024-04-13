import React from "react";

const AddEmployees = () => {
  return (
    <div className="container mt-5">
      <form>
        <div class="mb-3">
          <label for="" class="form-label">
            Employee Name
          </label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Employee Address
          </label>
          <input type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployees;
