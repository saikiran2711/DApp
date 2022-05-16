import { TextField, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AdminSideBar from "./sidebar";
function AddRecruiter(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let adminEmail = localStorage.getItem("admin");
  const handleSubmit = () => {
    fetch("http://localhost:9000/admin/addRecruiter", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        adminEmail: adminEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data : ", data);
      });
  };
  return (
    <Grid container>
      <Grid item>
        <AdminSideBar />
      </Grid>
      <Grid
        item
        sx={{
          flex: 1,
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Grid container>
          <Grid item>
            <Typography>Register a Recruiter</Typography>
          </Grid>

          <Grid item xs={12} margin={1}>
            <Typography display="inline-flex">Email : </Typography>
            <TextField
            size="small"
              sx={{ justifyContent: "center" }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              label="Email"
            ></TextField>
          </Grid>
          <Grid item margin={1}>
            <Typography display="inline-flex">
              Password :{" "}
            </Typography>

            <TextField
            size="small"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              label="Password"
            ></TextField>

          </Grid>
          <Grid item xs={12} margin={1}>
            <Button
              onClick={handleSubmit}
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddRecruiter;
