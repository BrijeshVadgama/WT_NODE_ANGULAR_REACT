// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Employees = require("./models/Employee");
// const PORT = 5000;

// mongoose
//   .connect("mongodb://localhost:27017/emp")
//   .then(() => {
//     console.log("Connected with database.!");
//     const app = express();
//     const route = express.Router();

//     route.use(express.json());
//     route.use(express.urlencoded({ extended: false }));
//     route.use(cors());

//     route.get("/employees", async (req, res) => {
//       try {
//         const result = await Employees.find();
//         res.json(result);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//         res.status(500).json("Internal Server Error");
//       }
//     });

//     route.get("/employees/:id", async (req, res) => {
//       try {
//         const result = await Employees.findOne({ EmployeeId: req.params.id });
//         if (!result) {
//           return res.status(404).json("Employee not found");
//         }
//         res.json(result);
//       } catch (error) {
//         console.error("Error fetching employee by ID:", error);
//         res.status(500).json("Internal Server Error");
//       }
//     });

//     route.post("/employees", async (req, res) => {
//       try {
//         let lastId = await Employees.findOne().sort({ EmployeeId: -1 });
//         let newId = lastId ? parseInt(lastId.EmployeeId) + 1 : 1;
//         const emp = await Employees.create({
//           ...req.body,
//           EmployeeId: newId,
//         });
//         res.json(emp);
//       } catch (error) {
//         console.error("Error creating employee:", error);
//         res.status(500).json("Internal Server Error");
//       }
//     });

//     route.put("/employees/:id", async (req, res) => {
//       try {
//         const result = await Employees.findOneAndUpdate(
//           { EmployeeId: req.params.id },
//           req.body,
//           { new: true }
//         );
//         if (!result) {
//           return res.status(404).json("Employee not found");
//         }
//         res.json(result);
//       } catch (error) {
//         console.error("Error updating employee:", error);
//         res.status(500).json("Internal Server Error");
//       }
//     });

//     route.delete("/employees/:id", async (req, res) => {
//       try {
//         const result = await Employees.deleteOne({ EmployeeId: req.params.id });
//         if (result.deletedCount === 0) {
//           return res.status(404).json("Employee not found");
//         }
//         res.json(result);
//       } catch (error) {
//         console.error("Error deleting employee:", error);
//         res.status(500).json("Internal Server Error");
//       }
//     });

//     app.use("/", route);

//     app.listen(PORT, () => {
//       console.log(`server started on PORT ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to database:", error);
//   });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Employees = require("./models/Employee");
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/emp").then(() => {
  console.log("Connected with database.!");

  const app = express();
  const route = express.Router();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  route.get("/employees", async (req, res) => {
    const result = await Employees.find();
    res.json(result);
  });

  route.get("/employees/:id", async (req, res) => {
    const result = await Employees.findOne({ EmployeeId: req.params.id });
    if (!result) {
      return res.status(404).json("Employee not found");
    }
    res.json(result);
  });

  route.post("/employees", async (req, res) => {
    let lastId = await Employees.findOne().sort({ EmployeeId: -1 });
    let newId = lastId ? parseInt(lastId.EmployeeId) + 1 : 1;
    const emp = await Employees.create({
      ...req.body,
      EmployeeId: newId,
    });
    res.json(emp);
  });

  route.put("/employees/:id", async (req, res) => {
    const result = await Employees.findOneAndUpdate(
      { EmployeeId: req.params.id },
      req.body,
      { new: true }
    );
    if (!result) {
      return res.status(404).json("Employee not found");
    }
    res.json(result);
  });

  route.delete("/employees/:id", async (req, res) => {
    const result = await Employees.deleteOne({ EmployeeId: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json("Employee not found");
    }
    res.json(result);
  });

  app.use("/", route);

  app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`);
  });
});
