import React, { useState } from "react";
import { getSemDetails } from "./getHandler";
import SemesterTable from "./SemesterTable";
import SetSemester from "./SetSemesterTable";
function InterfaceCard(props){
    let address=localStorage.getItem('address');
    let [semDetails,setSem]=useState([]);
    if(semDetails.length==0)
    getSemDetails(address).then((res,err)=>setSem([...res]));
    console.log((semDetails[0]));
    if(semDetails[0]!='0'){
        return <SemesterTable />
    }else{
        return <SetSemester />;
    }
}
export default InterfaceCard;