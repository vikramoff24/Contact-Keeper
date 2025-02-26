const express = require("express");
const connectDB = require("./config/db");
const path = require("path"); //built in package.
const app = express();
// Connect Database
connectDB();
// Init Middleware
app.use(express.json({ extended: false })); //accept json data and use req.body

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve Static assets (ReactApp) in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
