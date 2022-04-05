import SemCards from "./SemCards";
import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
function ListSemCards(props) {
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
  return <Grid container>{content}</Grid>;
}
export default ListSemCards;
