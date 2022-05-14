const User = require("../models/userModel");

exports.adminLogin = (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

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

exports.addRecruiters=(req,res,next)=>{
  console.log(req.body.email);
  console.log(req.body.password);
  const email=req.body.email;
  const password=req.body.password;
  const adminEmail=req.body.adminEmail;
  User.findOne({email:adminEmail}).then((user)=>{
    if(user){
      let recruiter=user.recruiters
      let i={}
      i['recruiterEmail']=email;
      i['recruiterPassword']=password;
      recruiter.push(i)
      user.recruiters=recruiter;
      user.save();
      return res.status(201).json({ message: "Admin added" });
    }
  })
}
