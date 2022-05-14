import { ArrowForward } from "@mui/icons-material";
import { Paper, Box, Typography } from "@mui/material";
import React from "react";
function SemCards(props) {
  return (
    <Paper
      {...props}
      sx={{
        width: "fit-content",
        margin: 5,
        backgroundColor: "blue",
        color: "white",
        borderRadius: 5,
      }}
      elevation={5}
    >
      <Box sx={{ paddingBottom: 2, paddingTop: 5, paddingX: 5 }}>
        {props.sem}
      </Box>
      <ArrowForward
        sx={{
          width: "inherit",
          marginBottom: 3,
          textAlign: "right",
          marginLeft: 15,
        }}
      />
    </Paper>
  );
}

export default SemCards;
