import React from "react";
import * as C from "./styles";
import ImagemLogo from "../images/hlDigital.jpg";

const Header =()=>{
    return(
    <C.Container>
        <C.Header>
            <C.ImagemLogo src={ImagemLogo} alt="Logo" />
            <C.Title>Controle Financeiro</C.Title>
        </C.Header>
    </C.Container>
    );
};

export default Header;