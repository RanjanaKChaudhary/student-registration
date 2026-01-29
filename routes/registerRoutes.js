const express = require("express");
const Register = require("../models/Register");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    // check existing email (mongoose query)
    const alreadyExists = await Register.exists({ email });

    if (alreadyExists) {
      return res.send(
        "<h3>Email already registered</h3><a href='/'>Go Back</a>",
      );
    }

    // mongoose document creation
    const student = new Register({
      name,
      email,
      course,
    });

    await student.save();

    res.redirect("/students");

  } catch (error) {
    res.status(500).send("Registration failed");
  }
});

router.get("/students", async (req, res) => {
  try {
    const students = await Register.find().sort({ date: -1 });
    res.render("list", { students });
  } catch (error) {
    res.status(500).send("Unable to fetch students");
  }
});


module.exports = router;