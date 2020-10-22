//CRUD Route.

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); //Whenever we need to protect routes we need to use this middleware
const { check, validationResult } = require("express-validator");
//Model
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route    GET api/contacts
// @desc     Get all users contacts
// @access   Private

//adding the parameter Auth makes the routes protected.
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    }); //makes most recent contacts first
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private

router.post("/", (req, res) => {});

// @route PUT api/contacts/:id
// @desc Update a contact
// @access Private

router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// @route DELETE api/contacts/:id
// @desc Delete a contact
// @access Private

router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
