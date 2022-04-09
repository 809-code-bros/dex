const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/user-model");
require("dotenv/config");


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// DB Connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

/*
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', routesHandler));
    });
}
*/




const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/register", (req, res) => {
  UsersModel.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ email: "A user has already registered with this email" });
      } else {
        const { firstName, lastName, email, username, password } =
          req.body.form;
        const newUser = new UsersModel({
          firstName,
          lastName,
          email,
          username,
          password,
        });
        console.log("User created!", newUser);
        newUser.save().catch((err) => console.log(err.message));
        res.status(200).json({ msg: newUser });
      }
    })
    .catch((err) => console.log(err.message));
});

app.get("/user-profile", async (req, res) => {
  UsersModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});






