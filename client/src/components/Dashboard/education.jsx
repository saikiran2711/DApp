import React from "react";
import { Button, Grid } from "@mui/material";
import SideBar from "./sidebar";
import { connectionHandler } from "../EducationDetails/getHandler.js";

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
          <Button onClick={connectionHandler}>Click me</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EducationPage;
