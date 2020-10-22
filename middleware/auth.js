//this middleware is bought to some route..in order to protect it. (Usually private route)
const jwt = require("jsonwebtoken");
const config = require("config");

//middleware function
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token"); //this value comes from the header property name which contains the token.

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    //decoded payload object of token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user; //this will asgin the vaule os req object of the protected route which runs the middle ware.
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
