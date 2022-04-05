import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./sidebar";

const AccountPage = () => {
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
          <h1>Accounts Details Page</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
