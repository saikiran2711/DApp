import { TextField, Grid, Box, Checkbox, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AdminSideBar from "./sidebar";
function ListRollNoWithSearchBar(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [rolldata, setRollData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/admin/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const result = data.data;
        const setData = [];
        result.map((res) => {
          const temp = { rollNo: "", address: "" };
          temp["rollNo"] = res.rollNo;
          temp["address"] = res.address;
          setData.push(temp);
        });
        console.log("Set data is : ", setData);
        setRollData(setData);
        // setdata(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
  const sendMailClick=(e,roll)=>{
    console.log("R",roll)

  }
  const handleClickRoll = (roll) => {
    console.log("Rol is :", roll);
    localStorage.setItem("roll", roll);
    const res = rolldata.filter((r) => r.rollNo == roll);

    console.log("Res is :", res);
    localStorage.setItem("address", res[0].address);
    navigate("/admin/students/view/" + roll);
  };
  console.log(search);
  console.log(checked);

  let content = [];
  for (let i = 0; i < rolldata.length; i++) {
    if (search.length == 0 || rolldata[i]["rollNo"].includes(search))
      content.push(
        <Grid item xs={8}>
          <Box
            margin={1}
            
            padding={2}
            bgcolor="violet"
          >
            <Checkbox
              {...label}
              value={rolldata[i]["rollNo"]}
              bgColor="violet"
              onChange={onChangeChecked}
            />
            <Button onClick={() => handleClickRoll(rolldata[i]["rollNo"])} variant="text">{rolldata[i]["rollNo"]}</Button>
            <Box bgcolor="red" display="inline-flex" justifyContent="end">
            <Button variant="outlined" onClick={(e)=>sendMailClick(e,rolldata[i])} sx={{textTransform:"capitalize"}} >Send Email</Button>
            </Box>
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
