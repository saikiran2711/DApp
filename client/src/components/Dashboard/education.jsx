import React from "react";
import { Button, Grid } from "@mui/material";
import SideBar from "./sidebar";
import { connectionHandler } from "../EducationDetails/getHandler.js";
import SemesterTable from "../EducationDetails/SemesterTable";
import ListSemCards from "../EducationDetails/ListSemCards";
const EducationPage = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid
          item
          sx={{ flex: "1", overflowY: "auto" }}
        >
          <ListSemCards />
          {/* <Button onClick={connectionHandler}>Click me</Button> */}
        </Grid>
      </Grid>
    </>
  );
};

export default EducationPage;
