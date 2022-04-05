import SemCards from "./SemCards";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SideBar from "../Dashboard/sidebar";
import { semInitializer } from "./getHandler";
function ListSemCards(props) {
  let a=localStorage.getItem('address');
  useEffect(()=>{
    semInitializer().then((res,err)=>console.log(res));
  },[]);
  let content = [];
  for (let i = 0; i < 8; i++)
    content.push(
      <Grid item>
        <Link
          to={"/educationalDetails/" + (i + 1)}
          style={{ textDecoration: "none" }}
        >
          <SemCards sem={"Semester - " + (i + 1)}></SemCards>
        </Link>
      </Grid>
    );
  return (
    <Grid container>
      <Grid item>
      <SideBar />
      </Grid>
      <Grid item xs={8} >
      <Grid container>{content}</Grid>
      </Grid>
    </Grid>
  );
}
export default ListSemCards;
