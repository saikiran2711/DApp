import SemCards from "./SemCards";
import React, { useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import SideBar from "../Dashboard/sidebar";
import { getSemSubjects, semInitializer } from "./getHandler";
import { hashProvider } from "../../App";
import AdminSideBar from "../adminDashboard/sidebar";
function ListSemCards(props) {
  let [hash, setHash] = useContext(hashProvider);
  let a = localStorage.getItem("address");
  useEffect(async () => {
    let res = await getSemSubjects(1, a);
    if (res.length == 0) semInitializer(a).then((res, err) => console.log(res));
  }, []);
  let content = [];
  for (let i = 0; i < 8; i++)
    content.push(
      <Grid item>
        <Link
          to={
            props.admin
              ? "/admin/educationDetails/" + (i + 1)
              : "/educationalDetails/" + (i + 1)
          }
          style={{ textDecoration: "none" }}
        >
          <SemCards {...props} sem={"Semester - " + (i + 1)} id={i + 1} />
        </Link>
      </Grid>
    );
  return hash || props.admin == true ? (
    <Grid container>
      <Grid item>{props.admin == true ? <AdminSideBar /> : <SideBar />}</Grid>
      <Grid item xs={8}>
        <Grid container>{content}</Grid>
      </Grid>
    </Grid>
  ) : (
    <Navigate to={"/login"} />
  );
}
export default ListSemCards;
