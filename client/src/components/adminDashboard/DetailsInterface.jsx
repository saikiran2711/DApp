import { useParams } from "react-router";
import React from "react";
import { Grid } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import SemCards from "../EducationDetails/SemCards";
import AdminSideBar from "./sidebar";
import { Link } from "react-router-dom";
function DetailsInterface(props) {
  const query = useParams();
  console.log(query["roll"]);
  return (
    <Grid container>
        <Grid item>
      <AdminSideBar />
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item>
            <SemCards sem={"Profile Details"} />
          </Grid>
          <Link to="/admin/students/view/semester" style={{ textDecoration: "none" }} >
          <Grid item>
            <SemCards sem={"Semester Details"} />
          </Grid>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DetailsInterface;
