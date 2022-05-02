import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { hashProvider } from "../../App";
import { getSemDetails } from "./getHandler";
import SemesterTable from "./SemesterTable";
import SetSemester from "./SetSemesterTable";
function InterfaceCard(props) {
  let query = useParams();
  let [hash,setHash]=useContext(hashProvider)
  console.log("Query is ", query);
  let address = localStorage.getItem("address");
  let [semDetails, setSem] = useState([]);
  if (semDetails.length == 0)
    getSemDetails(parseInt(query["sem"]), address).then((res, err) =>
      setSem([...res])
    );
  console.log("Sem details : ", semDetails[0]);
  if(hash){
  if (semDetails[0] > "0") {
    return <SemesterTable />;
  } else {
    return <SetSemester edit={false} />;
  }
}else{
  return <Navigate to={"/login"} />
}
}
export default InterfaceCard;
