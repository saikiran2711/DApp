import { Box, Hidden, Paper, Typography } from "@mui/material";
import React, { useEffect, useState, Component } from "react";
import SemDetails from "../../contracts/SemDetails.json";
// import getWeb3 from "../../web3";
import Web3 from "web3";

const Profile = () => {
  const [load, setload] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log("In useefect");

      console.log("In fetch data");
      const account = localStorage.getItem("address");
      console.log("Address is : ", account);

      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SemDetails.networks[networkId];
      const instance = new web3.eth.Contract(
        SemDetails.abi,
        deployedNetwork && deployedNetwork.address
      );
      console.log(instance);
      let result = await instance.methods
        .setProfile("abc", "abc@zxyc.com", 22222222222)
        .send({ from: account });
      console.log("Result is : ", result);
      let response = await instance.methods
        .getProfile()
        .call({ from: account });
      console.log("Response is :", response._email);
      setload(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <Box width={1 / 4} margin="auto" position="absolute" top="50%">
          <Paper elevation={3} sx={{ margin: 1, padding: 2 }}>
            <Typography padding={1}> Name : SAmpath</Typography>
            <Typography padding={1}>Your Roll No : 245118733024</Typography>
            <Typography noWrap padding={1}>
              Your Public Key :
              0xyyyyyyyywyqyywysyysdafadsfaadsafcsadsavvncjandjnjavinvjdndjfaklnfalkdnfbajkbjakblajkbjldakbajvkcblj
            </Typography>
            <Typography padding={1}>Your CGPA : 7.5</Typography>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Profile;
