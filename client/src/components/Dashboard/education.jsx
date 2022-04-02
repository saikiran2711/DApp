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
<<<<<<< HEAD
        <Grid item>
=======
        <Grid
          item
          sx={{ backgroundColor: "blue", flex: "1", overflowY: "auto" }}
        >
>>>>>>> 347379d18aa4b9ca12a9a607b978897f5e049037
          <h1>Education Details Page</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default EducationPage;
