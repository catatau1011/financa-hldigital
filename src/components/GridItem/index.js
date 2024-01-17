import React from "react";
import * as C from "./stytes";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const isExpense = item.expense;
  const iconColor = isExpense ? "red" : "green";
  const valueColor = isExpense ? "red" : "green";
  const desc = isExpense ? "red" : "green"; // Adicionando cor vermelha à descrição em caso de saída

  return (
    <C.Tr>
      <C.Td style={{ color: desc }}>{item.desc}</C.Td>
      <C.Td style={{ color: valueColor }}>{item.amount}</C.Td>
      <C.Td alignCenter>{isExpense ? <FaRegArrowAltCircleDown color={iconColor} /> : <FaRegArrowAltCircleUp color={iconColor} />}</C.Td> <C.Td alignCenter>
     
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
      

    </C.Tr>
  );
};

export default GridItem;
