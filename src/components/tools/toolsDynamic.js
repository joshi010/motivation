import React from "react";
import { useParams } from "react-router-dom";
import TimeManagement from "./timeManagement/timeManagement";



export default function ToolsDynamic(){
    const { tool } = useParams();


    switch(tool){
        case 'time-management': 
        return <TimeManagement />
    }
}