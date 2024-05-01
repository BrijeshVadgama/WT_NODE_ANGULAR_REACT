const express = require("express");
const mongoose = require("mongoose");
const StudentSchema = require("./StudentSchema");
const cors = require("cors");
const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected With Database.!");

    const app = express();
    const route = express.Router();

    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors());

    route.get("/student", async (req, res) => {
      const result = await StudentSchema.find();
      res.send(result);
    });

    route.get("/student/:id", async (req, res) => {
      const result = await StudentSchema.findOne({ StudentID: req.params.id });
      if (!result) {
        return res.status(404).send("Student Not Found!");
      }
      res.send(result);
    });

    route.post("/student", async (req, res) => {
      let lid = await StudentSchema.findOne().sort({ StudentID: -1 });
      let nid = lid ? parseInt(lid.StudentID) + 1 : 1;
      const result = await StudentSchema.create({
        ...req.body,
        StudentID: nid,
      });
      res.send(result);
    });

    route.put("/student/:id", async (req, res) => {
      const result = await StudentSchema.findOneAndUpdate(
        { StudentID: req.params.id },
        req.body
      );
    });

    route.delete("/student/:id", async (req, res) => {
      const result = await StudentSchema.deleteOne({
        StudentID: req.params.id,
      });
      if (result.deletedCount === 0) {
        return res.send(404).send("Student Not Found!");
      }
      res.send(result);
    });

    app.use("/", route);

    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error while connecting with database.!", error);
  });
