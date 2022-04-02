import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SemDetails from "../../contracts/Semester.json";
import getWeb3 from "../../web3";
let account, TranactionHash, subs, scores;
const connectionHandler = async () => {
  const web3 = await getWeb3();
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SemDetails.networks[networkId];
  const instance = new web3.eth.Contract(
    SemDetails.abi,
    deployedNetwork && deployedNetwork.address
  );
  account = await web3.eth.getAccounts();
  console.log("Testing instance from Semester : " + instance);
  let result = await instance.methods
    .Sem1initializer()
    .send({ from: account[0], gas: 300000 });
  console.log(result);
  TranactionHash = result["transactionHash"];
  subs = await instance.methods.getSemSubs().call();
  console.log(subs);
  scores = await instance.methods.getSem1().call();
  console.log(result);
  return instance;
};

function SemesterComponent() {
  const [forms,setForms] = useState([]);
  connectionHandler().then((res, err) => {
    console.log(res);
    console.log(typeof(res));
    for (let i = 0; i < subs.length; i += 1)
      setForms( arr =>
        [...arr,
        <Box display='block'>
          <TextField disabled value={subs[i]}></TextField>
          <TextField value={scores[i]}></TextField>
        </Box>]
      );

  });
  return (
    <>
      <h6>Last Transaction hash : {TranactionHash}</h6>
      {forms}
    </>
  );
}

export default SemesterComponent;
