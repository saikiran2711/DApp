const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "245118733024@mvsrec.edu.in",
    pass: "Sampath@123",
  },
});
exports.adminLogin = (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  User.find().then((users)=>{
    for(let i in users){
      for(let j in users[i]['recruiters']){
        if(email==users[i]['recruiters'][j]['recruiterEmail']){
          console.log(users[i])
          return res.status(200).json({message:"Success Recruiter"})
        }
      }
      if(users[i]['email']==email && users[i]['password']==password){
        return res.status(200).json({message:"Logged successfully."})
      }else if(users[i]['email']==email){
        return res.status(422).json({err:"password is incorrect"})
      }
      else{
        return res.status(422).json({err:"user not found"})
      }
      
    }
  })
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

exports.gerRecruiters = (req, res, next) => {
  User.find()
    .then((users) => {
      if (users.length === 0) {
        return res.status(200).json({ message: "REcruiters data", data: [] });
      }
      console.log(users);
      let data = users.filter((d) => d.role == "admin");
      return res
        .status(200)
        .json({ message: "Recruiters data", data: data[0].recruiters });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.changePass=(req,res,next)=>{
  User.findOne({email:req.body.email}).then((users)=>{
    if(users){
      users.password=req.body.newPassword;
      users.save();
      return res.status(201).json({message:"Changed Password successfule!"});
    }
  })
};
exports.deleteUser=(req,res,next)=>{
 console.log(User.deleteOne({email:req.body.email}))
}
exports.sendEmail = (req, res, next) => {
  let emailArray = req.body.email;
  console.log(emailArray);
  let mail = {
    from: "your_email",
    to: emailArray,

    subject: req.body.subject,
    text: req.body.body,
  };
  transport.sendMail(mail, (err, info) => {
    if (err) console.log("Email Send Error", err);
    else console.log("Email senT", info);
  });
};
exports.addRecruiters = (req, res, next) => {
  console.log(req.body.email);
  console.log(req.body.password);
  const email = req.body.email;
  const password = req.body.password;
  const adminEmail = req.body.adminEmail;
  User.findOne({ email: adminEmail }).then((user) => {
    if (user) {
      let recruiter = user.recruiters;
      let i = {};
      i["recruiterEmail"] = email;
      i["recruiterPassword"] = password;
      recruiter.push(i);
      user.recruiters = recruiter;
      user.save();
      return res.status(201).json({ message: "Admin added" });
    }
  });
};
