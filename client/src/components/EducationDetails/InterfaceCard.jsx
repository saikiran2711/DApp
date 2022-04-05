import React, { useState } from "react";
import { useParams } from "react-router";
import { getSemDetails } from "./getHandler";
import SemesterTable from "./SemesterTable";
import SetSemester from "./SetSemesterTable";
function InterfaceCard(props) {
  let query = useParams();
  console.log("Query is ", query);
  let address = localStorage.getItem("address");
  let [semDetails, setSem] = useState([]);
  if (semDetails.length == 0)
    getSemDetails(query["sem"], address).then((res, err) => setSem([...res]));
  console.log(semDetails[0]);
  if (semDetails[0] > "0") {
    return <SemesterTable />;
  } else {
    return <SetSemester edit={false} />;
  }
}
export default InterfaceCard;
