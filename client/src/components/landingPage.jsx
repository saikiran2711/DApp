import React from "react";
import {
  Box,
  Grid,
  Card,
  Button,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { ArrowForwardRounded } from "@mui/icons-material";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #26e2d9 , #58a8dd,#a46ef5)",

    height: "100vh",
  },
  rightCircle: {
    width: "170px",
    height: "170px",
    background: "linear-gradient(45deg,#a46ef5 , #26e2d9 )",
    position: "absolute",
    borderRadius: "50%",
    left: "420px",
    zIndex: 10,
    bottom: "380px",
  },
  hoverItem: {
    "&:hover": {
      color: "white",
      backgroundColor: "#a46ef5",
    },
  },
  leftCircle: {
    width: "180px",
    height: "180px",
    background: "linear-gradient(45deg, #26e2d9 , #58a8dd,#a46ef5)",
    position: "relative",
    borderRadius: "50%",
    right: "200px",
    // bottom: "1%",
    top: "10px",
    zIndex: 10,
  },
  card: {
    height: "600px",
    width: "560px",
    margin: "auto",
    opacity: "0.9",
    position: "relative",
    top: "16%",
  },
  loginTypo: {
    color: "#26e2d9",
    direction: "left",
  },
});

const LandingPage = () => {
  const classes = useStyle();
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
                  sx={{
                    fontSize: "50px",
                    fontWeight: "bold",
                  }}
                  className={classes.loginTypo}
                >
                  Welcome,
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: "GrayText" }}>
                  Select your Role to Login
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.rightCircle}></Box>
              </Grid>
              <Grid container spacing={5} sx={{ marginTop: 2 }}>
                <Grid item>
                  <Link
                    to="/admin"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Paper
                      className={classes.hoverItem}
                      elevation={3}
                      sx={{
                        borderRadius: "8%",
                        width: "150px",
                        height: "100px",
                        textAlign: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        display="inline-flex"
                        justifyContent="center"
                        flexDirection="center"
                      >
                        <Typography>Admin</Typography>
                        <ManageAccountsIcon
                          sx={{ color: "#26e2d9", paddingLeft: 1 }}
                        />
                      </Box>
                      <ArrowForwardRounded
                        sx={{
                          display: "flex",
                          width: "inherit",
                          textAlign: "right",
                          position: "relative",
                          top: "1rem",
                          left: "3rem",
                        }}
                      />
                    </Paper>
                  </Link>
                </Grid>

                <Grid item>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Paper
                      elevation={3}
                      className={classes.hoverItem}
                      sx={{
                        borderRadius: "8%",
                        width: "150px",
                        height: "100px",
                        textAlign: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        display="inline-flex"
                        justifyContent="center"
                        flexDirection="center"
                      >
                        <Typography>Student</Typography>
                        <AccountCircleIcon
                          sx={{ color: "#26e2d9", paddingLeft: 1 }}
                        />
                      </Box>
                      <ArrowForwardRounded
                        sx={{
                          display: "flex",
                          width: "inherit",
                          textAlign: "right",
                          position: "relative",
                          top: "1rem",
                          left: "3rem",
                        }}
                      />
                    </Paper>
                  </Link>
                </Grid>
              </Grid>
              {/* <Grid
                  item
                  sx={{
                    marginTop: "90px",
                    //   backgroundColor: "pink",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #a46ef5",
                  }}
                  className={classes.hoverItem}
                >
                  <Box>
                    <Grid container>
                      <Grid
                        item
                        alignSelf="center"
                        sx={{ marginRight: "10px" }}
                      >
                        <ManageAccountsIcon
                          sx={{ color: "#26e2d9" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid
                        item
                        //   alignContent="center"
                        alignSelf="center"
                      >
                        <Typography fontSize="18px"> Admin Login</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid> */}
              {/* </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                 */}
              {/* <Grid
                  item
                  sx={{
                    marginTop: "10px",
                    //   backgroundColor: "pink",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #a46ef5",
                  }}
                  className={classes.hoverItem}
                >
                  <Box>
                    <Grid container>
                      <Grid
                        item
                        alignSelf="center"
                        sx={{ marginRight: "10px" }}
                      >
                        <AccountCircleIcon
                          sx={{ color: "#26e2d9" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item alignSelf="center">
                        <Typography fontSize="18px">Student Login</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid> */}
              {/* </Link> */}

              <Grid item>
                <Box className={classes.leftCircle}></Box>
              </Grid>
            </Box>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default LandingPage;
