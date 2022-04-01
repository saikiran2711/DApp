import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./sidebar";

const EducationPage = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "blue", flex: "1", overflowY: "auto" }}
        >
          <h1>Education Details Page</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default EducationPage;
