import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getSemSubjects, setSemDetails } from "./getHandler";
import SideBar from "../Dashboard/sidebar";
import { ClassNames } from "@emotion/react";
import { useParams } from "react-router";
function SetSemester(props) {
  let [subs, setSubs] = useState([]);
  let [marks, setMarks] = useState({});
  let query=useParams();
  // let [result,setResult]=useState([]);
  // connectionHandler();
  console.log("Before Calling", subs);
  let result = [];
  const handleInputToContracts = async () => {
    console.log("IN handleINPUTCONTRACT!!!!");
    for (let i = 0; i < subs.length; i += 1) {
      result[i] = marks[subs[i]];
    }
    let r = await setSemDetails(query['sem'],account, result);
    console.log(r);
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
  if (subs.length == 0) {
    console.log(subs.length,"Sbu length");
    console.log(subs);
    getSemSubjects(query['sem'],account).then((res, err) => {
      console.log(res);
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
      <Grid item xs={4}>
        <SideBar />
      </Grid>
      <Grid item xs={6}>
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
