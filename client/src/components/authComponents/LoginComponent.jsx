import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Card, Grid, Typography, Button, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #26e2d9 , #58a8dd,#a46ef5)",

    height: "100vh",
  },
  rightCircle: {
    width: "200px",
    height: "220px",
    background: "linear-gradient(45deg,#a46ef5 , #26e2d9 )",
    position: "absolute",
    borderRadius: "50%",
    left: "380px",
    zIndex: 10,
    bottom: "350px",
  },
  leftCircle: {
    width: "200px",
    height: "220px",
    background: "linear-gradient(45deg, #26e2d9 , #58a8dd,#a46ef5)",
    position: "absolute",
    borderRadius: "50%",
    right: "560px",
    zIndex: 10,
  },
  card: {
    height: "720px",
    width: "560px",
    margin: "auto",
    opacity: "0.9",
    position: "relative",
    top: "14%",
  },
  loginTypo: {
    color: "#26e2d9",
    direction: "left",
  },
});

const LoginComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Card className={classes.card}>
          <Grid
            container
            direction="column"
            sx={{ position: "relative", left: "15%" }}
          >
            <Box
              sx={{
                marginTop: "8rem",
                width: "400px",
              }}
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: "50px", fontWeight: "bold" }}
                  className={classes.loginTypo}
                >
                  Login
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: "GrayText" }}>
                  Enter your details below to continue
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.rightCircle}></Box>
              </Grid>

              <Grid item sx={{ marginTop: "90px" }}>
                <TextField
                  sx={{ fontSize: "20px" }}
                  label="Roll Number"
                  color="login"
                  inputMode="text"
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item sx={{ marginTop: "50px" }}>
                <TextField
                  sx={{ fontSize: "20px" }}
                  label="Password"
                  fullWidth={true}
                  type="password"
                  color="login"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ marginTop: "20px" }}>
                <Typography>Forgot password ?</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.leftCircle}></Box>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    background:'linear-gradient(90deg,#ad44cd,#4c00ff)',
                    textTransform: "none",
                    width: "400px",
                    marginTop: "30px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
              </Grid>
              <Grid item sx={{ marginTop: "40px" }}>
                <Typography
                  sx={{
                    color: "GrayText",
                    fontSize: "20px",
                  }}
                >
                  Don't have an account ?
                  <Link
                    to="/signup"
                    className={classes.loginTypo}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      color="login"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Link>
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default LoginComponent;
