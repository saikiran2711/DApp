import { Box, Hidden, Paper, Typography } from "@mui/material";
import React from "react";
function Profile(props) {
  return (
    <Box width={1 / 4} margin="auto" position="absolute" top="50%">
      <Paper elevation={3} sx={{ margin: 1, padding: 2 }}>
        <Typography padding={1}> Name : SAmpath</Typography>
        <Typography padding={1}>Your Roll No : 245118733024</Typography>
        <Typography noWrap padding={1}>
          Your Public Key :
          0xyyyyyyyywyqyywysyysdafadsfaadsafcsadsavvncjandjnjavinvjdndjfaklnfalkdnfbajkbjakblajkbjldakbajvkcblj
        </Typography>
        <Typography padding={1}>Your CGPA : 7.5</Typography>
      </Paper>
    </Box>
  );
}

export default Profile;
