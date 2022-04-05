import EditOutlined from "@mui/icons-material/EditOutlined";
import { Grid, IconButton } from "@mui/material";
import { grid } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../Dashboard/sidebar";
import { connectionHandler, getSemDetails, getSemSubjects } from "./getHandler";
import SetSemester from "./SetSemesterTable";
function SemesterTable(props) {
  let [subs, setSubs] = useState([]);
  let [marks, setMarks] = useState([]);
  let [click, setClick] = useState(false);
  let query = useParams();
  console.log(query);
  const handleClick=()=>{setClick((prev)=>!prev)};
  // connectionHandler();
  // console.log("Before Calling", subs);
  if (click == false) {
    let account = localStorage.getItem("address");
    if (subs.length == 0) {
      getSemSubjects(query['sem'], account).then((res, err) => {
        // console.log(account);
        console.log("Res", res);
        // console.log("Res leng", res.length);
        // console.log("Type", res[1]);
        console.log("ERR", err);
        setSubs([...res]);
      });
    }
    if (marks.length == 0) {
      getSemDetails(query['sem'], account).then((res, err) => setMarks([...res]));
    }
    // console.log(subs, subs.length);
    let content = [];
    // content.push(<Grid item><EditOutlinedIcon /></Grid>)
    content.push(
      <>
        <Grid item xs={6} sx={{ margin: 2 }} fontWeight="bold">
          Subject Name
        </Grid>
        <Grid
          item
          display="flex"
          justifyItems="center"
          alignItems="center"
          fontWeight="bold"
        >
          Grade
        </Grid>
      </>
    );
    let sum = 0;
    let length = 0;
    for (let i = 0; i < subs.length && marks[i] != "0"; i++) {
      sum += parseInt(marks[i]);
      length += 1;
      // console.log(i, subs[i]);
      content.push(
        <>
          <Grid item xs={6} sx={{ margin: 2 }}>
            {subs[i]}
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
            {marks[i]}
          </Grid>
        </>
      );
    }
    let total = sum / length;
    content.push(
      <>
        <Grid item xs={6} sx={{ margin: 2 }} fontWeight="bold">
          Total GPA
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          {total.toPrecision(3)}
        </Grid>
      </>
    );
    return subs.length == 0 ? (
      <>Loading</>
    ) : (
      <Grid container>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item position='relative' left='30rem' height='fit-content'>
          <Grid container>
            <Grid item>
              <IconButton onClick={handleClick}>
          <EditOutlined color='pink'/>
          </IconButton>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container margin={5}>
            {content}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  else{
    return <SetSemester edit={true} marks={marks} />
  }
}
export default SemesterTable;
