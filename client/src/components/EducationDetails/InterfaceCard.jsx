import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { hashProvider } from "../../App";
import { getSemDetails } from "./getHandler";
import SemesterTable from "./SemesterTable";
import SetSemester from "./SetSemesterTable";
function InterfaceCard(props) {
  let query = useParams();
  let [hash, setHash] = useContext(hashProvider);
  console.log("Query is ", query);
  let address = localStorage.getItem("address");
  let [semDetails, setSem] = useState([]);
  if (semDetails.length == 0)
    getSemDetails(parseInt(query["sem"]), address).then((res, err) =>
      setSem([...res])
    );
  console.log("Sem details : ", semDetails[0]);
  if (hash || props.admin==true) {
    if (semDetails[0] > "0") {
      return <SemesterTable {...props} />;
    } else {
      return <SetSemester {...props} edit={false} />;
    }
  } else if(props.admin!=true) {
    return <Navigate to={"/login"} />;
  }
}
export default InterfaceCard;
