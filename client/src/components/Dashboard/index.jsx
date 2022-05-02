import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  IconButton,
  CardContent,
  CardHeader,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { makeStyles, propsToClassKey } from "@mui/styles";
import { useNavigate, Navigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

import SideBar from "./sidebar";
import {
  ArrowForwardIosOutlined,
  ArrowForwardOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { hashProvider } from "../../App";
import LoginComponent from "../authComponents/LoginComponent";

const useStyles = makeStyles({
  cardMui: {
    height: "200px",
    padding: "10px",
    margin: "10px",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

const Index = (props) => {
  let [hash,setHash]=useContext(hashProvider);
  const classes = useStyles();
  let navigate=useNavigate();
  return (
    (hash)?
    <>
      <Grid container display="flex">
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item sx={{ flex: "1", overflowY: "auto" }}>
          <Box
            sx={{
              marginTop: "30px",
              padding: "6px",
            }}
          >
            <Typography variant="h4">Welcome, Mr.Kiran </Typography>
          </Box>
          <Grid
            container
            sx={{
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <Grid item md={3}>
              <Card
                elevation={5}
                sx={{
                  borderRadius: 5,
                  backgroundColor: "#e25474",

                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "0.5s",
                }}
                className={classes.cardMui}
              >
                <Box
                  sx={{
                    padding: "8px",
                    borderBottom: 1,
                    borderBottomColor: "white",
                  }}
                >
                  <Typography variant="h5" color="white">
                    General Details
                  </Typography>
                </Box>

                <CardContent>
                  <Typography sx={{ fontSize: "18px" }} color="white">
                    Get to know your general details.
                  </Typography>
                </CardContent>
                <Link to="/general">
                  <IconButton
                    sx={{
                      position: "relative",
                      left: "19rem",
                      top: "3rem",
                    }}
                  >
                    <ArrowForwardOutlined
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  </IconButton>
                </Link>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card
                sx={{
                  borderRadius: 5,
                  backgroundColor: "#6bb25d",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "0.3s",
                }}
                className={classes.cardMui}
              >
                <Box
                  sx={{
                    padding: "8px",
                    borderBottom: 1,
                    borderBottomColor: "white",
                  }}
                >
                  <Typography variant="h5" color="white">
                    Education Details
                  </Typography>
                </Box>
                <CardContent>
                  <Typography sx={{ fontSize: "18px" }} color="white">
                    Get to know about your educational details.
                  </Typography>
                </CardContent>
                <Link to="/educationalDetails">
                  <IconButton
                    sx={{
                      position: "relative",
                      left: "19rem",
                      top: "1.5rem",
                    }}
                  >
                    <ArrowForwardOutlined
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  </IconButton>
                </Link>
              </Card>
            </Grid>
            <Grid item md={3}>
            <Card
                elevation={5}
                sx={{
                  borderRadius: 5,
                  backgroundColor: "#ff6600",

                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "0.5s",
                }}
                className={classes.cardMui}
              >
                <Box
                  sx={{
                    padding: "8px",
                    borderBottom: 1,
                    borderBottomColor: "white",
                  }}
                >
                  <Typography variant="h5" color="white">
                    Update Log
                  </Typography>
                </Box>

                <CardContent>
                  <Typography sx={{ fontSize: "18px" }} color="white">
                    Get to know your log of your updates...
                  </Typography>
                </CardContent>
                <Link to="/logMessage">
                  <IconButton
                    sx={{
                      position: "relative",
                      left: "19rem",
                      top: "3rem",
                    }}
                  >
                    <ArrowForwardOutlined
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  </IconButton>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
    :
<Navigate to={"/login"} />
  );
};

export default Index;
