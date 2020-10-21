//mongoose code

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//mongoose returns promises.

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1); //exiting with failure
    });
};

//catch then syntax
// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1); //exiting with failure
//     });
// };

module.exports = connectDB;
