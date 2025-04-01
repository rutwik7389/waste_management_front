const express = require("express");
const bcrypt = require("bcryptjs");
const { registerUser, getUserByEmail } = require("../models/userModel");

const router = express.Router();

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: err });
    registerUser({ name, email, password: hash }, (error) => {
      if (error) return res.status(500).json({ error });
      res.status(201).json({ message: "User Registered" });
    });
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  getUserByEmail(email, (error, results) => {
    if (error || results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (!isMatch) return res.status(401).json({ error: "Invalid Credentials" });
      // Return user details on successful login
      res.status(200).json({
        message: "Login Successful",
        user: { name: results[0].name, email: results[0].email }
      });
    });
  });
});

module.exports = router;
