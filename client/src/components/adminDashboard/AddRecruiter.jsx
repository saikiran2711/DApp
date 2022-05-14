import { TextField, Typography,Button, Grid } from "@mui/material";
import React, { useState } from "react";
function AddRecruiter(props){
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let adminEmail=localStorage.getItem('admin')
    const handleSubmit=()=>{
        fetch("http://localhost:9000/admin/addRecruiter",{
            method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify({
          email:email,
          password:password,
          adminEmail:adminEmail
      })
        })
    }
return (
    <Grid container>
        <Grid item>
    <Typography>Register a Recruiter</Typography>
    </Grid>
    
    <Grid item xs={12} margin={1}>
        <Typography display="inline-flex">Recruiter's Email : </Typography>
    <TextField sx={{justifyContent:'center'}} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" label="Email"></TextField>
    </Grid>
    <Grid item xs={12} margin={1}>
    <TextField onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" label="Password" ></TextField>
    </Grid>
    <Grid item xs={12} margin={1}>
    <Button onClick={handleSubmit} variant="outlined" sx={{textTransform:'capitalize'}}>Submit</Button>
    </Grid>
    </Grid>
);
}

export default AddRecruiter