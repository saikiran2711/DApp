import { useParams } from "react-router"
import React from "react";
function TempCompo (props){
    const query=useParams();
    console.log(query['roll']);
    return <h1>Hi</h1>
}

export default TempCompo;