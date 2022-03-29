const User = require("../models/userModel");

const Index = require("../models/acountModel");
const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");

const getAddress = async (idx) => {
  //   let accounts = await web3.eth.getAccounts()[idx];

  let accounts = await web3.eth.getAccounts();

  return accounts[+idx];
};

exports.signUp = async (req, res, next) => {
  console.log("Req is ", req.body);
  const rollNo = req.body.rollNo;
  const password = req.body.password;
  const password2 = req.body.password2;
  var idx = await Index.find();
  console.log("Idxs :", idx);
  if (idx.length == 0) {
    idx = await Index.create({
      accIndex: 0,
    });
  } else {
    idx = await Index.findOneAndUpdate(
      { accIndex: idx[0].accIndex },
      {
        $inc: {
          accIndex: 1,
        },
      }
    );
  }
  console.log("Updated Idx is ", idx);
  let address = await getAddress(idx.accIndex);

  User.findOne({ rollNo: rollNo })
    .then(async (user) => {
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
    })
    .catch((err) => {
      console.log("err");
    });
};

exports.signIn = (req, res, next) => {};
