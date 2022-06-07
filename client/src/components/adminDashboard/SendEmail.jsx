import { TextareaAutosize } from "@mui/base";
import { InputLabel, Box, TextField, Button, Grid } from "@mui/material";

import React, { useState } from "react";

function SendEmail(props) {
  let [body, setBody] = useState("");
  let [subject, setSubject] = useState("");
  let to=localStorage.getItem('ToEmail');
  let [toEmail,setToEmail]=useState(to)
  const handleSubmit=()=>{
    fetch("http://localhost:9000/admin/sendEmail",{
        method:"post",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify(
            {
                subject:subject,
                body:body,
                email:toEmail
            }
        )
    }).then((value)=>{
        console.log(value);
    })
  }
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <TextField placeholder="To : " onChange={(e)=>setToEmail(e.target.value)} value={toEmail}/>
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </Grid>
      {/* <InputLabel>From : </InputLabel> */}
      <Grid item xs={12}>
        <TextareaAutosize
          placeholder="Enter text to send"
          onChange={(e) => setBody(e.target.value)}
          style={{ border: "black" }}
          minRows={4}
        />
      </Grid>
      <Grid item>
        <Button onClick={handleSubmit} variant="outlined" sx={{ textTransform: "capitalize" }}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
export default SendEmail;
