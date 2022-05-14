import { TextField, Grid, Box, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AdminSideBar from "./sidebar";
function ListRollNoWithSearchBar(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const mockData = [
    "2451-18-733-024",
    "2451-18-733-023",
    "2451-18-733-022",
    "2451-18-733-025",
    "2451-18-733-042",
  ];
  const [checked, setChecked] = useState([]);
  let [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onchange = (e) => {
    setSearch(e.target.value);
  };
  const onChangeChecked = (e) => {
    console.log(e);
    if (e.target.checked) setChecked((prev) => [...prev, e.target.value]);
    else {
      let index = checked.indexOf(e.target.value);
      checked.splice(index, 1);
      setChecked(checked);
    }
  };
  const handleClickRoll = (roll) => {
    navigate("/admin/students/view/" + roll);
  };
  console.log(search);
  console.log(checked);

  let content = [];
  for (let i = 0; i < mockData.length; i++) {
    if (search.length == 0 || mockData[i].includes(search))
      content.push(
        <Grid item xs={8}>
          <Box
            margin={1}
            onClick={() => handleClickRoll(mockData[i])}
            padding={2}
            bgcolor="violet"
          >
            <Checkbox
              {...label}
              value={mockData[i]}
              bgColor="violet"
              onChange={onChangeChecked}
            />
            {mockData[i]}
          </Box>
        </Grid>
      );
  }
  return (
    <Grid container>
      <Grid item>
        <AdminSideBar />
      </Grid>
      <Grid item xs={8} overflow="scroll">
        <TextField onChange={onchange} />
        <Grid container>{content}</Grid>
      </Grid>
    </Grid>
  );
}
export default ListRollNoWithSearchBar;
