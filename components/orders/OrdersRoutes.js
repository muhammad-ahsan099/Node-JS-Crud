
var express = require("express");
var router = express.Router();

let { getStudents, createStudent, updateStudents , deleteStudent} = require("./OrdersController");
const verifyToken  = require('../../middleware/AuthMiddleware')


router.get("/", (req, res) => {
  res.json("server Student, route working")
  });
  
router.post("/createStudent" , verifyToken, (req, res) => {
  createStudent(req, res);
});

router.put("/updateStudent",verifyToken , (req, res) => {
  updateStudents(req, res);
  });

router.get("/getStudents", (req, res) => {
    // db
    getStudents(req, res);
});

router.delete("/delete",verifyToken , (req, res) => {
  // db
  deleteStudent(req, res);
});

module.exports = router;
