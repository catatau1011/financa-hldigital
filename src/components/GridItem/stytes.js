import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    paddding-top: 15px;
    text-align: ${(props)=>(props.alignCenter ? "center" : "start")};
    word-break:break-all;
    
    
    svg{
        width: 18px;
        heigth:18px;
    }

`;

