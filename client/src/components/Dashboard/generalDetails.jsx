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
  IconButton,
} from "@mui/material";
import SideBar from "./sidebar";
import { makeStyles } from "@mui/styles";
import Web3 from "web3";
import SemDetails from "../../contracts/SemDetails.json";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
let instance;
const useStyles = makeStyles({
  gridItems: {
    padding: "6px",
    color: "white",
    // margin: "2px",
  },
});
const GeneralDetails = () => {
  const classes = useStyles();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    addrss: "",
    aadharNumber: "",
    rollNo: "",
    bloodgrp: "",
    phone: "",
    fatherName: "",
    motherName: "",
    city: "",
    country: "India",
    pincode: "",
    state: "",
    edit: false,
    load: true,
    newForm: false,
  });

  let [phErr,setPhErr]=useState('');
  let [aadharErr,setAadharErr]=useState('');
  let [pinErr,setPinErr]=useState('')
  let [bloodErr,setBloodErr]=useState('');
  let [emailErr,setEmailErr]=useState('');
  let rollNo=localStorage.getItem('roll');
  // const [load, setload] = useState(true);
  const handleName = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      name: e.target.value,
    });
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      email: e.target.value,
    });
    if(e.target.value.includes('.com') & e.target.value.includes('@')){
      setEmailErr('');
      
    }else setEmailErr('Enter valid email');
    console.log(emailErr);
  };
  const handleRoll = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      rollNo: e.target.value,
    });
    
  };
  const handlePhone = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      phone: e.target.value,
    });
    if(e.target.value.length==10 && e.target.value.match(/[0-9]/g).length>0){
      setPhErr("");
      
    }else setPhErr("Enter valid Phone number");
  };
  const handleAadhar = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      aadharNumber: e.target.value,
    });
    if(e.target.value.length==12 && e.target.value.match(/[0-9]/g).length>0){
      setAadharErr('');

    }else 
    setAadharErr("Enter valid aadhar number");
  };
  const handleBloodGrp = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      bloodgrp: e.target.value,
    });
    if((e.target.value.endsWith('+') || e.target.value.endsWith('-')) && e.target.value.match(/[O|A|AB]/g)){
      
      setBloodErr('');
    }else{
      setBloodErr('Enter valid Blood Group');
    }
  };
  const handleAddress = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      addrss: e.target.value,
    });
  };

  const handleFather = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      fatherName: e.target.value,
    });
  };

  const handleMother = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      motherName: e.target.value,
    });
  };

  const handleCountry = (e) => {
    console.log(e.target);
    setformData({
      ...formData,
      country: e.target.value,
    });
  };

  const handleState = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      state: e.target.value,
    });
  };

  const handlePin = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      pincode: e.target.value,
    });
    if(e.target.value.length==6 && e.target.value.match(/[0-9]/g).length>0){
      setPinErr('')
    }else 
    setPinErr("Enter valid PinCode")
  };

  const handleCity = (e) => {
    console.log(e.target.value);
    setformData({
      ...formData,
      city: e.target.value,
    });
  };

  const handleEdit = () => {
    setformData({
      ...formData,
      edit: true,
    });
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
    let balance = await web3.eth.getBalance(localStorage.getItem("address"));
    console.log("Balamce is : ", balance);
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
    // setload(false);

    setformData({
      ...formData,
      name: response[0].name,
      email: response[0].email,
      addrss: response[0].addrss,
      aadharNumber:
        response[0].aadharNumber == "0" ? "" : response[0].aadharNumber,
      rollNo: response[0].rollNo == "0" ? "" : response[0].rollNo,
      bloodgrp: response[0].bloodgrp,
      phone: response[0].phone == "0" ? "" : response[0].phone,
      fatherName: response[1].fatherName,
      motherName: response[1].motherName,
      city: response[2].city,
      country: response[2].country == "" ? "India" : response[2].country,
      pincode: response[2].pincode == "0" ? "" : response[2].pincode,
      state: response[2].state,
      load: false,
      newForm: response[0].name == "" ? true : false,
    });
  };

  const handleSubmit = async (e) => {
    const account = localStorage.getItem("address");
    e.preventDefault();
    console.log("Data is ", formData);

    console.log(account);
    let instance = await getInstance();
    let {
      name,
      email,
      rollNo,
      phone,
      addrss,
      aadharNumber,
      bloodgrp,
      fatherName,
      motherName,
      country,
      state,
      pincode,
      city,
    } = formData;
    console.log("Instance in submit : ", instance);
    let profile = [
      formData.name,
      email,
      rollNo,
      phone,
      addrss,
      aadharNumber,
      bloodgrp,
    ];
    let relation = [fatherName, motherName];
    let address = [country, state, pincode, city];
    console.log(profile, relation, address);
    const result = await instance.methods
      .setProfile(
        [name, email, +rollNo, +phone, addrss, +aadharNumber, bloodgrp],
        [fatherName, motherName],
        [country, state, +pincode, city]
      )
      .send({ from: account, gas: 3000000 });
    console.log("Result is : ", result);

    let response = await instance.methods.getProfile().call({ from: account });
    console.log("Response is :", response);
    setformData({
      ...formData,
      name: response[0].name,
      email: response[0].email,
      addrss: response[0].addrss,
      aadharNumber:
        response[0].aadharNumber == "0" ? "" : response[0].aadharNumber,
      rollNo: response[0].rollNo == "0" ? "" : response[0].rollNo,
      bloodgrp: response[0].bloodgrp,
      phone: response[0].phone == "0" ? "" : response[0].phone,
      fatherName: response[1].fatherName,
      motherName: response[1].motherName,
      city: response[2].city,
      country: response[2].country == "" ? "India" : response[2].country,
      pincode: response[2].pincode == "0" ? "" : response[2].pincode,
      state: response[2].state,
      newForm: false,
      edit: false,
    });
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
        {formData.load ? (
          <Grid
            alignSelf="center"
            textAlign="center"
            item
            sx={{
              flex: "1",
            }}
          >
            <CircularProgress color="pink" />
          </Grid>
        ) : (
          <>
            {formData.newForm || formData.edit ? (
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
                    {formData.edit ? (
                      <Typography variant="h4">Welcome user,</Typography>
                    ) : (
                      <Typography sx={{}} variant="h4">
                        Hello, I guess you are new here. Please fill up the
                        below form.
                      </Typography>
                    )}
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
                          {formData.edit ? (
                            <Typography variant="h4">
                              Edit Your Details
                            </Typography>
                          ) : (
                            <Typography variant="h4">
                              Fill Your Details
                            </Typography>
                          )}
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
                              <Grid item md={2} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                                  label="Name"
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  
                                  onChange={handleName}
                                  value={formData.name}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="E-mail "
                                  error={emailErr.length>0?true:false}
                                  helperText={emailErr}
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleEmail}
                                  value={formData.email}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Roll Number"
                                  color="fields"
                                  inputMode="text"
                                  disabled={true}
                                  fullWidth={true}
                                  // onChange={handleRoll}
                                  value={rollNo}
                                />
                              </Grid>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Phone"
                                  error={phErr.length>0?true:false}
                                  helperText={phErr}
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handlePhone}
                                  value={formData.phone}
                                />
                              </Grid>
                              <Grid item md={4} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Aadhar Number"
                                  color="fields"
                                  error={aadharErr.length>0?true:false}
                                  helperText={aadharErr}
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handleAadhar}
                                  value={formData.aadharNumber}
                                />
                              </Grid>
                              <Grid item md={3} sx={{ margin: "10px" }}>
                                <TextField
                                  sx={{ fontSize: "20px" }}
                                  label="Blood Group"
                                  color="fields"
                                  inputMode="text"
                                  error={bloodErr.length>0?true:false}
                                  helperText={bloodErr}
                                  fullWidth={true}
                                  onChange={handleBloodGrp}
                                  value={formData.bloodgrp}
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
                                  value={formData.addrss}
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
                                  value={formData.fatherName}
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
                                  value={formData.motherName}
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
                                    value={formData.country}
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
                                    value={formData.state}
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
                                  error={pinErr.length>0?true:false}
                                  helperText={pinErr}
                                  color="fields"
                                  inputMode="text"
                                  fullWidth={true}
                                  onChange={handlePin}
                                  value={formData.pincode}
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
                                  value={formData.city}
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
                sx={{
                  flex: "1",

                  height: "100vh",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <Box mx={2} my={5}>
                  <Typography variant="h4">
                    Welcome user, below are your general details.
                  </Typography>
                </Box>
                <Box marginTop={6} marginLeft="150px" p={3}>
                  <Card
                    elevation={5}
                    sx={{
                      borderRadius: 5,
                      // backgroundColor: "#e25474",

                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      transition: "0.5s",
                      width: "900px",
                      marginBottom: "10px",
                      backgroundColor: "#3f3f47",
                      padding: "20px",
                    }}
                  >
                    <Grid container direction="column" >
                      <Box sx={{ position: "sticky", right: "82rem" ,display:'inline-flex',justifyContent:'right'}}>
                        <IconButton onClick={handleEdit}>
                          <EditOutlinedIcon fontSize="large" color="pink" />
                        </IconButton>
                      </Box>
                      <Grid item sx={{ padding: "8px" }}>
                        <Typography
                          variant="h5"
                          color="white"
                          fontWeight="bold"
                        >
                          Personal Details :
                        </Typography>
                      </Grid>

                      <Grid container>
                        <Grid item md={3} className={classes.gridItems}>
                          <Typography alignSelf="center" variant="h6">
                            Name
                          </Typography>
                        </Grid>
                        <Grid
                          width="20px"
                          className={classes.gridItems}
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          alignSelf="center"
                          className={classes.gridItems}
                          md={3}
                        >
                          <Typography variant="h6">{formData.name}</Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          md={3}
                          className={classes.gridItems}
                          alignSelf="center"
                        >
                          <Typography variant="h6">Email</Typography>
                        </Grid>
                        <Grid
                          width="20px"
                          className={classes.gridItems}
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">{formData.email}</Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">Roll no</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.rollNo}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">Aadhar number</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.aadharNumber}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6"> Blood grp</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.bloodgrp}
                          </Typography>
                        </Grid>
                      </Grid>

                      {/* <Box> */}
                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">Contact no</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">{formData.phone}</Typography>
                        </Grid>
                      </Grid>
                      {/* </Box> */}

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="flex-start"
                          md={3}
                        >
                          <Typography variant="h6">Address</Typography>
                        </Grid>
                        <Grid
                          item
                          alignSelf="flex-start"
                          className={classes.gridItems}
                          width="20px"
                        >
                          :
                        </Grid>
                        <Grid
                          sx={{ wordWrap: "break-word" }}
                          item
                          className={classes.gridItems}
                          alignSelf="flex-start"
                          md={6}
                        >
                          <Typography flexWrap="wrap" variant="h6">
                            {formData.addrss}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item sx={{ padding: "8px", marginTop: "20px" }}>
                        <Typography
                          variant="h5"
                          color="white"
                          fontWeight="bold"
                        >
                          Relational Details :
                        </Typography>
                      </Grid>

                      <Grid container>
                        <Grid item className={classes.gridItems} md={3}>
                          <Typography alignSelf="center" variant="h6">
                            Mother's Name
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.motherName}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">Father's Name</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>

                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.fatherName}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item sx={{ padding: "8px", marginTop: "20px" }}>
                        <Typography
                          variant="h5"
                          color="white"
                          fontWeight="bold"
                        >
                          Address Details :
                        </Typography>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">Country</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>

                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.country}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">State</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">{formData.state}</Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">Pin code</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>

                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">
                            {formData.pincode}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={3}
                        >
                          <Typography variant="h6">City</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.gridItems}
                          width="20px"
                          alignSelf="center"
                        >
                          :
                        </Grid>

                        <Grid
                          item
                          className={classes.gridItems}
                          alignSelf="center"
                          md={2}
                        >
                          <Typography variant="h6">{formData.city}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Box>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default GeneralDetails;
