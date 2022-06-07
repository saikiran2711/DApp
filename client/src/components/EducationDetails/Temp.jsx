import { Grid,Box,Typography } from "@mui/material";
import React,{useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { hashProvider } from "../../App";
import SideBar from "../Dashboard/sidebar";
function ListLog(props) {
  // let [hash,setHash]=useContext(hashProvider);
  let [log,setLog]=useState([])
  const rollNo=localStorage.getItem("roll")
  const temphandle=async()=>{
    console.log("LOg Length"+log.length)
    // console.log("hash:"+hash)
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
    // (hash)?
    <Grid container>
      <Grid item xs={2}>
    <SideBar />
    </Grid>
    <Grid item xs={10}>
    <Box margin={10}>
      <Typography variant="h6" fontWeight={"#004d4d"} marginBottom={5}>Recent Update Log: </Typography>
    <Grid container border={3} borderColor={"#004d4d"} alignItems="center" justifyContent="center" rowSpacing={2}>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography textAlign="center">S.No</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography textAlign="center">Message</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography  textAlign="center">Transaction ID</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"}xs={2.4}><Typography textAlign="center">Gas used</Typography></Grid>
      <Grid item border={1} borderColor={"#004d4d"} xs={2.4}><Typography textAlign="center">Time</Typography></Grid>
      {content}
    </Grid>
    </Box>
    </Grid>
    </Grid>
    // :<Navigate to={"/login"} />
  );
}
export default ListLog;
