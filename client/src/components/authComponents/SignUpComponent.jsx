import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

function SignUpBox(props) {
  let navigate = useNavigate();
  let [rollNo, setRollno] = useState("");
  let [errormsg, setErr] = useState("");
  let [password, setPassword] = useState("");
  let [boolErr, setBoolErr] = useState(false);
  let theme = useTheme();
  const addressHandler = (event) => {
    setRollno(event.target.value);
    console.log(rollNo);
    console.log(theme);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = (event) => {
    fetch("/auth/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        rollNo: rollNo,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const confirmPassHandler = (event) => {
    if (password != event.target.value) {
      setErr("Password should be same");
      setBoolErr(true);
    } else {
      setBoolErr(false);
      setErr("");
    }

    console.log(boolErr);
  };
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #26e2d9 , #58a8dd,#a46ef5)",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 1 / 4,
          padding: 5,
          margin: "auto",
          backgroundColor: "white",
          position: "absolute",
          top: "15%",
          left: "35%",
        }}
      >
        {/* <FormControl> */}
        <Grid container direction="column">
          <Grid items>
            <Typography
              color={theme.palette.login.main}
              fontSize="18px"
              fontWeight="bold"
            >
              Sign Up
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: 5 }}>
            <TextField
              inputMode="email"
              color={"login"}
              label="Enter Roll Number"
              onChange={addressHandler}
              placeholder="Eg. 2451YYBBBNNN"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: theme.palette.login.main }} />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item sx={{ marginTop: 5 }}>
            <TextField
              type="password"
              label="Enter Password"
              onChange={passwordHandler}
              color={"login"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: theme.palette.login.main }} />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item sx={{ marginTop: 5 }}>
            <TextField
              color={"login"}
              type="password"
              onChange={confirmPassHandler}
              label="Retype your Password"
              error={boolErr}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: theme.palette.login.main }} />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Typography color="red" fontSize="12px">
            {" "}
            {errormsg}
          </Typography>
          <Grid item sx={{ marginTop: 5, marginX: 3, marginBottom: 2 }}>
            <Button
              fullWidth={true}
              variant="contained"
              {...props}
              onClick={handleSignup}
              sx={{
                textTransform: "capitalize",
                background: "linear-gradient(90deg,#ad44cd,#4c00ff)",
              }}
            >
              submit
            </Button>
          </Grid>
        </Grid>
        {/* </FormControl> */}
        <Typography fontSize="12px" color="grey">
          Already have an account ?{" "}
          <Link style={{ textDecoration: "none" }} to="/">
            <Button
              variant="text"
              color="login"
              sx={{ textTransform: "capitalize", fontSize: "13px" }}
            >
              Login here!
            </Button>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
export default SignUpBox;
