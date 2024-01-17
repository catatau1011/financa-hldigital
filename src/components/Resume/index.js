import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {FaRegArrowAltCircleUp, 
    FaRegArrowAltCircleDown, 
    FaDollarSign, 
} from "react-icons/fa";



const Resume =({income,expense,total})=>{
    return(
     <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={<span style={{ color: "green" }}>{income}</span>} />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={<span style={{ color: "red" }}>{expense}</span>} />
        <ResumeItem title= "Total" Icon={FaDollarSign}value= {total} />
    </C.Container>
    );
};

export default Resume;