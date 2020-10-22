const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator"); //from Express validator
const bcrypt = require("bcryptjs"); //For Hashing the password.
const jwt = require("jsonwebtoken");
const config = require("config");

// @route GET api/auth
// @desc Get the logged in user
// @access Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route POST api/auth
// @desc Auth user & get token
// @access Public

router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  (req, res) => {
    res.send("Log in user");
  }
);

module.exports = router;
