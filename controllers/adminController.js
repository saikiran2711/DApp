const User = require("../models/userModel");
const { use } = require("../routes/adminRoutes");

exports.adminLogin = (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  // User.find().then((user) => {
  //   console.log(user);
  // });
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ err: "User not found." });
      }
      if (user.password == password) {
        user.isLoggedIn = true;
        return user.save();
      } else {
        return res.status(422).json({ err: "Password is incorrect" });
      }
    })
    .then((user) => {
      return res
        .status(200)
        .json({ message: "Logged in successfully!", user: user });
    })
    .catch((err) => {
      err.statusCode = 500;
      err.message = "Internal Server Error";
      next(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      if (users.length === 0) {
        return res.status(200).json({ message: "Users data", data: [] });
      }
      console.log(users);
      let data = users.filter((d) => d.role != "admin");
      return res.status(200).json({ message: "Users data", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};
