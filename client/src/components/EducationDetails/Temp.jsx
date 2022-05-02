import { Grid,Box,Typography } from "@mui/material";
import React,{useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { hashProvider } from "../../App";
function ListLog(props) {
  let [hash,setHash]=useContext(hashProvider);
  let [log,setLog]=useState([])
  const rollNo=localStorage.getItem("roll")
  const temphandle=async()=>{
    if(log.length==0){
    const data=  fetch("http://localhost:9000/auth/log",{
      method:'post',
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify({
        rollNo:rollNo
      })
    }).then((data)=>{
     data.json().then((d)=>{
       console.log(d.log)
       setLog(d.log);
    })
    })
    console.log("LOG"+log);
  }
}
    temphandle();
  let content=[]
  for(let i =0 ;i<log.length;i++){
    content.push(
      <>
<Grid item xs={2.4}><Typography textAlign="center">{i+1}</Typography></Grid>
<Grid item xs={2.4}><Typography textAlign="center">{log[i]['Msg']}</Typography></Grid>
<Grid item xs={2.4}><Typography textAlign="center" fontSize={9} overflow="auto">{log[i]["TransactionID"]}</Typography></Grid>
<Grid item xs={2.4}><Typography textAlign="center">{log[i]["GasUsed"]}</Typography></Grid>
<Grid item xs={2.4}><Typography textAlign="center">{log[i]["Time"]}</Typography></Grid>
</>
    );
  }
  return (
    (hash)?
    <Box margin={10}>
      <Typography variant="h6" fontWeight={"#004d4d"} marginBottom={5}>Recent Update Log: </Typography>
    <Grid container border={3} borderColor={"#004d4d"} alignItems="center" justifyContent="center" rowSpacing={2}>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography textAlign="center">S.No</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography textAlign="center">Message</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography  textAlign="center">Transaction ID</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"}xs={2.4}><Typography textAlign="center">Gas used</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography textAlign="center">Time</Typography></Grid>
      {content}
      {/* <Grid item xs={3}>S.No</Grid>
      <Grid item xs={3}>Log Message</Grid>
      <Grid item xs={3}>Date</Grid>
      <Grid item xs={3}>Transaction Hash</Grid>
      <Grid item xs={3}>1</Grid>
      <Grid item xs={3}>First Mesg</Grid>
      <Grid item xs={3}>Now</Grid>
      <Grid item xs={3}>0xfdjknjavdk</Grid>
      <Grid item xs={3}>2</Grid>
      <Grid item xs={3}>msg....</Grid>
      <Grid item xs={3}>prev</Grid>
      <Grid item xs={3}>0xvnjdklsvnal</Grid>
      <Grid item xs={3}>3</Grid>
      <Grid item xs={3}>Log Message</Grid>
      <Grid item xs={3}>Date</Grid>
      <Grid item xs={3}>Transaction Hash</Grid>
      <Grid item xs={3}><Button onClick={(e)=>handle()}>CLIKC</Button></Grid> */}
    </Grid>
    </Box>
    :<Navigate to={"/login"} />
  );
}
export default ListLog;