import React, { useEffect, useState } from "react";
import AdminSideBar from "./sidebar";
import {
  Grid,
  Box,
  Typography,
  Card,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
const RecruiterDashboard = () => {
  const [data, setdata] = useState();
  const handleChangePass=(email,pass)=>{
    fetch("http://localhost:9000/admin/changePassword",{
      
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        
      body:JSON.stringify({email:email,newPassword:pass})
    })
  }
  useEffect(() => {
    fetch("http://localhost:9000/admin/recruiters")
      .then((res) => {
        return res.json();
        // console.log(res.data);
      })
      .then((data) => {
        console.log(data.data);
        setdata(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {!data ? (
        <CircularProgress />
      ) : (
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
            <Grid container direction="column">
              <Grid item>
                <Box sx={{ padding: "10px", margin: "20px" }}>
                  <Typography variant="h4">Recruiters Details</Typography>
                </Box>
              </Grid>
              <Grid item></Grid>
              <Grid
                item
                sx={{
                  padding: "15px",
                  marginTop: "3rem",

                  flex: "1",
                }}
              >
                <Paper
                  sx={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    backgroundColor: "#e25473",
                    zIndex: 10,
                    height: "60px",
                    padding: "10px",
                    position: "relative",
                    top: "28px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{ padding: "10px" }}
                  >
                    Recruiter's Status Table
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    height: "600px",
                    overflowY: "auto",
                    borderRadius: "10px",
                    backgroundColor: "#3f3f47",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      // backgroundColor: "blue",
                      // padding: "10px",
                      marginTop: "3rem",
                    }}
                  >
                    <Grid
                      item
                      md={8}
                      sx={{
                        padding: "8px",
                        borderBottom: "1px solid #aaacbe",
                        //   borderBottomColor: "GrayText",
                      }}
                    >
                      <Typography variant="h6" color="white">
                        Recruiter's email
                      </Typography>
                      
                    </Grid>
                    <Grid item md={4}  sx={{
                        padding: "8px",
                        borderBottom: "1px solid #aaacbe",
                        //   borderBottomColor: "GrayText",
                      }}>
                        <Typography variant="h6" color="white">Action</Typography>
                        </Grid>
                    {/* <Grid
                      item
                      md={3}
                      sx={{
                        padding: "8px",
                        borderBottom: "1px solid #aaacbe",
                      }}
                    >
                      <Typography variant="h6" color="white">
                        Role
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={3}
                      sx={{
                        padding: "8px",
                        borderBottom: "1px solid #aaacbe",
                      }}
                    >
                      <Typography variant="h6" color="white">
                        Status{" "}
                      </Typography>
                    </Grid> */}

                    {data.map((d) => {
                      return (
                        <Grid container>
                          <Grid
                            item
                            alignSelf="center"
                            md={4}
                            sx={{
                              paddingLeft: "8px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            <Grid
                              item
                              sx={{
                                paddingBottom: "5px",
                                paddingTop: "5px",
                              }}
                            >
                              <Typography color="white">
                                {d.recruiterEmail}
                              </Typography>
                            </Grid>
                            <Grid  item md={4}>
                              <Button  variant="outlined">Change Password</Button>
                              </Grid>
                              <Grid item md={4}>
                              <Button variant="outlined">Delete User</Button>
                              </Grid>
                            {/* <Grid
                              item
                              sx={{
                                paddingBottom: "5px",
                                paddingTop: "1px",
                              }}
                            >
                              <Typography color="white">
                                Public address : {d.address}
                              </Typography>
                            </Grid> */}
                          </Grid>
                          {/* <Grid
                            item
                            alignSelf="center"
                            md={3}
                            sx={{
                              paddingLeft: "8px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            <Typography color="white">{d.role}</Typography>
                          </Grid> */}
                          {/* <Grid
                            item
                            md={3}
                            alignSelf="center"
                            sx={{
                              paddingLeft: "8px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            {d.isLoggedIn ? (
                              <span
                                style={{
                                  color: "white",
                                  backgroundColor: "#6ab15c",
                                  padding: "5px",
                                  borderRadius: "5px",
                                }}
                              >
                                online
                              </span>
                            ) : (
                              <span
                                style={{
                                  backgroundColor: "#e34d43",
                                  borderRadius: "5px",
                                  color: "white",
                                  padding: "5px",
                                }}
                              >
                                offline
                              </span>
                            )}
                          </Grid> */}
                        </Grid>
                      );
                    })}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RecruiterDashboard;
