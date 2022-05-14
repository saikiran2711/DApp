import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSemDetails, getSemSubjects, setSemDetails } from "./getHandler";
import SideBar from "../Dashboard/sidebar";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { useParams } from "react-router";
import { StartRounded } from "@mui/icons-material";
import AdminSideBar from "../adminDashboard/sidebar";
function SetSemester(props) {
  let [subs, setSubs] = useState([]);
  let [marks, setMarks] = useState({});
  let query = useParams();
  let nav = useNavigate();
  // let [result,setResult]=useState([]);
  // connectionHandler();
  console.log("Before Calling", subs);
  let result = [];
  const starter = async () => {
    console.log("Props are : ", props);
    console.log(props.edit);
    if (props.edit == true) {
      let mar = await getSemDetails(query["sem"], account);
      let sub = await getSemSubjects(query["sem"], account);
      console.log(mar, sub);
      let tempM = {};
      for (let i = 0; i < sub.length; i++) {
        tempM[sub[i]] = mar[i];
      }
      console.log("temp Marks : " + tempM);
      setMarks({ ...tempM });
      console.log("Marks SET", marks);
    }
  };
  useEffect(() => {
    starter();
  }, [props.edit]);

  const handleInputToContracts = async () => {
    console.log("IN handleINPUTCONTRACT!!!!");
    for (let i = 0; i < subs.length; i += 1) {
      console.log(result[i]);
      result[i] = marks[subs[i]];
    }
    let r = await setSemDetails(query["sem"], account, result);
    let roll = localStorage.getItem("roll");
    console.log(r);
    let d = new Date();
    fetch("http://localhost:9000/auth/setSemData", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        rollNo: roll,
        TransactionID: r.transactionHash,
        logMsg: `Semester ${query["sem"]} Update`,
        Time: d.toDateString(),
        GasUsed: `${r.gasUsed} GWei`,
        ContractAdd: r.to,
      }),
    })
      .then((res) => {
        return res.json();
        // console.log(res.data);
      })
      .then((data) => {
        console.log("Data is : ", data);
        props.admin
          ? nav(`/admin/educationDetails/${query["sem"]}`)
          : nav(`/educationalDetails/${query["sem"]}`);
      })
      .catch((err) => {
        console.log("Error is ", err);
      });

    console.log("Props are : ", props);
  };
  const handle = (subject, value) => {
    console.log(subject);
    let tempmarks = {};
    tempmarks[subject] = !isNaN(parseInt(value)) ? parseInt(value) : 0;
    console.log("Object keys ", Object.entries(tempmarks));
    setMarks((prev) => ({ ...prev, ...tempmarks }));
    console.log(marks);
  };

  let account = localStorage.getItem("address");
  // starter();
  if (subs.length == 0) {
    console.log(subs.length, "Sbu length");
    console.log(subs);
    getSemSubjects(query["sem"], account).then((res, err) => {
      console.log(account);
      console.log("MArks arwe", res);
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
            defaultValue={props.edit == true ? props.marks[i] : ""}
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
    <Grid
      item
      xs={8}
      sx={{ margin: 10, display: "flex", justifyContent: "center" }}
    >
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
      <Grid item xs={4} sx={{ position: "fixed" }}>
        {props.admin ? <AdminSideBar /> : <SideBar />}
      </Grid>
      <Grid
        item
        sx={{
          position: "relative",
          left: "36rem",
          top: "1rem",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Enter marks of Semester - {query["sem"]} :
      </Grid>
      <Grid item xs={6} sx={{ marginLeft: 40 }}>
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
