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

router.post(
  "/",
  [auth, [check("name", "Name is Required").not().isEmpty()]],
  async (req, res) => {
    //Express-validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //sends the array of errors with the errors object.
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id, //This gives reference to the user who have logged in
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

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
