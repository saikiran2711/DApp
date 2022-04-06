import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSemDetails, getSemSubjects, setSemDetails } from "./getHandler";
import SideBar from "../Dashboard/sidebar";
import { ClassNames } from "@emotion/react";
import { useNavigate, useParams } from "react-router";
import { StartRounded } from "@mui/icons-material";
function SetSemester(props) {
  let [subs, setSubs] = useState([]);
  let [marks, setMarks] = useState({});
  let query=useParams();
  let nav=useNavigate();
  // let [result,setResult]=useState([]);
  // connectionHandler();
  console.log("Before Calling", subs);
  let result = [];
  const starter=async()=>{
    console.log(props.edit);
    if(props.edit==true){
    let mar=await getSemDetails(query['sem'],account);
    let sub=await getSemSubjects(query['sem'],account);
    console.log(mar,sub)
    let tempM={}
    for(let i=0;i<sub.length;i++){
      tempM[sub[i]]=mar[i];
    }
    console.log('temp Marks : '+tempM);
    setMarks({...tempM})
    console.log("Marks SET",marks)
  }
  }
  useEffect(()=>{
    starter();
  },[props.edit]);

  const handleInputToContracts = async () => {

    console.log("IN handleINPUTCONTRACT!!!!");
    for (let i = 0; i < subs.length; i += 1) {
      console.log(result[i]);
      result[i] = marks[subs[i]];
    }
    let r = await setSemDetails(query['sem'],account, result);
    console.log(r);
    nav(`/educationalDetails/`)
  };
  const handle = (subject, value) => {
    console.log(subject);
    let tempmarks = {};
    tempmarks[subject] = value.length > 0 ? parseInt(value) : 0;
    console.log(Object.entries(tempmarks));
    setMarks((prev) => ({ ...prev, ...tempmarks }));
    console.log(marks);
  };

  let account = localStorage.getItem("address");
  // starter();
  if (subs.length == 0) {
    console.log(subs.length,"Sbu length");
    console.log(subs);
    getSemSubjects(query['sem'],account).then((res, err) => {
      console.log(account);
      setSubs([...res]);
    });
  }
  let content = [];
  for (let i = 0; i < subs.length; i++) {
    content.push(
      <>
        <Grid item xs={6} padding={2} display="flex" alignItems="center">
          {subs[i]}
        </Grid>
        <Grid item xs={6} padding={2} display="flex" alignItems="center">
          <TextField
            error={marks[subs[i]] > 10 || marks[subs[i]] < 5 ? true : false}
            onChange={(e) => handle(subs[i], e.target.value)}
            defaultValue={props.edit==true?props.marks[i]:''}
            sx={{ width: 1 / 5 }}
          />
          <Typography color="red">
            {marks[subs[i]] > 10 || marks[subs[i]] < 5
              ? "Enter valid score"
              : ""}
          </Typography>
        </Grid>
      </>
    );
  }
  content.push(
    <Grid item xs={8} sx={{margin:10,display:'flex',justifyContent:'center'}}>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize" }}
        onClick={handleInputToContracts}
      >
        Submit
      </Button>
    </Grid>
  );
  return subs.length > 0 ? (
    <Grid container>
      <Grid item xs={4} sx={{position:'fixed'}}>
        <SideBar />
      </Grid>
      <Grid item sx={{marginLeft:10}}>
        Enter marks of Semester - {query['sem']}
      </Grid>
      <Grid item xs={6} sx={{overflow:'scroll',marginLeft:40}}>
        <Grid container margin={5}>
          {content}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <>Loading</>
  );
}
export default SetSemester;
