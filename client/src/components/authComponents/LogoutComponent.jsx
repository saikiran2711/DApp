import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogoutComponent = () => {
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9000/auth/logout", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        address: localStorage.getItem("address"),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <CircularProgress />;
};

export default LogoutComponent;
