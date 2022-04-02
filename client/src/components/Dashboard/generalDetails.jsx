import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  Card,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
import SideBar from "./sidebar";
import Web3 from "web3";
import SemDetails from "../../contracts/SemDetails.json";
import InputAdornment from "@mui/material/InputAdornment";
let instance;
const GeneralDetails = () => {
  const [load, setload] = useState(true);
  const [data, setdata] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addrss, setAddrss] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [bloodgrp, setBloodgrp] = useState("");
  const [phone, setPhone] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [pincode, setPincode] = useState();
  const [state, setState] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleRoll = (e) => {
    console.log(e.target.value);
    setRollNo(e.target.value);
  };
  const handlePhone = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };
  const handleAadhar = (e) => {
    console.log(e.target.value);
    setAadharNumber(e.target.value);
  };
  const handleBloodGrp = (e) => {
    console.log(e.target.value);
    setBloodgrp(e.target.value);
  };
  const handleAddress = (e) => {
    console.log(e.target.value);
    setAddrss(e.target.value);
  };

  const handleFather = (e) => {
    console.log(e.target.value);
    setFatherName(e.target.value);
  };

  const handleMother = (e) => {
    console.log(e.target.value);
    setMotherName(e.target.value);
  };

  const handleCountry = (e) => {
    console.log(e.target);
    setCountry(e.target.value);
  };

  const handleState = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const handlePin = (e) => {
    console.log(e.target.value);
    setPincode(e.target.value);
  };

  const handleCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const getInstance = async () => {
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SemDetails.networks[networkId];
    const instance = new web3.eth.Contract(
      SemDetails.abi,
      deployedNetwork && deployedNetwork.address
    );
    console.log("Instance is ", instance);
    return instance;
  };

  const fetchData = async () => {
    console.log("In useefect");

    console.log("In fetch data");
    const account = localStorage.getItem("address");
    console.log("Address is : ", account);

    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SemDetails.networks[networkId];
    instance = new web3.eth.Contract(
      SemDetails.abi,
      deployedNetwork && deployedNetwork.address
    );

    // let result = await instance.methods
    //   .setProfile("abc", "abc@zxyc.com", 22222222222)
    //   .send({ from: account });
    // console.log("Result is : ", result);

    let response = await instance.methods.getProfile().call({ from: account });
    console.log("Response is :", response);
    setload(false);

    setdata(response[0].name);
  };

  const handleSubmit = async (e) => {
    const account = localStorage.getItem("address");
    e.preventDefault();
    console.log(
      "Data is ",
      name,
      email,
      phone,
      rollNo,
      motherName,
      fatherName,
      state,
      country,
      city,
      pincode,
      addrss,
      bloodgrp,
      aadharNumber
    );

    console.log(account);
    // let instance = await getInstance();
    console.log("Instance in submit : ", instance);
    let profile = [name, email, rollNo, phone, addrss, aadharNumber, bloodgrp];
    let relation = [fatherName, motherName];
    let address = [country, state, pincode, city];
    console.log(profile, relation, address);
    let result = await instance.methods
      .setProfile(
        [name, email, +rollNo, +phone, addrss, +aadharNumber, bloodgrp],
        [fatherName, motherName],
        [country, state, +pincode, city]
      )
      .send({ from: account, gas: 30000000000000000000000 });
    console.log("Result is : ", result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        {load ? (
          <center>
            <CircularProgress />
          </center>
        ) : (
          <>
            {data == "" ? (
              <Grid
                item
                sx={{
                  flex: "1",
                  height: "100vh",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  // alignContent="center"
                  sx={{ marginLeft: "20px" }}
                >
                  <Grid
                    item
                    sx={{
                      padding: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography sx={{}} variant="h4">
                      Hello, I guess you are new here. Please fill up the below
                      form.
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: "20px" }}>
                    <Card
                      sx={
                        {
                          // height: "1000px",
                          // marginBottom: "30px",
                        }
                      }
                    >
                      <Grid container direction="column">
                        <Grid item alignSelf="center" sx={{ padding: "10px" }}>
                          <Typography variant="h4">
                            Fill Your Details
                          </Typography>
                        </Grid>

                        <Box
                          sx={{
                            // backgroundColor: "pink",
                            // marginLeft: "20px",
                            marginTop: "15px",
                            // width: "500px",
                          }}
                        >
                          <Box sx={{ margin: "20px" }}>
                            <Typography variant="h5">Profile:</Typography>

                            <Grid container>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Name"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleName}
                                  value={name}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="E-mail "
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleEmail}
                                  value={email}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Roll Number"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleRoll}
                                  value={rollNo}
                                />
                              </Grid>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Phone"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handlePhone}
                                  value={phone}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Aadhar Number"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleAadhar}
                                  value={aadharNumber}
                                />
                              </Grid>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Blood Group"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleBloodGrp}
                                  value={bloodgrp}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Address"
                                  color="fields"
                                  maxRows={3}
                                  multiline="true"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleAddress}
                                  value={addrss}
                                />
                              </Grid>
                            </Grid>
                          </Box>
                          <Box sx={{ margin: "20px" }}>
                            <Typography variant="h5">Relation:</Typography>{" "}
                            <Grid container>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Father's Name"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleFather}
                                  // value={rollNo}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Mother's Name "
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleMother}
                                  // value={rollNo}
                                />
                              </Grid>
                            </Grid>
                          </Box>
                          <Box sx={{ margin: "20px" }}>
                            <Typography variant="h5">Address:</Typography>{" "}
                            <Grid container>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <FormControl fullWidth>
                                  <InputLabel
                                    color="fields"
                                    id="demo-simple-select-label"
                                  >
                                    Country
                                  </InputLabel>

                                  <Select
                                    fullWidth={true}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={country}
                                    color="fields"
                                    label="Country"
                                    // placeholder="Age"
                                    onChange={handleCountry}
                                  >
                                    <MenuItem value="India" name="India">
                                      India
                                    </MenuItem>
                                    <MenuItem value="USA" name="USA">
                                      USA
                                    </MenuItem>
                                    <MenuItem value="China" name="China">
                                      China
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <FormControl fullWidth>
                                  <InputLabel
                                    color="fields"
                                    id="demo-simple-select-label"
                                  >
                                    State
                                  </InputLabel>

                                  <Select
                                    fullWidth={true}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    color="fields"
                                    label="State"
                                    // placeholder="Age"
                                    onChange={handleState}
                                  >
                                    <MenuItem value="Telengana">
                                      Telengana
                                    </MenuItem>
                                    <MenuItem value="Delhi">Delhi</MenuItem>
                                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Pin Code"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handlePin}
                                  value={pincode}
                                />
                              </Grid>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="City"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleCity}
                                  value={city}
                                />
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                        <Grid item alignSelf="center" sx={{ margin: "15px" }}>
                          <Button onClick={handleSubmit} variant="contained">
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                sx={{ backgroundColor: "blue", flex: "1", overflowY: "auto" }}
              >
                <h2>Data found</h2>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default GeneralDetails;
