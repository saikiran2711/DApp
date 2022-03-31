import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  sideBarBox: {
    backgroundColor: "#3f3f47",
    height: "100vh",
    width: "18rem",
    margin: "15px",
    borderRadius: "10px",
    overflow: "auto",
    // position: "fixed",
  },
  heading: {
    color: "white",
    padding: "20px",
    borderBottom: "1px solid GrayText",
  },
  sideBarItems: {
    // backgroundColor: "pink",
    color: "#d9d4a5",
    "&:hover": {
      backgroundColor: "#55555a",
    },
    padding: "12px",
    borderRadius: "10px",
  },
});
const SideBar = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sx={{ backgroundColor: "red" }}>
        <Box className={classes.sideBarBox}>
          <Grid container direction="column">
            <Grid item textAlign="center" className={classes.heading}>
              <h1>Dashboard</h1>
            </Grid>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <Grid
                item
                sx={{
                  marginTop: "8px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={classes.sideBarItems}
              >
                <Typography>General Detals</Typography>{" "}
              </Grid>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/educationalDetails">
              <Grid
                item
                sx={{
                  marginTop: "2px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={classes.sideBarItems}
              >
                <Typography>Educational Details</Typography>
              </Grid>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/account">
              <Grid
                item
                sx={{
                  marginTop: "2px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={classes.sideBarItems}
              >
                <Typography>Account</Typography>
              </Grid>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <Grid
                item
                sx={{
                  marginTop: "2px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={classes.sideBarItems}
              >
                <Typography>Logout</Typography>
              </Grid>
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SideBar;
