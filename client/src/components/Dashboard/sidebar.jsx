import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  sideBarBox: {
    backgroundColor: "#3f3f47",
    height: "96.9vh",
    width: "18rem",
    margin: "15px",
    borderRadius: "10px",
    // overflow: "",
    // position: "fixed",
  },
  heading: {
    color: "white",
    padding: "20px",
    borderBottom: "1px solid GrayText",
  },
  sideBarItems: {
    backgroundColor: "#e25474",
    color: "#d9d4a5",
    // "&:hover": {
    //   backgroundColor: "#55555a",
    // },
    padding: "12px",
    borderRadius: "10px",
  },
  notsideBarItems: {
    // backgroundColor: "#e25474",
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
  const url = window.location.pathname;
  return (
    <Grid container>
      <Grid item>
        <Box className={classes.sideBarBox}>
          <Grid container direction="column">
            <Grid item textAlign="center" className={classes.heading}>
              <h1>DAppbase</h1>
            </Grid>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <Grid
                item
                sx={{
                  marginTop: "8px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={`${
                  url.match("/dashboard")
                    ? `${classes.sideBarItems}`
                    : `${classes.notsideBarItems}`
                }`}
              >
                <Typography sx={{ color: "white" }}>Dashboard </Typography>{" "}
              </Grid>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/general">
              <Grid
                item
                sx={{
                  marginTop: "2px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={`${
                  url.match("/general")
                    ? `${classes.sideBarItems}`
                    : `${classes.notsideBarItems}`
                }`}
              >
                <Typography sx={{ color: "white" }}>General Details</Typography>{" "}
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
                classNa
                className={`${
                  url.match("/educationalDetails")
                    ? `${classes.sideBarItems}`
                    : `${classes.notsideBarItems}`
                }`}
                me={classes.sideBarItems}
              >
                <Typography sx={{ color: "white" }}>
                  Educational Details
                </Typography>
              </Grid>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to="/account">
              <Grid
                item
                sx={{
                  marginTop: "2px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                classN
                className={`${
                  url.match("/account")
                    ? `${classes.sideBarItems}`
                    : `${classes.notsideBarItems}`
                }`}
                ame={classes.sideBarItems}
              >
                <Typography sx={{ color: "white" }}>Account</Typography>
              </Grid>
            </Link> */}
            <Link style={{ textDecoration: "none" }} to="/logout">
              <Grid
                item
                sx={{
                  marginTop: "2px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                className={classes.notsideBarItems}
              >
                <Typography sx={{ color: "white" }}>Logout</Typography>
              </Grid>
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SideBar;
