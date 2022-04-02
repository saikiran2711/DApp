import { ArrowForward } from "@mui/icons-material";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import SemDetails from '../../contracts/SemDetails.json';
import getWeb3 from "../../web3";
import { NavLink } from "react-router-dom";
const header = async () => {
  const web3 = await getWeb3();
  let accounts = await web3.eth.getAccounts();
  console.log(accounts);
  const networkId = await web3.eth.net.getId();
  console.log("Network id is : ", networkId);
  const deployedNetwork = SemDetails.networks[networkId];
  console.log("Address id is : ", deployedNetwork);
  const instance = new web3.eth.Contract(
    SemDetails.abi,
    deployedNetwork && deployedNetwork.address
  );
  console.log(instance);
let result=await instance.methods.setProfile("abc","abc@zy.com",12344).call({from:accounts[2]});
console.log(accounts[2]);
console.log(result);
result=await instance.methods.getProfile().call({from:accounts[2]});
console.log(result);
};

function Home(props) {
  header();
  return (
    <Box width={1 / 6} margin="auto">
      <Paper
        elevation={3}
        sx={{ backgroundColor: "#0e23bc", padding: 1, borderRadius: 2 }}
      >
        <Typography variant="h5" color="white" fontWeight="bold">
          Profile
        </Typography>
        <Typography
          color="white"
          fontWeight="bold"
          fontSize="12px"
          sx={{ alignItems: "center", flexWrap: "wrap", display: "flex" }}
        >
          Get your profile details here{" "}
        </Typography>
        <Box sx={{ color: "white" }}>
          <NavLink style={{ textDecoration: "none" }} to="/profile">
            <ArrowForward sx={{ paddingLeft: 25, color: "white" }} />{" "}
          </NavLink>
        </Box>
      </Paper>
    </Box>
  );
}

export default Home;
