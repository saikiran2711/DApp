const User = require("../models/userModel");

const Index = require("../models/acountModel");
const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");

const getAddress = async (idx) => {
  let accounts = await web3.eth.getAccounts();

  return accounts[+idx];
};

exports.getLog=async(req,res,next)=>{
  const rollNo=req.body.rollNo;
  const user=await User.findOne({rollNo:(req.body.rollNo)})
  console.log(user);
  res.json({log:user.log})
//  return User.findOne({rollNo:rollNo}).then((user)=>{
//     console.log("USERLOG : "+user.log[4]['Msg']) 
//     return user.log;
//   })
}
exports.signUp = async (req, res, next) => {
  console.log("Req is ", req.body);
  const rollNo = req.body.rollNo;
  const password = req.body.password;

  var idx = await Index.find();
  console.log("Idxs :", idx);
  if (idx.length == 0) {
    idx = await Index.create({
      accIndex: 0,
    });
  } else {
    console.log("Already there : ", idx[0]);
    idx = await Index.updateOne(
      { accIndex: idx[0].accIndex },
      {
        $set: {
          accIndex: idx[0].accIndex + 1,
        },
      }
    );
  }
  var idx = await Index.find();

  console.log("Updated Idx is ", idx[0]);
  let address = await getAddress(idx[0].accIndex);
  console.log("Address is : ", address);

  User.findOne({ rollNo: rollNo })
    .then((user) => {
      console.log("USer ", user);
      if (!user) {
        console.log("No user", idx.accIndex);

        return User.create({
          password: password,
          rollNo: rollNo,
          address: address,
        })

          .then((user) => {
            console.log("User created :", user);
            res.json({ message: "User created sucessfully!", user: user });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else{
        User.findOne({rollNo:rollNo},function(err,doc){
          // console.log("Doc"+ doc);
          if(req.body.logMsg!=null && req.body.TransactionID!=null && req.body.Time!=null && req.body.GasUsed!=null && req.body.ContractAdd!=null){
          let l=doc.log;
          // let l=[];
          let i={};
          i['Msg']=req.body.logMsg;
          i['TransactionID']=req.body.TransactionID;
          i['Time']=req.body.Time;
          i['GasUsed']=req.body.GasUsed,
          i['ContractAdd']=req.body.ContractAdd
          l.push(i);
          doc.log=l;
          doc.save();
          }
        })
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.signIn = (req, res, next) => {
  const rollNo = req.body.rollNo;
  const password = req.body.password;
  console.log(req.bo);

  User.findOne({ rollNo: rollNo })
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

exports.logOut = (req, res, next) => {
  const address = req.body.address;
  console.log(req);
  User.updateOne(
    { address: address },
    {
      $set: {
        isLoggedIn: false,
      },
    }
  )
    .then((user) => {
      console.log(user);
      res.status(200).json({ message: "Logged out " });
    })
    .catch((err) => {
      console.log(err);
    });
};
