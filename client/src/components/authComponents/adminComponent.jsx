import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Card, Grid, Typography, Button, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Email } from "@mui/icons-material";

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
    left: "390px",
    zIndex: 10,
    bottom: "260px",
  },
  leftCircle: {
    width: "200px",
    height: "220px",
    background: "linear-gradient(45deg, #26e2d9 , #58a8dd,#a46ef5)",
    position: "absolute",
    borderRadius: "50%",
    right: "560px",
    top: "500px",
    // bottom: "1%",
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

const AdminComponent = () => {
  let theme = useTheme();
  let navigate = useNavigate();
  let [boolErr, setBoolErr] = useState(false);
  let [errormsg, setErr] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleEmail = (e) => {
    let email = e.target.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value.match(emailRegex)) {
      setErr("");
      setBoolErr(false);
    } else {
      setBoolErr(true);
      setErr("Please enter valid email.");
    }
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:9000/admin/signin", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        console.log("Status is :", res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.err) {
          return navigate("/admin");
        }

        return navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                  Admin Login
                </Typography>
              </Grid>

              <Grid item>
                <Box className={classes.rightCircle}></Box>
              </Grid>

              <Grid item sx={{ marginTop: "60px" }}>
                <TextField
                  sx={{ fontSize: "20px" }}
                  label="E-mail"
                  color="login"
                  inputMode="email"
                  fullWidth={true}
                  error={boolErr}
                  onChange={handleEmail}
                  value={email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: theme.palette.login.main }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Typography color="red" fontSize="12px">
                {" "}
                {errormsg}
              </Typography>

              <Grid item sx={{ marginTop: "50px" }}>
                <TextField
                  sx={{ fontSize: "20px" }}
                  label="Password"
                  fullWidth={true}
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  color="login"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon
                          sx={{ color: theme.palette.login.main }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item>
                <Box className={classes.leftCircle}></Box>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleLogin}
                  sx={{
                    background: "linear-gradient(90deg,#ad44cd,#4c00ff)",
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
            </Box>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default AdminComponent;
