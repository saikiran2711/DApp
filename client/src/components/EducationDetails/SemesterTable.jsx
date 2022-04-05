import { Grid,Box } from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../Dashboard/sidebar";
import { connectionHandler, getSemDetails, getSemSubjects } from "./getHandler";
function SemesterTable(props) {
  let [subs, setSubs] = useState([]);
  let [marks,setMarks]=useState([]);
  // connectionHandler();
  // console.log("Before Calling", subs);
  let account = localStorage.getItem("address");
  if (subs.length == 0) {
    getSemSubjects(account).then((res, err) => {
      // console.log(account);
      // console.log("Res", res);
      // console.log("Res leng", res.length);
      // console.log("Type", res[1]);
      // console.log("ERR", err);
      setSubs([...res]);
    });
  }
  if(marks.length==0){
    getSemDetails(account).then((res,err)=>setMarks([...res]));
  }
  // console.log(subs, subs.length);
  let content = [];
  content.push(
    <>
      <Grid item xs={6} sx={{ margin: 2 }} fontWeight='bold'>
        Subject Name
      </Grid>
      <Grid item display="flex" justifyItems="center" alignItems="center" fontWeight='bold'>
        Grade
      </Grid>
    </>
  );
  let sum=0;
  for (let i = 0; i < subs.length; i++) {
    sum+=parseInt(marks[i]);
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
  let total=sum/(marks.length);
  content.push(<><Grid item xs={6} sx={{ margin: 2 }} fontWeight='bold'>Total GPA</Grid><Grid item display="flex" justifyContent="center" alignItems="center" fontWeight='bold'>{total.toPrecision(3)}</Grid></>)
  return subs.length == 0 ? (
    <>Loading</>
  ) : (

    <Grid container>
      <Grid item xs={4}>
      <SideBar />
    </Grid>
    <Grid item xs={6}>
    <Grid container margin={5} >
      {content}
      </Grid>
    </Grid>
    </Grid>

  );
}
export default SemesterTable;
