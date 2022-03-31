import { Grid } from "@mui/material";
import React from "react";
import SideBar from "./sidebar";

const Index = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          <h1>General Details Page</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
