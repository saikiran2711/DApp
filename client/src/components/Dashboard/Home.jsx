import { ArrowForward } from "@mui/icons-material";
import { Paper, Typography, Box } from "@mui/material";
import React from "react";

function Home(props) {
  return (
    <Box width={1 / 6} margin='auto'>
      <Paper elevation={3} sx={{ backgroundColor: "#0e23bc", padding: 1 ,borderRadius:2}}>
        <Typography variant="h5" color="white" fontWeight="bold">
          Profile
        </Typography>
        <Typography
          color="white"
          fontWeight="bold"
          fontSize="12px"
          sx={{ alignItems: "center", flexWrap: "wrap", display: "flex" }}
        >
          Get your profile details here{" "}
         
        </Typography>
        <Box sx={{color:'white'}}><ArrowForward sx={{paddingLeft:25 }} />{" "}</Box>
      </Paper>
    </Box>
  );
}

export default Home;
