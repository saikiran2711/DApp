import SemCards from "./SemCards";
import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SideBar from "../Dashboard/sidebar";
function ListSemCards(props) {
  let content = [];
  for (let i = 0; i < 8; i++)
    content.push(
      <Grid item>
        <Link
          to={"/educationalDetails/" + (i + 1)}
          style={{ textDecoration: "none" }}
        >
          <SemCards sem={"Semester - " + (i + 1)} id={i + 1}></SemCards>
        </Link>
      </Grid>
    );
  return (
    <Grid container>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <Grid container>{content}</Grid>
      </Grid>
    </Grid>
  );
}
export default ListSemCards;
